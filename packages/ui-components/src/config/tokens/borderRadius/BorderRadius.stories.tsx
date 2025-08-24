import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'tamagui';
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
    <Text fontSize="$micro" fontWeight="bold" textAlign="center">
      quark (2px)
    </Text>
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
    <Text fontSize="$micro" fontWeight="bold" textAlign="center">
      nano (4px)
    </Text>
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
    <Text fontSize="$micro" fontWeight="bold" textAlign="center">
      small (8px)
    </Text>
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
    <Text fontSize="$micro" fontWeight="bold" textAlign="center">
      medium (12px)
    </Text>
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
    <Text fontSize="$micro" fontWeight="bold" textAlign="center">
      large (16px)
    </Text>
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
    <Text fontSize="$micro" fontWeight="bold" textAlign="center">
      big (24px)
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
        borderRadius="$quark"
        backgroundColor="$neutralBg2"
        borderColor="$outlined2"
        borderWidth={borderWidth.thin}
        alignItems="center"
        justifyContent="center"
        minWidth={120}
        minHeight={80}
      >
        <Text fontSize="$micro" fontWeight="bold" textAlign="center">
          quark (2px)
        </Text>
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
        <Text fontSize="$micro" fontWeight="bold" textAlign="center">
          nano (4px)
        </Text>
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
        <Text fontSize="$micro" fontWeight="bold" textAlign="center">
          small (8px)
        </Text>
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
        <Text fontSize="$micro" fontWeight="bold" textAlign="center">
          medium (12px)
        </Text>
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
        <Text fontSize="$micro" fontWeight="bold" textAlign="center">
          large (16px)
        </Text>
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
        <Text fontSize="$micro" fontWeight="bold" textAlign="center">
          big (24px)
        </Text>
      </View>
    </View>
  ),
};
