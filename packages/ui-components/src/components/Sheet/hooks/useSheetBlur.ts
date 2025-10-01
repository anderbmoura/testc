export interface UseSheetBlurReturn {
  blurEnabled: boolean;
  blurIntensity: number;
  blurBackgroundColor: string;
}

export const useSheetBlur = (
  variant: 'default' | 'onMediaBg' = 'default'
): UseSheetBlurReturn => {
  const blurEnabled = variant === 'onMediaBg';
  const blurIntensity = blurEnabled ? 6 : 0;

  const blurBackgroundColor =
    variant === 'onMediaBg'
      ? 'rgba(0, 0, 0, 0.2)'
      : 'rgba(255, 255, 255, 0.25)';

  return {
    blurEnabled,
    blurIntensity,
    blurBackgroundColor,
  };
};
