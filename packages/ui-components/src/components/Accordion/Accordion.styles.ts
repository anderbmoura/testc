import { styled, Accordion, XStack } from 'tamagui';
import { borderWidth } from '../../config/tokens/borderWidth/borderWidth';
import { borderRadius } from '../../config/tokens/borderRadius/borderRadius';

export const AccordionContainer = styled(Accordion, {
  name: 'Accordion',
  display: 'flex',
  width: '100%',
  gap: '$space.micro',
  focusStyle: {
    borderColor: '$neutral12',
  },
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  variants: {
    collapsed: {
      true: {
        borderRadius: borderRadius.large,
      },
      false: {
        borderTopLeftRadius: borderRadius.large,
        borderTopRightRadius: borderRadius.large,
      },
    },
  },
});

export const AccordionTrigger = styled(Accordion.Trigger, {
  name: 'Accordion.Trigger',
  width: '100%',
  flexDirection: 'row',
  backgroundColor: 'transparent',
  padding: '$space.tiny',
  justifyContent: 'space-between',
  hoverStyle: {
    backgroundColor: '$neutralHover1',
  },
  pressStyle: {
    backgroundColor: '$neutralPressed1',
  },
  disabledStyle: {
    backgroundColor: '$disabled2',
    borderColor: '$disabledOutlined1',
  },

  '$platform-web': {
    borderWidth: borderWidth.none,
  },
  variants: {
    collapsed: {
      true: {
        borderBottomColor: '$outlined1',
        borderBottomWidth: borderWidth.thin,
      },
      false: {},
    },
  },
});

export const AccordionContent = styled(Accordion.Content, {
  name: 'Accordion.Content',
  animation: 'quick',
  exitStyle: { opacity: 0 },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

export const AccordionContentFooter = styled(XStack, {
  name: 'Accordion.Content.Footer',
  justifyContent: 'space-between',
  padding: '$space.tiny',
});

export const AccordionTypeVariants = {
  default: {
    borderWidth: borderWidth.thin,
    borderColor: '$outlined1',
  },
  borderless: {
    backgroundColor: 'transparent',
    borderWidth: borderWidth.thin,
  },
} as const;
