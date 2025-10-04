import React, { useState } from 'react';
import { styled, View } from 'tamagui';
import { Dimensions } from 'react-native';
import { SegmentedButtonProps } from './SegmentedButton.model';
import { space } from '../../../config/tokens/space/space';
import { SegmentedButtonItem } from './components/SegmentedButtonItem';

const Container = styled(View, {
  name: 'SegmentedButtonContainer',
  flexDirection: 'row',
  padding: '$quark',
  borderRadius: '$pill',
  gap: '$quark',
  width: '100%',

  variants: {
    disabled: {
      true: {
        backgroundColor: '$neutralBg3',
      },
      false: {
        backgroundColor: '$disabled2',
      },
    },
  },
});

/**
 * Componente DSC SegmentedButton
 *
 * Exibe um grupo de botões segmentados, permitindo a seleção de uma opção entre várias.
 * Pode ser usado como tabs, filtros ou seletores visuais.
 *
 * @param buttons - Lista de botões a serem exibidos
 * Cada botão pode conter:
 * - `label`: texto do botão
 * - `icon`: ícone React
 * - `image`: imagem que substitui ícone e texto
 * - `state`: estado visual (`default`, `hover`, `pressed`, `focused`, `disabled`)
 * - `variant`: estilo visual (`neutral`, `highlight`)
 * - `onPress`: função chamada ao pressionar
 *
 * @param disabled - Desativa todos os botões do grupo
 * @param accessibilityLabel - Rótulo para leitores de tela
 * @param buttonProps - Props adicionais aplicadas a cada botão
 *
 * 📌 **Comportamento visual**:
 * - Se `image` estiver presente, ela **substitui** `icon` e `label`.
 * - Se `image` não estiver presente, o botão exibirá `icon` e/ou `label`.
 *
 * 📌 **Largura dos botões**:
 * - Calculada dinamicamente com base na largura da tela (`Dimensions.get('screen').width`)
 * - Garante que todos os botões tenham **largura igual**, mesmo com conteúdos diferentes.
 */
export const SegmentedButton = ({
  buttons,
  disabled = false,
  accessibilityLabel,
  buttonProps,
}: SegmentedButtonProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonWidth =
    Dimensions.get('screen').width / buttons.length - space.quark;

  return (
    <Container aria-label={accessibilityLabel} disabled={disabled}>
      {buttons.map((btn, index) => {
        const isDisabled = disabled || btn.state === 'disabled';
        const isSelected = !disabled && index === activeIndex;

        const handlePress = () => {
          if (isDisabled) return;
          setActiveIndex(index);
          btn.onPress?.();
        };

        return (
          <SegmentedButtonItem
            key={index}
            index={index}
            btn={btn}
            isSelected={isSelected}
            isDisabled={isDisabled}
            onPress={handlePress}
            buttonProps={buttonProps}
            buttonWidth={buttonWidth}
          />
        );
      })}
    </Container>
  );
};

export default SegmentedButton;
