import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { Image } from 'react-native';

export interface UseImagePreloaderProps {
  /**
   * Array de URLs das imagens para precarregar
   */
  imageUrls: string[];

  /**
   * Callback executado quando todas as imagens estão carregadas
   */
  onAllImagesLoaded?: () => void;

  /**
   * Callback executado quando uma imagem individual é carregada
   */
  onImageLoaded?: (url: string, index: number) => void;

  /**
   * Callback executado quando há erro no carregamento de uma imagem
   */
  onImageError?: (url: string, index: number, error: Error | Event) => void;
}

export interface UseImagePreloaderReturn {
  /**
   * Se todas as imagens estão carregadas
   */
  allImagesLoaded: boolean;

  /**
   * Array indicando quais imagens já foram carregadas
   */
  loadedImages: boolean[];

  /**
   * Número total de imagens carregadas
   */
  loadedCount: number;

  /**
   * Progresso do carregamento (0-1)
   */
  loadingProgress: number;

  /**
   * Array de URLs que falharam ao carregar
   */
  failedUrls: string[];

  /**
   * Função para recarregar uma imagem específica
   */
  retryImage: (index: number) => void;

  /**
   * Função para recarregar todas as imagens que falharam
   */
  retryFailedImages: () => void;
}

export const useImagePreloader = ({
  imageUrls,
  onAllImagesLoaded,
  onImageLoaded,
  onImageError,
}: UseImagePreloaderProps): UseImagePreloaderReturn => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(() =>
    new Array(imageUrls.length).fill(false)
  );
  const [failedUrls, setFailedUrls] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Use ref para evitar re-renders desnecessários
  const hasCalledOnAllLoaded = useRef(false);

  // Memoize valores calculados para evitar recalculações desnecessárias
  const computedValues = useMemo(() => {
    const loadedCount = loadedImages.filter(Boolean).length;
    const allImagesLoaded =
      loadedCount === imageUrls.length && imageUrls.length > 0 && isInitialized;
    const loadingProgress =
      imageUrls.length > 0 ? loadedCount / imageUrls.length : 0;

    return {
      loadedCount,
      allImagesLoaded,
      loadingProgress,
    };
  }, [loadedImages, imageUrls.length, isInitialized]);

  const preloadImage = useCallback(
    (url: string, index: number) => {
      // Para React Native, usamos Image.prefetch
      if (Image.prefetch) {
        Image.prefetch(url)
          .then(() => {
            setLoadedImages(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            setFailedUrls(prev => prev.filter(failedUrl => failedUrl !== url));
            onImageLoaded?.(url, index);
          })
          .catch(error => {
            setFailedUrls(prev => [
              ...prev.filter(failedUrl => failedUrl !== url),
              url,
            ]);
            onImageError?.(url, index, error);
          });
      } else {
        // Para Web (Storybook), usamos new Image()
        if (typeof globalThis !== 'undefined' && 'Image' in globalThis) {
          const ImageConstructor = (
            globalThis as unknown as {
              Image: new () => Record<string, unknown>;
            }
          ).Image;
          const img = new ImageConstructor();
          (img as { onload: (() => void) | null }).onload = () => {
            setLoadedImages(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            setFailedUrls(prev => prev.filter(failedUrl => failedUrl !== url));
            onImageLoaded?.(url, index);
          };
          (
            img as { onerror: ((error: Event | string) => void) | null }
          ).onerror = (error: Event | string) => {
            setFailedUrls(prev => [
              ...prev.filter(failedUrl => failedUrl !== url),
              url,
            ]);
            onImageError?.(
              url,
              index,
              error instanceof Error ? error : new Error(String(error))
            );
          };
          (img as { src: string }).src = url;
        } else {
          // Fallback: marca como carregada se não conseguir precarregar
          setLoadedImages(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          onImageLoaded?.(url, index);
        }
      }
    },
    [onImageLoaded, onImageError]
  );

  const retryImage = useCallback(
    (index: number) => {
      if (index >= 0 && index < imageUrls.length) {
        setLoadedImages(prev => {
          const newState = [...prev];
          newState[index] = false;
          return newState;
        });
        preloadImage(imageUrls[index], index);
      }
    },
    [imageUrls, preloadImage]
  );

  const retryFailedImages = useCallback(() => {
    failedUrls.forEach(url => {
      const index = imageUrls.indexOf(url);
      if (index !== -1) {
        retryImage(index);
      }
    });
  }, [failedUrls, imageUrls, retryImage]);

  // Effect para precarregar todas as imagens quando a lista muda
  useEffect(() => {
    setLoadedImages(new Array(imageUrls.length).fill(false));
    setFailedUrls([]);
    setIsInitialized(false);
    hasCalledOnAllLoaded.current = false;

    if (imageUrls.length > 0) {
      imageUrls.forEach((url, index) => {
        preloadImage(url, index);
      });
      setIsInitialized(true);
    }
  }, [imageUrls, preloadImage]);

  // Effect para chamar callback quando todas as imagens estão carregadas
  useEffect(() => {
    if (computedValues.allImagesLoaded && !hasCalledOnAllLoaded.current) {
      hasCalledOnAllLoaded.current = true;
      onAllImagesLoaded?.();
    }
  }, [computedValues.allImagesLoaded, onAllImagesLoaded]);

  return {
    allImagesLoaded: computedValues.allImagesLoaded,
    loadedImages,
    loadedCount: computedValues.loadedCount,
    loadingProgress: computedValues.loadingProgress,
    failedUrls,
    retryImage,
    retryFailedImages,
  };
};
