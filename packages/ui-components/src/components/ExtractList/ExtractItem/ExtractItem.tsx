import { ExtractListVariant } from '../ExtractList.model';
import { useTransformIcon } from '../../../utils';
import { styled, View, XStack, YStack } from 'tamagui';
import { LabelSmall, LabelStandard } from '../../Typography';
import { ExtractItemProps } from './ExtractItem.model';

const SectionListItem = styled(XStack, {
  name: 'SectionListItem',
  justifyContent: 'space-between',
  padding: '$space.quark',
  marginTop: '$space.tiny',
});

const SectionContent = styled(XStack, {
  name: 'SectionContent',
  display: 'flex',
  alignItems: 'center',
});

const SectionColumnText = styled(YStack, {
  name: 'SectionColumnText',
  gap: '$space.quark',
  display: 'flex',
  justifyContent: 'center',
});

// Icon Props
type ItemIconProps = {
  icon?: React.ReactNode;
  variant: ExtractListVariant;
  size?: number;
};

// Icon color mapping
const iconColorMap = {
  success: '$success',
  neutral: '$onNeutral2',
  danger: '$danger',
};

// Icon Component
const ItemIcon: React.FC<ItemIconProps> = ({ icon, variant, size = 24 }) => {
  const transformIcon = useTransformIcon();
  const iconColor = iconColorMap[variant];

  return (
    <View padding={'$space.micro'}>{transformIcon(icon, size, iconColor)}</View>
  );
};

export const ExtractItem: React.FC<ExtractItemProps> = ({
  item,
  icon,
  variant = 'neutral',
  showIcon = true,
  showSupportTextValue = true,
}) => {
  return (
    <SectionListItem
      hoverStyle={{
        backgroundColor: '$neutral5',
      }}
      pressStyle={{
        backgroundColor: '$neutral6',
      }}
      focusStyle={{
        borderWidth: '$borderWidth.thick',
        borderColor: '$borderColorFocus',
        borderRadius: '$radius.nano',
      }}
    >
      <SectionContent>
        {showIcon && icon ? <ItemIcon icon={icon} variant={variant} /> : null}
        <SectionColumnText>
          <LabelStandard color={'$color11'} fontWeight={'$400'}>
            {item.service}
          </LabelStandard>
          <LabelSmall color={'$color9'} fontWeight={'$400'}>
            {item.detail}
          </LabelSmall>
        </SectionColumnText>
      </SectionContent>
      <SectionColumnText>
        <LabelStandard color={'$color11'}> {item.value}</LabelStandard>
        {showSupportTextValue && item?.supportTextValue ? (
          <LabelStandard color={'$color9'}>
            {item.supportTextValue}
          </LabelStandard>
        ) : null}
      </SectionColumnText>
    </SectionListItem>
  );
};
