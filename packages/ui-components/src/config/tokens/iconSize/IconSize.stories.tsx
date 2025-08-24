import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'tamagui';
import { LabelTinyBold } from '../../../components/Typography';
import { Home } from 'iconoir-react-native';
import { iconSize } from './iconSize';

const meta: Meta = {
  title: 'Design System/Tokens/IconSize',
  parameters: {
    docs: {
      page: null, // Desabilita a página de docs automática
      source: {
        transform: () => {
          return `<View flexDirection="row" gap="$small" flexWrap="wrap" alignItems="flex-end">
  <View
    padding="$small"
    backgroundColor="$neutralBg2"
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={80}
    minHeight={80}
    gap="$tiny"
  >
    <Home
      width={iconSize.tiny}
      height={iconSize.tiny}
      color="$accentOnBg"
    />
    <LabelTinyBold textAlign="center">
      tiny (16px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$neutralBg2"
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={80}
    minHeight={80}
    gap="$tiny"
  >
    <Home
      width={iconSize.small}
      height={iconSize.small}
      color="$accentOnBg"
    />
    <LabelTinyBold textAlign="center">
      small (20px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$neutralBg2"
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={80}
    minHeight={80}
    gap="$tiny"
  >
    <Home
      width={iconSize.medium}
      height={iconSize.medium}
      color="$accentOnBg"
    />
    <LabelTinyBold textAlign="center">
      medium (24px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$neutralBg2"
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={80}
    minHeight={80}
    gap="$tiny"
  >
    <Home
      width={iconSize.large}
      height={iconSize.large}
      color="$accentOnBg"
    />
    <LabelTinyBold textAlign="center">
      large (32px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$neutralBg2"
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={80}
    minHeight={80}
    gap="$tiny"
  >
    <Home
      width={iconSize.big}
      height={iconSize.big}
      color="$accentOnBg"
    />
    <LabelTinyBold textAlign="center">
      big (40px)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$neutralBg2"
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={80}
    minHeight={80}
    gap="$tiny"
  >
    <Home
      width={iconSize.huge}
      height={iconSize.huge}
      color="$accentOnBg"
    />
    <LabelTinyBold textAlign="center">
      huge (48px)
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
    <View
      flexDirection="row"
      gap="$small"
      flexWrap="wrap"
      alignItems="flex-end"
    >
      <View
        padding="$small"
        backgroundColor="$neutralBg2"
        borderRadius="$nano"
        alignItems="center"
        justifyContent="center"
        minWidth={80}
        minHeight={80}
        gap="$tiny"
      >
        <Home
          width={iconSize.tiny}
          height={iconSize.tiny}
          color="$accentOnBg"
        />
        <LabelTinyBold textAlign="center">tiny (16px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        backgroundColor="$neutralBg2"
        borderRadius="$nano"
        alignItems="center"
        justifyContent="center"
        minWidth={80}
        minHeight={80}
        gap="$tiny"
      >
        <Home
          width={iconSize.small}
          height={iconSize.small}
          color="$accentOnBg"
        />
        <LabelTinyBold textAlign="center">small (20px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        backgroundColor="$neutralBg2"
        borderRadius="$nano"
        alignItems="center"
        justifyContent="center"
        minWidth={80}
        minHeight={80}
        gap="$tiny"
      >
        <Home
          width={iconSize.medium}
          height={iconSize.medium}
          color="$accentOnBg"
        />
        <LabelTinyBold textAlign="center">medium (24px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        backgroundColor="$neutralBg2"
        borderRadius="$nano"
        alignItems="center"
        justifyContent="center"
        minWidth={80}
        minHeight={80}
        gap="$tiny"
      >
        <Home
          width={iconSize.large}
          height={iconSize.large}
          color="$accentOnBg"
        />
        <LabelTinyBold textAlign="center">large (32px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        backgroundColor="$neutralBg2"
        borderRadius="$nano"
        alignItems="center"
        justifyContent="center"
        minWidth={80}
        minHeight={80}
        gap="$tiny"
      >
        <Home width={iconSize.big} height={iconSize.big} color="$accentOnBg" />
        <LabelTinyBold textAlign="center">big (40px)</LabelTinyBold>
      </View>
      <View
        padding="$small"
        backgroundColor="$neutralBg2"
        borderRadius="$nano"
        alignItems="center"
        justifyContent="center"
        minWidth={80}
        minHeight={80}
        gap="$tiny"
      >
        <Home
          width={iconSize.huge}
          height={iconSize.huge}
          color="$accentOnBg"
        />
        <LabelTinyBold textAlign="center">huge (48px)</LabelTinyBold>
      </View>
    </View>
  ),
};
