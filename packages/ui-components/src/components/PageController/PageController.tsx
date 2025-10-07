import { YStack, styled, XStack } from 'tamagui';

const Chip = styled(YStack, {
  borderRadius: '$pill',
  height: 8,

  left: 32,
  animation: 'bouncy',

  hoverStyle: {
    backgroundColor: '$highlight8',
    scale: 1.5,
  },
});

export function PageChip({
  active,
  onPress,
}: {
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Chip
      width={active ? 24 : 12}
      top={active ? 32 : 32}
      onPress={onPress}
      backgroundColor={active ? '$highlight' : '$disabledOutlined1'}
      enterStyle={{
        opacity: 0,
        scale: 0.8,
      }}
      exitStyle={{
        opacity: 0,
        scale: 0.8,
      }}
      opacity={1}
      scale={1}
    />
  );
}

export type PageControllerProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function PageController({
  currentPage,
  totalPages,
  onPageChange,
}: PageControllerProps) {
  return (
    <XStack gap="$quark" justifyContent="center" alignItems="center">
      {Array.from({ length: totalPages }).map((_, index) => (
        <PageChip
          key={index}
          active={index === currentPage}
          onPress={() => onPageChange(index)}
        />
      ))}
    </XStack>
  );
}
