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
  backgroundColor: '$fixedNeutralBg2',
  minHeight: 96,
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
});
