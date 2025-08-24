import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'tamagui';
import { LabelTinyBold } from '../../../components/Typography';
import { opacity } from './opacity';

const meta: Meta = {
  title: 'Design System/Tokens/Opacity',
  parameters: {
    docs: {
      page: null, // Desabilita a página de docs automática
      source: {
        transform: () => {
          return `<View flexDirection="row" gap="$small" flexWrap="wrap">
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[4]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      4 (4%)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[8]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      8 (8%)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[12]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      12 (12%)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[16]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      16 (16%)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[24]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      24 (24%)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[32]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      32 (32%)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[40]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      40 (40%)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[48]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      48 (48%)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[56]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      56 (56%)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[64]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      64 (64%)
    </LabelTinyBold>
  </View>
  <View
    padding="$small"
    backgroundColor="$highlight"
    opacity={opacity[100]}
    borderRadius="$nano"
    alignItems="center"
    justifyContent="center"
    minWidth={100}
    minHeight={80}
    position="relative"
  >
    <LabelTinyBold textAlign="center" color="$onHighlight">
      100 (100%)
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
    <View backgroundColor="$neutralBg1" padding="$medium" borderRadius="$small">
      <View flexDirection="row" gap="$small" flexWrap="wrap">
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[4]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            4 (4%)
          </LabelTinyBold>
        </View>
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[8]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            8 (8%)
          </LabelTinyBold>
        </View>
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[12]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            12 (12%)
          </LabelTinyBold>
        </View>
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[16]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            16 (16%)
          </LabelTinyBold>
        </View>
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[24]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            24 (24%)
          </LabelTinyBold>
        </View>
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[32]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            32 (32%)
          </LabelTinyBold>
        </View>
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[40]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            40 (40%)
          </LabelTinyBold>
        </View>
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[48]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            48 (48%)
          </LabelTinyBold>
        </View>
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[56]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            56 (56%)
          </LabelTinyBold>
        </View>
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[64]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            64 (64%)
          </LabelTinyBold>
        </View>
        <View
          padding="$small"
          backgroundColor="$highlight"
          opacity={opacity[100]}
          borderRadius="$nano"
          alignItems="center"
          justifyContent="center"
          minWidth={100}
          minHeight={80}
          position="relative"
        >
          <LabelTinyBold textAlign="center" color="$onHighlight">
            100 (100%)
          </LabelTinyBold>
        </View>
      </View>
    </View>
  ),
};
