import type { Meta, StoryObj } from '@storybook/react';
import { View, YStack } from 'tamagui';
import { LabelTiny } from '../../../components/data-display/Typography';
import { space } from './space';

const meta: Meta = {
  title: 'Design System/Tokens/Space',
  parameters: {
    docs: {
      page: null, // Desabilita a página de docs automática
      source: {
        transform: () => {
          return `<YStack space="$small" padding="$medium">
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.none}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      none (0px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.quark}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      quark (4px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.nano}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      nano (8px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.micro}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      micro (12px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.tiny}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      tiny (16px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.smaller}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      smaller (24px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.small}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      small (32px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.medium}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      medium (40px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.large}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      large (48px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.larger}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      larger (56px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.big}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      big (64px)
    </LabelTiny>
  </View>
  <View flexDirection="row" alignItems="center" gap="$tiny">
    <View
      width={space.bigger}
      height={32}
      backgroundColor="$highlight"
      borderRadius="$quark"
    />
    <LabelTiny>
      bigger (72px)
    </LabelTiny>
  </View>
</YStack>`;
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
    <YStack space="$small" padding="$medium">
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.none}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
          minWidth={4}
        />
        <LabelTiny color="$color12">none (0px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.quark}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">quark (4px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.nano}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">nano (8px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.micro}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">micro (12px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.tiny}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">tiny (16px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.smaller}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">smaller (24px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.small}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">small (32px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.medium}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">medium (40px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.large}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">large (48px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.larger}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">larger (56px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.big}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">big (64px)</LabelTiny>
      </View>
      <View flexDirection="row" alignItems="center" gap="$tiny">
        <View
          width={space.bigger}
          height={32}
          backgroundColor="$highlight"
          borderRadius="$quark"
        />
        <LabelTiny color="$color12">bigger (72px)</LabelTiny>
      </View>
    </YStack>
  ),
};
