import { forwardRef } from 'react';
import {
  ColorTokens,
  createStyledContext,
  FontSizeTokens,
  getFontSize,
  GetProps,
  getVariable,
  SizeTokens,
  styled,
  Avatar as TAvatar,
  Text,
  useGetThemedIcon,
  useTheme,
  View,
  withStaticProperties,
} from 'tamagui';

/**
 * Context for Avatar component configuration.
 *
 * Provides shared state for Avatar components including size and color settings.
 * The context uses styled-system tokens for consistent theming across the application.
 *
 */
const AvatarContext = createStyledContext<{
  size: SizeTokens;
  color?: ColorTokens | string;
}>({
  size: '$true',
  color: undefined,
});

/**
 * A styled component that renders an icon frame positioned absolutely within an Avatar component.
 * The frame appears as a small circular badge that can be positioned at any corner of the avatar.
 *
 * @remarks
 * This component uses the AvatarContext and provides variants for customizing placement, offset, and size.
 * The frame has a circular border radius and is positioned with a high z-index to appear above other elements.
 *
 * @example
 * ```tsx
 * <AvatarIconFrame placement="top-right" size="$4" offset={2}>
 *   <Icon name="notification" />
 * </AvatarIconFrame>
 * ```
 *
 * @param placement - Controls the position of the icon frame relative to the avatar
 *   - `'top-right'` - Positions the frame at the top-right corner (default)
 *   - `'top-left'` - Positions the frame at the top-left corner
 *   - `'bottom-right'` - Positions the frame at the bottom-right corner
 *   - `'bottom-left'` - Positions the frame at the bottom-left corner
 *
 * @param offset - Numeric value that adjusts the position offset from the corner.
 *   The direction of the offset is automatically calculated based on the placement.
 *
 * @param size - Token-based size that determines the dimensions of the icon frame.
 *   The actual size is calculated as 33% of the provided size token value.
 */
const AvatarIconFrame = styled(View, {
  context: AvatarContext,
  borderRadius: 1000_000_000,
  zIndex: 100,
  borderWidth: '$1',
  borderColor: '$color1',
  position: 'absolute',
  backgroundColor: '$color5',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    placement: {
      'top-right': {
        top: 0,
        right: 0,
      },
      'top-left': {
        top: 0,
        left: 0,
      },
      'bottom-right': {
        bottom: 0,
        right: 0,
      },
      'bottom-left': {
        bottom: 0,
        left: 0,
      },
    },
    offset: {
      ':number': (val, { props }) => {
        const placement = (props as any).placement;
        const yDir = placement.includes('top') ? -1 : 1;
        const xDir = placement.includes('left') ? -1 : 1;
        return {
          x: val * xDir,
          y: val * yDir,
        };
      },
    },
    size: {
      '...size': (val, { tokens }) => {
        const size = tokens.size[val as keyof typeof tokens.size];
        return {
          width: size.val * 0.33,
          height: size.val * 0.33,
        };
      },
    },
  } as const,
  defaultVariants: {
    placement: 'top-right',
  },
});

/**
 * Calculates the icon size based on the provided font size and scale factor.
 *
 * @param size - The font size token or numeric value to base the icon size on
 * @param scale - The scale factor to apply to the calculated icon size
 * @returns The calculated icon size as a number
 *
 * @remarks
 * - For numeric sizes: multiplies by 0.5 then by the scale factor
 * - For token sizes: converts to font size, multiplies by 0.75, then by the scale factor
 */
const getIconSize = (size: FontSizeTokens, scale: number) => {
  return (
    (typeof size === 'number'
      ? size * 0.5
      : getFontSize(size as FontSizeTokens) * 0.75) * scale
  );
};

/**
 * AvatarIcon component that renders an icon within an Avatar context.
 *
 * @param props - The component props
 * @param props.children - The icon element to be rendered
 * @param props.scaleIcon - Optional scale factor for the icon size (default: 1)
 * @param ref - React ref to be forwarded to the AvatarIconFrame
 *
 * @returns A styled icon component that automatically inherits size and color from AvatarContext
 *
 * @example
 * ```tsx
 * <Avatar>
 *   <AvatarIcon scaleIcon={1.2}>
 *     <SomeIcon />
 *   </AvatarIcon>
 * </Avatar>
 * ```
 */
