import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'tamagui';
import { LabelTinyBold } from '../../../components/data-display/Typography';

const meta: Meta = {
  title: 'Design System/Tokens/ZIndex',
  parameters: {
    docs: {
      page: null, // Desabilita a página de docs automática
      source: {
        transform: () => {
          return `<View height={400} width="100%" position="relative" backgroundColor="$neutralBg1" borderRadius="$nano" padding="$medium">
  <View
    position="absolute"
    top={40}
    left={40}
    width={120}
    height={80}
    backgroundColor="$neutralBg2"
    borderRadius="$nano"
    alignItems="flex-start"
    justifyContent="flex-start"
    padding="$micro"
    zIndex="$0"
  >
    <LabelTinyBold textAlign="center" color="$onNeutral2">
      0
    </LabelTinyBold>
  </View>
  <View
    position="absolute"
    top={80}
    left={80}
    width={120}
    height={80}
    backgroundColor="$highlightBg"
    borderRadius="$nano"
    alignItems="flex-start"
    justifyContent="flex-start"
    padding="$micro"
    zIndex="$100"
  >
    <LabelTinyBold textAlign="center" color="$onHighlightBg">
      100
    </LabelTinyBold>
  </View>
  <View
    position="absolute"
    top={120}
    left={120}
    width={120}
    height={80}
    backgroundColor="$accentBg"
    borderRadius="$nano"
    alignItems="flex-start"
    justifyContent="flex-start"
    padding="$micro"
    zIndex="$200"
  >
    <LabelTinyBold textAlign="center" color="$onAccentBg">
      200
    </LabelTinyBold>
  </View>
  <View
    position="absolute"
    top={160}
    left={160}
    width={120}
    height={80}
    backgroundColor="$infoBg"
    borderRadius="$nano"
    alignItems="flex-start"
    justifyContent="flex-start"
    padding="$micro"
    zIndex="$300"
  >
    <LabelTinyBold textAlign="center" color="$onInfoBg">
      300
    </LabelTinyBold>
  </View>
  <View
    position="absolute"
    top={200}
    left={200}
    width={120}
    height={80}
    backgroundColor="$warningBg"
    borderRadius="$nano"
    alignItems="flex-start"
    justifyContent="flex-start"
    padding="$micro"
    zIndex="$400"
  >
    <LabelTinyBold textAlign="center" color="$onWarningBg">
      400
    </LabelTinyBold>
  </View>
  <View
    position="absolute"
    top={240}
    left={240}
    width={120}
    height={80}
    backgroundColor="$dangerBg"
    borderRadius="$nano"
    alignItems="flex-start"
    justifyContent="flex-start"
    padding="$micro"
    zIndex="$500"
  >
    <LabelTinyBold textAlign="center" color="$onDangerBg">
      500
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
      height={400}
      width="100%"
      position="relative"
      backgroundColor="$neutralBg1"
      borderRadius="$nano"
      padding="$medium"
    >
      <View
        position="absolute"
        top={40}
        left={40}
        width={120}
        height={80}
        backgroundColor="$neutralBg2"
        borderRadius="$nano"
        alignItems="flex-start"
        justifyContent="flex-start"
        padding="$micro"
        zIndex="$0"
      >
        <LabelTinyBold textAlign="center" color="$onNeutral2">
          0
        </LabelTinyBold>
      </View>
      <View
        position="absolute"
        top={80}
        left={80}
        width={120}
        height={80}
        backgroundColor="$highlightBg"
        borderRadius="$nano"
        alignItems="flex-start"
        justifyContent="flex-start"
        padding="$micro"
        zIndex="$100"
      >
        <LabelTinyBold textAlign="center" color="$onHighlightBg">
          100
        </LabelTinyBold>
      </View>
      <View
        position="absolute"
        top={120}
        left={120}
        width={120}
        height={80}
        backgroundColor="$accentBg"
        borderRadius="$nano"
        alignItems="flex-start"
        justifyContent="flex-start"
        padding="$micro"
        zIndex="$200"
      >
        <LabelTinyBold textAlign="center" color="$onAccentBg">
          200
        </LabelTinyBold>
      </View>
      <View
        position="absolute"
        top={160}
        left={160}
        width={120}
        height={80}
        backgroundColor="$infoBg"
        borderRadius="$nano"
        alignItems="flex-start"
        justifyContent="flex-start"
        padding="$micro"
        zIndex="$300"
      >
        <LabelTinyBold textAlign="center" color="$onInfoBg">
          300
        </LabelTinyBold>
      </View>
      <View
        position="absolute"
        top={200}
        left={200}
        width={120}
        height={80}
        backgroundColor="$warningBg"
        borderRadius="$nano"
        alignItems="flex-start"
        justifyContent="flex-start"
        padding="$micro"
        zIndex="$400"
      >
        <LabelTinyBold textAlign="center" color="$onWarningBg">
          400
        </LabelTinyBold>
      </View>
      <View
        position="absolute"
        top={240}
        left={240}
        width={120}
        height={80}
        backgroundColor="$dangerBg"
        borderRadius="$nano"
        alignItems="flex-start"
        justifyContent="flex-start"
        padding="$micro"
        zIndex="$500"
      >
        <LabelTinyBold textAlign="center" color="$onDangerBg">
          500
        </LabelTinyBold>
      </View>
    </View>
  ),
};
