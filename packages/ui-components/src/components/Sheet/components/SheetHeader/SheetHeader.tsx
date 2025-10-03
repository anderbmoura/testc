import React, { memo, useCallback } from 'react';
import { Xmark } from 'iconoir-react-native';
import Button from '../../../Button';
import { TitleSmall } from '../../../Typography';
import { useTransformIcon } from '../../../../utils';
import type { SheetHeaderProps } from './SheetHeader.model';
import {
  SheetHeaderContainer,
  SheetHeaderContent,
  SheetHeaderSpacer,
  SheetHeaderCloseButton,
  SheetHeaderTitleContainer,
} from './SheetHeader.styles';

/**
 * Componente DSC SheetHeader
 *
 * Cabeçalho do Sheet com ícone, título e botão de fechar.
 *
 * @example
 * ```tsx
 * <SheetHeader
 *   icon={<Heart />}
 *   title="Título do Sheet"
 *   onClose={() => setOpen(false)}
 * />
 * ```
 */
export const SheetHeader: React.FC<SheetHeaderProps> = memo(
  ({ icon, title, leftAligned = false, showCloseButton = true, onClose }) => {
    const transformIcon = useTransformIcon();

    const handleClose = useCallback(() => {
      onClose?.();
    }, [onClose]);

    if (!icon && !title) {
      return null;
    }

    return (
      <SheetHeaderContainer>
        {/* Espaçador à esquerda para balancear o botão de fechar */}
        {!leftAligned && <SheetHeaderSpacer />}

        {/* Conteúdo centralizado ou alinhado à esquerda */}
        <SheetHeaderContent alignment={leftAligned ? 'left' : 'center'}>
          <SheetHeaderTitleContainer>
            {icon && icon}
            {title && <TitleSmall>{title}</TitleSmall>}
          </SheetHeaderTitleContainer>
        </SheetHeaderContent>

        {/* Botão de fechar à direita */}
        {showCloseButton && (
          <SheetHeaderCloseButton>
            <Button onPress={handleClose} type="chromeless">
              {transformIcon(Xmark, 20, '$color12')}
            </Button>
          </SheetHeaderCloseButton>
        )}
        {!showCloseButton && <SheetHeaderSpacer />}
      </SheetHeaderContainer>
    );
  }
);

SheetHeader.displayName = 'SheetHeader';
