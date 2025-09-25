import { Xmark } from 'iconoir-react-native';
import React, { ReactNode } from 'react';
import { Sheet as TSheet, View, XStack } from 'tamagui';
import Button from '../Button';
import { TitleSmall } from '../Typography';
import { SheetHeaderProps, SheetProps } from './Sheet.model';

const SheetHeader: React.FC<SheetHeaderProps> = ({ icon, title }) => {
  return (
    <View>
      <XStack alignItems="center" gap="$micro">
        {icon && icon}
        {title && <TitleSmall>{title}</TitleSmall>}
      </XStack>
    </View>
  );
};

const SheetContents: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

/**
 * Sheet component for bottom sheet modal dialogs
 *
 * @example
 * ```tsx
 * <Sheet
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   header={{
 *     icon: <SomeIcon />,
 *     title: "Sheet Title"
 *   }}
 *   snapPoints={[80, 50]}
 *   snapPointsMode="percent"
 * >
 *   <Text>Sheet content goes here</Text>
 * </Sheet>
 * ```
 */
export const Sheet: React.FC<SheetProps> = ({
  open,
  onOpenChange,
  children,
  header,
  scrollView = false,
  snapPoints = [80, 50],
  snapPointsMode = 'percent',
  animation = 'medium',
  modal = true,
  dismissOnSnapToBottom = true,
  titleLeftAligned = false,
}) => {
  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <TSheet
      open={open}
      animation={animation}
      modal={modal}
      dismissOnSnapToBottom={dismissOnSnapToBottom}
      onOpenChange={onOpenChange}
      snapPoints={snapPoints}
      snapPointsMode={snapPointsMode}
    >
      <TSheet.Overlay
        animation="medium"
        backgroundColor="rgba(0,0,0,0.5)"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <TSheet.Handle my={2} />
      <TSheet.Frame
        flex={1}
        justifyContent="flex-start"
        alignItems="flex-start"
        backgroundColor="$neutralBg1"
      >
        {header && (
          <XStack
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            mt="$size.2"
            px="$size.1"
          >
            {/* Left spacer to balance the close button */}
            {!titleLeftAligned ? <View width={40} height={40} /> : null}

            {/* Centered header */}
            <View
              flex={1}
              alignItems={titleLeftAligned ? 'flex-start' : 'center'}
            >
              <SheetHeader icon={header.icon} title={header.title} />
            </View>

            {/* Close button on the right */}
            <View width={80}>
              <Button onPress={handleClose} type="chromeless">
                <Xmark width={20} height={20} color="$color12" />
              </Button>
            </View>
          </XStack>
        )}

        {scrollView ? (
          <TSheet.ScrollView>
            <View p="$size.2">
              <SheetContents>{children}</SheetContents>
            </View>
          </TSheet.ScrollView>
        ) : (
          <View p="$size.2">
            <SheetContents>{children}</SheetContents>
          </View>
        )}
      </TSheet.Frame>
    </TSheet>
  );
};

export default Sheet;
