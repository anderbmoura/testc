import { Button, styled } from 'tamagui';

export const StyledTileButton = styled(Button, {
  name: 'TileButton',
  flexDirection: 'column',
  flexBasis: 0,
  flexShrink: 1,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '$tiny',
  borderRadius: '$radius.big',
  borderWidth: '$borderWidth.thin',
  borderStyle: 'solid',
  minHeight: 96,
  variants: {
    useFixedColors: {
      true: {
        backgroundColor: '$fixedNeutralBg2',
        hoverStyle: {
          backgroundColor: '$fixedHighlightHover1',
        },
        pressStyle: {
          backgroundColor: '$fixedHighlightPressed1',
          borderColor: 'transparent',
        },
        focusStyle: {
          borderColor: '$fixedOnNeutral1',
        },
      },
      false: {
        backgroundColor: '$neutralBg2',
        hoverStyle: {
          backgroundColor: '$highlightHover1',
        },
        pressStyle: {
          backgroundColor: '$highlightPressed1',
          borderColor: 'transparent',
        },
        focusStyle: {
          borderColor: '$onNeutral1',
        },
      },
    },
  } as const,
});
