import React from 'react';
import { ViewProps } from 'react-native';
import Svg, {
  Defs,
  LinearGradient as SVGLinearGradient,
  Stop,
  Rect,
} from 'react-native-svg';
import { LinearGradientProps } from '../SkeletonLoading.model';

export const LinearGradient = ({
  colors,
  locations,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style,
  ...props
}: LinearGradientProps) => {
  const gradientId = 'customGradient';

  return (
    <Svg style={style} {...{ ...props, hitSlop: props.hitSlop ?? undefined }}>
      <Defs>
        <SVGLinearGradient
          id={gradientId}
          x1={`${start.x * 100}%`}
          y1={`${start.y * 100}%`}
          x2={`${end.x * 100}%`}
          y2={`${end.y * 100}%`}
        >
          {colors.map((color, index) => (
            <Stop
              key={index}
              offset={
                locations?.[index] !== undefined
                  ? `${locations[index] * 100}%`
                  : `${(index / (colors.length - 1)) * 100}%`
              }
              stopColor={color}
              stopOpacity={1}
            />
          ))}
        </SVGLinearGradient>
      </Defs>
      <Rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${gradientId})`}
      />
    </Svg>
  );
};
