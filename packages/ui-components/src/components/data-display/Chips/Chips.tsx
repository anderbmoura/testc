import React, { useMemo, useState } from 'react';
import {
  ChipsProps,
  ChipsLeftSlotProps,
  ChipsRightSlotProps,
} from './Chips.model';
import { Chip } from './Chips.styles';
import { ChipsLeftSlot } from './components/ChipsLeftSlot';
import { ChipsRightSlot } from './components/ChipsRightSlot';
import { LeftSlot } from './components/LeftSlot';
import { RightSlot } from './components/RightSlot';

/**
 * Função helper para extrair props do slot esquerdo dos children
 */
const extractLeftSlotProps = (
  children: React.ReactNode
): ChipsLeftSlotProps | null => {
  const childrenArray = React.Children.toArray(children);
  const leftSlotChild = childrenArray.find(
    child => React.isValidElement(child) && child.type === LeftSlot
  );

  if (React.isValidElement(leftSlotChild)) {
    return leftSlotChild.props as ChipsLeftSlotProps;
  }

  return null;
};

/**
 * Função helper para extrair props do slot direito dos children
 */
const extractRightSlotProps = (
  children: React.ReactNode
): ChipsRightSlotProps | null => {
  const childrenArray = React.Children.toArray(children);
  const rightSlotChild = childrenArray.find(
    child => React.isValidElement(child) && child.type === RightSlot
  );

  if (React.isValidElement(rightSlotChild)) {
    return rightSlotChild.props as ChipsRightSlotProps;
  }

  return null;
};

/**
 * Componente Chips com composition pattern
 *
 * Exibe um chip customizável com texto e slots opcionais à esquerda e direita
 * usando composition pattern para melhor flexibilidade e semântica.
 *
 * @example
 * // Chip básico com check
 * <Chips text="Chip com check" selected={true}>
 *   <Chips.LeftSlot variant="check" />
 * </Chips>
 *
 * @example
 * // Chip com ícone customizado e slot direito
 * <Chips text="Chip customizado" onPress={() => console.log('chip pressed')}>
 *   <Chips.LeftSlot variant="icon" icon={<Star />} />
 *   <Chips.RightSlot variant="clear" />
 * </Chips>
 *
 * @example
 * // Chip com avatar
 * <Chips text="Programa INSS" onPress={() => console.log('program selected')}>
 *   <Chips.LeftSlot variant="avatar" imageSource={{ uri: '/images/inss.png' }} />
 *   <Chips.RightSlot variant="arrow" />
 * </Chips>
 */
const ChipsComponent: React.FC<ChipsProps> = ({
  text,
  selected = false,
  disabled = false,
  onPress,
  children,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const leftSlotProps = useMemo(
    () => extractLeftSlotProps(children),
    [children]
  );

  const rightSlotProps = useMemo(
    () => extractRightSlotProps(children),
    [children]
  );

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const iconColor = useMemo(() => {
    if (disabled) return '$onDisabled';
    return selected ? '$onHighlight' : '$onNeutral1';
  }, [disabled, selected]);

  const renderLeftSlot = useMemo(() => {
    if (!leftSlotProps) return null;

    return (
      <Chip.LeftSlotWrapper>
        <ChipsLeftSlot
          {...leftSlotProps}
          selected={selected}
          iconColor={iconColor}
        />
      </Chip.LeftSlotWrapper>
    );
  }, [leftSlotProps, selected, iconColor]);

  const renderRightSlot = useMemo(() => {
    if (!rightSlotProps) return null;

    return (
      <Chip.RightSlotWrapper>
        <ChipsRightSlot {...rightSlotProps} iconColor={iconColor} />
      </Chip.RightSlotWrapper>
    );
  }, [rightSlotProps, iconColor]);

  return (
    <Chip
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPress={disabled ? undefined : onPress}
      tabIndex={disabled ? -1 : 0}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      {...(isFocused && !disabled ? { focused: true } : { focused: false })}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Chip.Content disabled={disabled} selected={selected} {...(props as any)}>
        <Chip.Row>
          {renderLeftSlot}
          <Chip.LabelWrapper>
            <Chip.Text disabled={disabled} color={iconColor}>
              {text}
            </Chip.Text>
          </Chip.LabelWrapper>
          {renderRightSlot}
        </Chip.Row>
      </Chip.Content>
    </Chip>
  );
};

export const Chips = Object.assign(ChipsComponent, {
  LeftSlot,
  RightSlot,
});
