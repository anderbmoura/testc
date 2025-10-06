import React from 'react';
import { CreditCardButtonProps } from './CreditCardButton.model';
import { Image, Button, Text, View, styled } from 'tamagui';
import { LockSlash } from 'iconoir-react-native';
import { highlightLightPalette } from '../../../config/themes/palettes/extras/highlight';

const DscCreditCardButtonView = styled(View, {
  name: 'DscCreditCardButtonView',
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '$onNeutral3',
  borderRadius: '$radius.small',

  hoverStyle: {
    backgroundColor: '$onNeutral1',
  },

  pressStyle: {
    backgroundColor: '$neutralBg1',
  },
});

const DscCreditCardButtonButton = styled(Button, {
  name: 'DscCreditCardButtonButton',
  flex: 1,
  flexDirection: 'row',
  paddingLeft: '$space.nano',
  paddingRight: '$space.nano',
  gap: '$space.quark',
  position: 'absolute',
  alignSelf: 'center',
  borderRadius: '$radius.pill',
  backgroundColor: '$colorTransparent',
  borderColor: '$highlight',
  borderWidth: '$borderWidth.thin',
  fontSize: '$nano',
  fontWeight: '$500',
  zIndex: '$zIndex.100',

  variants: {
    hover: {
      backgroundColor: '$highlightHover1',
      borderColor: '$highlightHover2',
    },
    pressed: {
      backgroundColor: '$highlightPressed1',
      borderColor: '$highlightPressed2',
    },
    focused: {
      borderColor: '$outlinedDarkTone',
    },
  },
});

const CreditCardButtonInfo = styled(View, {
  name: 'CreditCardButtonInfo',

  position: 'absolute',
  width: '100%',
  height: '100%',
  paddingTop: '$space.tiny',
  paddingBottom: '$space.tiny',
  paddingLeft: '$space.smaller',
  paddingRight: '$space.smaller',
  flex: 1,
  borderRadius: '$radius.small',

  variants: {
    hover: {
      backgroundColor: '$onNeutral1',
    },
    pressed: {
      backgroundColor: '$neutralBg1',
    },
  },
});

const CreditCardButtonInfoView = styled(View, {
  name: 'CreditCardButtonInfoView',

  flexDirection: 'row',
  justifyContent: 'space-between',
});

const CreditCardButtonInfoText = styled(Text, {
  name: 'CreditCardButtonInfoText',

  fontWeight: '$700',
  color: '$onNeutralInverse',
});

const CreditCardButtonInfoSmallText = styled(Text, {
  name: 'CreditCardButtonInfoSmallText',

  fontWeight: '$400',
  color: '$onNeutralInverse',
});

/**
 * Componente DSC CreditCardButton
 *
 * @param active - Define se o botão de desbloquear apareece ou não
 * ```tsx
 * <CreditCardButton active={true} onPress={() => {}} />
 * ```
 *
 * @param number - Número do cartão a ser exibido no card
 * ```tsx
 * <CreditCardButton number={'0000000000000000'} onPress={() => {}} />
 * ```
 *
 * @param date - Data de validade do cartão a ser exibida no card
 * ```tsx
 * <CreditCardButton date={'01/01/2025'} onPress={() => {}} />
 * ```
 *
 * @param type - Tipo do cartão a ser exibida no card
 * ```tsx
 * <CreditCardButton type={'Virtual'} onPress={() => {}} />
 * ```
 *
 * @param onPress - Função chamada ao clicar no botão "Debloquear"
 * ```tsx
 * <CreditCardButton onPress={() => debloqueaCartão()} />
 * ```
 *
 * @example
 * ```tsx
 * import { CreditCardButton } from '@superapp-caixa/dsc-library';
 *
 * // Botão plain (padrão) large
 * <CreditCardButton
 *  active={false}
 *  number={'0000000000000000'}
 *  date={'01/01/2025'}
 *  type={'Virtual'}
 *  onPress={() => debloqueaCartão()}
 *  />
 * ```
 */

export const CreditCardButton: React.FC<CreditCardButtonProps> = ({
  active,
  number,
  date,
  type,
  cardBackground,
}) => {
  return (
    <DscCreditCardButtonView>
      <Image
        height={92}
        minWidth={312}
        borderRadius={8}
        opacity={active ? 1 : 0.7}
        source={{
          uri: cardBackground
            ? cardBackground
            : '/images/example/credit-card-background.png',
        }}
      />
      {!active && (
        <DscCreditCardButtonButton>
          <LockSlash color={highlightLightPalette.highlight} />
          <Text color={'$highlight'}>Debloquear</Text>
        </DscCreditCardButtonButton>
      )}
      <CreditCardButtonInfo opacity={active ? 1 : 0.7}>
        <View style={{ flex: 1 }}>
          <CreditCardButtonInfoText>
            {`${number.slice(0, 4)} ${number.slice(4, 6)}•• •••• ${number.slice(12)}`}
          </CreditCardButtonInfoText>
        </View>
        <CreditCardButtonInfoView>
          <CreditCardButtonInfoSmallText>
            {`${date.slice(3, 5)}/${date.slice(8)}`}
          </CreditCardButtonInfoSmallText>
          <CreditCardButtonInfoSmallText>
            {`Cartão ${type}`}
          </CreditCardButtonInfoSmallText>
        </CreditCardButtonInfoView>
      </CreditCardButtonInfo>
    </DscCreditCardButtonView>
  );
};

export default CreditCardButton;
