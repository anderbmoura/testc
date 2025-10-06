import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'tamagui';
import { LabelTinyBold } from '../../../components/data-display/Typography';
import { borderWidth } from './borderWidth';

const meta: Meta = {
  title: 'Design System/Tokens/BorderWidth',
  parameters: {
    docs: {
      page: null, // Desabilita a página de docs automática
      source: {
        transform: () => {
          return `<View flexDirection="row" gap="$small" flexWrap="wrap">
  <View
    padding="$small"
    borderRadius="$small"
    borderWidth={borderWidth.hairline}
    backgroundColor="$neutralBg2"
    borderColor="$outlined2"
    alignItems="center"
    justifyContent="center"
    minWidth={120}
    minHeight={80}
  >
    <LabelTinyBold textAlign="center">
      hairline (0.5px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    borderRadius="$small"
    borderWidth={borderWidth.thin}
    backgroundColor="$neutralBg2"
    borderColor="$outlined2"
    alignItems="center"
    justifyContent="center"
    minWidth={120}
    minHeight={80}
  >
    <LabelTinyBold textAlign="center">
      thin (1px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    borderRadius="$small"
    borderWidth={borderWidth.thick}
    backgroundColor="$neutralBg2"
    borderColor="$outlined2"
    alignItems="center"
    justifyContent="center"
    minWidth={120}
    minHeight={80}
  >
    <LabelTinyBold textAlign="center">
      thick (2px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    borderRadius="$small"
    borderWidth={borderWidth.heavy}
    backgroundColor="$neutralBg2"
    borderColor="$outlined2"
    alignItems="center"
    justifyContent="center"
    minWidth={120}
    minHeight={80}
  >
    <LabelTinyBold textAlign="center">
      heavy (4px)
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
        borderRadius="$small"
        borderWidth={borderWidth.hairline}
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <LabelTinyBold textAlign="center">hairline (0.5px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        borderRadius="$small"
        borderWidth={borderWidth.thin}
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <LabelTinyBold textAlign="center">thin (1px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        borderRadius="$small"
        borderWidth={borderWidth.thick}
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <LabelTinyBold textAlign="center">thick (2px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        borderRadius="$small"
        borderWidth={borderWidth.heavy}
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <LabelTinyBold textAlign="center">heavy (4px)</LabelTinyBold>
      </View>
    </View>
  ),
};
