import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'tamagui';
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
    <Text fontSize="$micro" fontWeight="bold" textAlign="center">
      hairline (0.5px)
    </Text>
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
    <Text fontSize="$micro" fontWeight="bold" textAlign="center">
      thin (1px)
    </Text>
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
    <Text fontSize="$micro" fontWeight="bold" textAlign="center">
      thick (2px)
    </Text>
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
    <Text fontSize="$micro" fontWeight="bold" textAlign="center">
      heavy (4px)
    </Text>
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
        <Text fontSize="$micro" fontWeight="bold" textAlign="center">
          hairline (0.5px)
        </Text>
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
        <Text fontSize="$micro" fontWeight="bold" textAlign="center">
          thin (1px)
        </Text>
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
        <Text fontSize="$micro" fontWeight="bold" textAlign="center">
          thick (2px)
        </Text>
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
        <Text fontSize="$micro" fontWeight="bold" textAlign="center">
          heavy (4px)
        </Text>
      </View>
    </View>
  ),
};