export const AvatarIcon = AvatarIconFrame.styleable<{ scaleIcon?: number }>(
  (props, ref) => {
    const { children, scaleIcon = 1, ...rest } = props;
    const { size, color: colorProp } = AvatarContext.useStyledContext();

    const theme = useTheme();
    const color = getVariable(
      colorProp ||
        theme[colorProp as any]?.get('web') ||
        theme.color10?.get('web')
    );
    const iconSize = getIconSize(size as FontSizeTokens, scaleIcon);

    const getThemedIcon = useGetThemedIcon({
      size: iconSize,
      color: color as any,
    });
    return (
      <AvatarIconFrame ref={ref} {...rest}>
        {getThemedIcon(children)}
      </AvatarIconFrame>
    );
  }
);

/**
 * A styled wrapper component for Avatar that provides size variants and context.
 *
 * @component
 * @example
 * ```tsx
 * <AvatarWrapper size="medium">
 *   <Avatar src="profile.jpg" alt="User profile" />
 * </AvatarWrapper>
 * ```
 *
 * @param size - The size variant for the avatar wrapper, supports all available size tokens
 * @returns A styled View component with Avatar context and size variants
 */
const AvatarWrapper = styled(View, {
  context: AvatarContext,
  variants: {
    size: {
      '...size': {} as any,
    },
  } as const,
});

/**
 * A styled text component for displaying text content within an Avatar component.
 *
 * @remarks
 * This component extends the base Text component with Avatar-specific styling and context.
 * It uses the body font family and supports dynamic font sizing through variants.
 *
 * @example
 * ```tsx
 * <AvatarText size="$lg">JD</AvatarText>
 * ```
 *
 * @param size - Controls the font size of the text using fontSize tokens
 * @defaultValue size: '$true' - Uses the default true variant for sizing
 */
const AvatarText = styled(Text, {
  context: AvatarContext,
  fontFamily: '$body',
  variants: {
    size: {
      '...fontSize': val => {
        return {
          fontSize: getFontSize(val as FontSizeTokens),
        };
      },
    },
  } as const,
  defaultVariants: {
    size: '$true',
  },
});

/**
 * A wrapper component for TAvatar that provides consistent styling and context integration.
 *
 * @component
 * @param props - The props to pass to the underlying TAvatar component
 * @param ref - Forwarded ref to the TAvatar component
 * @returns A View containing a styled TAvatar with border and elevation
 *
 * @remarks
 * This component uses AvatarContext to get the size prop and wraps TAvatar
 * with a View that provides a circular border and elevation styling.
 */
const AvatarContent = forwardRef<any, GetProps<typeof TAvatar>>(
  (props, ref) => {
    const { size } = AvatarContext.useStyledContext();
    return (
      <View borderWidth="$1" borderColor="$color1" borderRadius={1_000_000_000}>
        <TAvatar elevation={5} size={size} ref={ref} {...props} />
      </View>
    );
  }
);

/**
 * Avatar component with static sub-components for displaying user profile images, fallbacks, and content.
 *
 * @example
 * ```tsx
 * <Avatar>
 *   <Avatar.Image src="user-photo.jpg" alt="User" />
 *   <Avatar.FallBack>JD</Avatar.FallBack>
 * </Avatar>
 * ```
 *
 * @example
 * ```tsx
 * <Avatar>
 *   <Avatar.Content>
 *     <Avatar.Icon name="user" />
 *     <Avatar.Text>John Doe</Avatar.Text>
 *   </Avatar.Content>
 * </Avatar>
 * ```
 */
export const Avatar = withStaticProperties(AvatarWrapper, {
  Content: AvatarContent,
  Image: TAvatar.Image,
  Fallback: TAvatar.Fallback,
  Icon: AvatarIcon,
  Text: AvatarText,
});
