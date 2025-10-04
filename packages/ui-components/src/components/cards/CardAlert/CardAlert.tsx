import React from 'react';
import { View, Text, styled, Button as TamaguiButton } from 'tamagui';
import {
  InfoCircle,
  BadgeCheck,
  WarningTriangle,
  WarningHexagon,
  NavArrowRight,
} from 'iconoir-react-native';
import { CardAlertProps } from './CardAlert.model';

const CardAlertContainer = styled(View, {
  name: 'CardAlertContainer',
  borderRadius: 16, // border/radius/large
  paddingTop: 12, // spacing/micro
  paddingBottom: 12, // spacing/micro
  paddingLeft: 16, // spacing/tiny
  paddingRight: 16, // spacing/tiny
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: 16,
  width: 380,
  height: 108,

  variants: {
    variant: {
      info: {
        backgroundColor: '#E5F5F8', // var(--color-informative-informative-bg-color-2)
      },
      success: {
        backgroundColor: '#E7F4EA',
      },
      warning: {
        backgroundColor: '#FFF9E6',
      },
      danger: {
        backgroundColor: '#FBEBEB',
      },
    },

    hasAction: {
      true: {
        paddingTop: 12,
        paddingBottom: 0,
        height: 140,
      },
    },
  } as const,
});

const IconContainer = styled(View, {
  name: 'IconContainer',
  width: 24,
  height: 24,
  flexShrink: 0,
});

const TextContainer = styled(View, {
  name: 'TextContainer',
  flex: 1,
  width: 308,

  variants: {
    hasAction: {
      true: {
        height: 128,
      },
      false: {
        height: 84,
      },
    },
  } as const,
});

const ContentContainer = styled(View, {
  name: 'ContentContainer',
  gap: 8,
});

const TitleText = styled(Text, {
  name: 'TitleText',
  width: 308,
  height: 28,
  fontFamily: '$body', // font/family/2
  fontSize: 18, // font/size/tiny (conforme especificação)
  fontWeight: '400', // font/weight/400
  lineHeight: 28, // font/line-height/28
  letterSpacing: 0.5, // font/letter-spacing/extended

  variants: {
    variant: {
      info: {
        color: '#026273', // var(--color-informative-on-informative-bg-color-10)
      },
      success: {
        color: '#0D581D',
      },
      warning: {
        color: '#654C02',
      },
      danger: {
        color: '#8C2424',
      },
    },
  } as const,
});

const DescriptionText = styled(Text, {
  name: 'DescriptionText',
  width: 308,
  height: 48,
  fontFamily: '$body', // font/family/2
  fontSize: 16, // font/size/micro
  fontWeight: '400', // font/weight/400
  lineHeight: 24, // font/line-height/24
  letterSpacing: 0.5, // font/letter-spacing/extended
  color: '#22292E', // var(--color-neutral-onBackground1)
});

const ActionContainer = styled(View, {
  name: 'ActionContainer',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: 0,
  gap: 12,
  width: 308,
  height: 44,
});

const ActionButton = styled(TamaguiButton, {
  name: 'ActionButton',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 0, // spacing/none
  paddingBottom: 0, // spacing/none
  paddingLeft: 4, // spacing/quark
  paddingRight: 4, // spacing/quark
  gap: 4,
  minWidth: 71, // largura mínima baseada no Figma
  height: 44,
  borderRadius: 1000, // border/radius/pill
  backgroundColor: 'transparent', // type="chromeless"
  borderWidth: 0,
  hoverStyle: {
    backgroundColor: 'transparent',
  },
  pressStyle: {
    opacity: 0.7,
  },

  variants: {
    variant: {
      info: {
        '$platform-native': {
          color: '#026273',
        },
      },
      success: {
        '$platform-native': {
          color: '#0D581D',
        },
      },
      warning: {
        '$platform-native': {
          color: '#654C02',
        },
      },
      danger: {
        '$platform-native': {
          color: '#8C2424',
        },
      },
    },
  } as const,
});

const ActionText = styled(Text, {
  name: 'ActionText',
  height: 20,
  fontFamily: '$body', // font/family/2
  fontSize: 14, // font/size/nano
  fontWeight: '500', // font/weight/500 (Medium)
  lineHeight: 20, // font/line-height/20
  letterSpacing: 0.1, // font/letter-spacing/airy
  textAlign: 'center', // vertical-align: middle
  flexShrink: 0, // evita que o texto seja comprimido

  variants: {
    variant: {
      info: {
        color: '#026273', // var(--color-informative-on-informative-bg-color-10)
      },
      success: {
        color: '#0D581D',
      },
      warning: {
        color: '#654C02',
      },
      danger: {
        color: '#8C2424',
      },
    },
  } as const,
});

// Icon mapping
const iconMap = {
  info: InfoCircle,
  success: BadgeCheck,
  warning: WarningTriangle,
  danger: WarningHexagon,
};

// Icon color mapping
const iconColorMap = {
  info: '#026273',
  success: '#0D581D',
  warning: '#654C02',
  danger: '#8C2424',
};

/**
 * CardAlert Component
 *
 * A flexible alert component that displays important information to users with different visual variants.
 * Supports optional action buttons and follows the DSC Design System guidelines.
 *
 * @param props - CardAlert component props
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * // Basic info alert
 * <CardAlert
 *   variant="info"
 *   title="Information"
 *   description="This is an informational message for the user."
 * />
 *
 * // Success alert with action
 * <CardAlert
 *   variant="success"
 *   title="Success"
 *   description="Operation completed successfully."
 *   action={{
 *     label: "Continue",
 *     onPress: () => console.log("Action pressed")
 *   }}
 * />
 * ```
 */
export const CardAlert: React.FC<CardAlertProps> = ({
  variant,
  title,
  description,
  action,
  style,
  testID,
}) => {
  const IconComponent = iconMap[variant];
  const iconColor = iconColorMap[variant];

  return (
    <CardAlertContainer
      variant={variant}
      hasAction={!!action}
      style={style}
      testID={testID}
    >
      <IconContainer>
        <IconComponent
          width={24}
          height={24}
          strokeWidth={1.5}
          color={iconColor}
        />
      </IconContainer>

      <TextContainer hasAction={!!action}>
        <ContentContainer>
          <TitleText variant={variant}>{title}</TitleText>
          <DescriptionText>{description}</DescriptionText>
        </ContentContainer>

        {action && (
          <ActionContainer>
            <ActionButton
              variant={variant}
              onPress={action.onPress}
              testID={testID ? `${testID}-action` : undefined}
            >
              <ActionText variant={variant} numberOfLines={1}>
                {action.label}
              </ActionText>
              <NavArrowRight
                width={16}
                height={16}
                strokeWidth={1.5}
                color={iconColor}
              />
            </ActionButton>
          </ActionContainer>
        )}
      </TextContainer>
    </CardAlertContainer>
  );
};
