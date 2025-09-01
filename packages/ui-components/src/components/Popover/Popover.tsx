import { styled, Popover as TPopover, withStaticProperties } from 'tamagui';

const PopoverContent = styled(TPopover.Content, {
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$radius.large',
  p: '$size.1',
  backgroundColor: '$neutralBg2',
  enterStyle: { y: -10, opacity: 0 },
  exitStyle: { y: -10, opacity: 0 },
  elevate: true,
  animation: [
    'quick',
    {
      opacity: {
        overshootClamping: true,
      },
    },
  ],
  padding: '$smaller',
  shadowOffset: { width: 0, height: 14 },
  shadowColor: '$neutral3',
  shadowOpacity: 0.04,
  shadowRadius: 14,
  elevation: 4,
});

const PopoverArrow = styled(TPopover.Arrow, {
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$neutralBg2',
  size: 20,
});

/**
 * A popover component that displays floating content relative to a trigger element.
 *
 * @example
 * ```tsx
 * <Popover>
 *   <Popover.Content>
 *     <Text>Popover content goes here</Text>
 *     <Popover.Arrow />
 *   </Popover.Content>
 * </Popover>
 * ```
 *
 * @remarks
 * This component is created using `withStaticProperties` to provide a compound component pattern.
 * It includes `Content` and `Arrow` as static properties for better developer experience.
 */
export const Popover = withStaticProperties(TPopover, {
  Content: PopoverContent,
  Arrow: PopoverArrow,
});
