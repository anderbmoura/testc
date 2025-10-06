import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'tamagui';
import { LabelTinyBold } from '../../../components/data-display/Typography';
import { borderWidth } from '../borderWidth/borderWidth';

const meta: Meta = {
  title: 'Design System/Tokens/BorderRadius',
  parameters: {
    docs: {
      page: null, // Desabilita a página de docs automática
      source: {
        transform: () => {
          return `<View flexDirection="row" gap="$small" flexWrap="wrap">
  <View
    padding="$small"
    borderRadius="$quark"
    backgroundColor="$neutralBg2"
    borderColor="$outlined2"
    borderWidth={borderWidth.thin}
    alignItems="center"
    justifyContent="center"
    minWidth={120}
    minHeight={80}
  >
    <LabelTinyBold textAlign="center">
      quark (2px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    borderRadius="$nano"
    backgroundColor="$neutralBg2"
    borderColor="$outlined2"
    borderWidth={borderWidth.thin}
    alignItems="center"
    justifyContent="center"
    minWidth={120}
    minHeight={80}
  >
    <LabelTinyBold textAlign="center">
      nano (4px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    borderRadius="$small"
    backgroundColor="$neutralBg2"
    borderColor="$outlined2"
    borderWidth={borderWidth.thin}
    alignItems="center"
    justifyContent="center"
    minWidth={120}
    minHeight={80}
  >
    <LabelTinyBold textAlign="center">
      small (8px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    borderRadius="$medium"
    backgroundColor="$neutralBg2"
    borderColor="$outlined2"
    borderWidth={borderWidth.thin}
    alignItems="center"
    justifyContent="center"
    minWidth={120}
    minHeight={80}
  >
    <LabelTinyBold textAlign="center">
      medium (12px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    borderRadius="$large"
    backgroundColor="$neutralBg2"
    borderColor="$outlined2"
    borderWidth={borderWidth.thin}
    alignItems="center"
    justifyContent="center"
    minWidth={120}
    minHeight={80}
  >
    <LabelTinyBold textAlign="center">
      large (16px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    borderRadius="$big"
    backgroundColor="$neutralBg2"
    borderColor="$outlined2"
    borderWidth={borderWidth.thin}
    alignItems="center"
    justifyContent="center"
    minWidth={120}
    minHeight={80}
  >
    <LabelTinyBold textAlign="center">
      big (24px)
    </LabelTinyBold>
  </View>
</View>`;
        },
        state: 'open',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <View flexDirection="row" gap="$small" flexWrap="wrap">
      <View
        padding="$small"
        borderRadius="$quark"
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        borderWidth={borderWidth.thin}
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <LabelTinyBold textAlign="center">quark (2px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        borderRadius="$nano"
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        borderWidth={borderWidth.thin}
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <LabelTinyBold textAlign="center">nano (4px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        borderRadius="$small"
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        borderWidth={borderWidth.thin}
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <LabelTinyBold textAlign="center">small (8px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        borderRadius="$medium"
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        borderWidth={borderWidth.thin}
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <LabelTinyBold textAlign="center">medium (12px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        borderRadius="$large"
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        borderWidth={borderWidth.thin}
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <LabelTinyBold textAlign="center">large (16px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        borderRadius="$big"
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        borderWidth={borderWidth.thin}
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <LabelTinyBold textAlign="center">big (24px)</LabelTinyBold>
      </View>
    </View>
  ),
};
