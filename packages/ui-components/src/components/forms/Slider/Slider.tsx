import React from 'react';
import { Slider as TamaguiSlider, styled, XStack, YStack, Text } from 'tamagui';
import type { SliderProps } from './Slider.model';

const SliderContainer = styled(YStack, {
  name: 'SliderContainer',
  width: '100%',
  gap: '$micro',
});

const SliderLabel = styled(Text, {
  name: 'SliderLabel',
  fontFamily: '$body',
  fontSize: '$nano',
  fontWeight: '500',
  color: '$neutral10',
});

const SliderWrapper = styled(XStack, {
  name: 'SliderWrapper',
  width: '100%',
  alignItems: 'center',
  gap: '$smaller',
});

const ProgressText = styled(Text, {
  name: 'ProgressText',
  fontFamily: '$body',
  fontSize: '$micro',
  fontWeight: '400',
  color: '$neutral10',
  minWidth: 80,
  textAlign: 'right',

  variants: {
    disabled: {
      true: {
        color: '$neutral7',
      },
    },
  } as const,
});

const DSCSliderTrack = styled(TamaguiSlider.Track, {
  name: 'DSCSliderTrack',
  height: 8,
  borderRadius: '$nano',
  backgroundColor: '$neutral5',
  gap: '$nano',
  alignItems: 'center',

  variants: {
    disabled: {
      true: {
        backgroundColor: '$neutral4',
      },
    },
  } as const,
});

const DSCSliderTrackActive = styled(TamaguiSlider.TrackActive, {
  name: 'DSCSliderTrackActive',
  backgroundColor: '$highlight8',
  gap: '$nano',
  alignItems: 'center',

  variants: {
    disabled: {
      true: {
        backgroundColor: '$neutral6',
      },
    },
  } as const,
});

const DSCSliderThumb = styled(TamaguiSlider.Thumb, {
  name: 'DSCSliderThumb',
  size: 22,
  backgroundColor: '$highlight8',
  borderWidth: 0,

  hoverStyle: {
    backgroundColor: '$highlight9',
    transform: '$$transform scale(1)',
    borderWidth: 0,
  },
  pressStyle: {
    backgroundColor: '$highlight7',
    transform: '$$transform scale(1)',
    borderColor: '$highlight7',
    borderWidth: 0,
  },
  focusStyle: {
    outlineColor: 'transparent',
  },
  focusVisibleStyle: {
    backgroundColor: '$highlight7',
    outlineColor: '$highlight12',
    outlineWidth: 2,
    outlineStyle: 'solid',
    transform: '$$transform scale(1)',
    boxShadow: 'inset 0 0 0 2px #ffffff',
  },

  variants: {
    disabled: {
      true: {
        backgroundColor: '$neutral5',

        hoverStyle: {
          backgroundColor: '$neutral5',
        },
        pressStyle: {
          backgroundColor: '$neutral5',
        },
      },
    },
  } as const,
});

export const Slider: React.FC<SliderProps> = ({
  value: controlledValue,
  min = 0,
  max = 100,
  step = 1,
  label,
  showProgress = true,
  disabled = false,
  onValueChange,
  testID,
}) => {
  const isControlled = controlledValue !== undefined;

  const displayValue = isControlled
    ? controlledValue
    : onValueChange
      ? 0
      : undefined;
  const percentage =
    displayValue !== undefined ? ((displayValue - min) / (max - min)) * 100 : 0;

  const handleValueChange = (vals: number[]) => {
    onValueChange?.(vals[0]);
  };

  const formatProgress = () => {
    if (label === 'free') {
      return 'progresso';
    }
    return `${Math.round(percentage)}%`;
  };

  const progressLines = formatProgress().includes('%')
    ? [formatProgress(), 'progresso']
    : [formatProgress()];

  return (
    <SliderContainer testID={testID}>
      {label && label !== 'free' && <SliderLabel>{label}</SliderLabel>}

      <SliderWrapper>
        {label === 'free' && (
          <Text fontSize="$micro" color="$neutral10" minWidth={50}>
            {label}
          </Text>
        )}

        <TamaguiSlider
          flex={1}
          value={isControlled ? [controlledValue] : undefined}
          defaultValue={!isControlled ? [0] : undefined}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onValueChange={onValueChange ? handleValueChange : undefined}
          aria-label={label || 'Slider'}
        >
          <DSCSliderTrack disabled={disabled}>
            <DSCSliderTrackActive disabled={disabled} />
          </DSCSliderTrack>
          <DSCSliderThumb index={0} circular disabled={disabled} />
        </TamaguiSlider>

        {showProgress && (
          <YStack minWidth={80} alignItems="flex-end">
            {progressLines.map((line, index) => (
              <ProgressText key={index} disabled={disabled}>
                {line}
              </ProgressText>
            ))}
          </YStack>
        )}
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Slider;
