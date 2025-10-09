// Re-export Tamagui (base components will be overridden by custom ones below)
export * from 'tamagui';

// Custom Buttons (overrides Tamagui's Button)
export { default as Button } from './components/buttons/Button';
export type {
  ButtonProps,
  ButtonSize,
  ButtonType,
} from './components/buttons/Button';
export { IconButton } from './components/buttons/IconButton';
export type {
  IconButtonProps,
  IconButtonSize,
  IconButtonType,
  IconButtonColor,
} from './components/buttons/IconButton';
export { default as IconButtonText } from './components/buttons/IconButtonText';
export type {
  IconButtonTextProps,
  IconButtonTextVariant,
} from './components/buttons/IconButtonText';
export { default as CreditCardButton } from './components/buttons/CreditCardButton';
export type { CreditCardButtonProps } from './components/buttons/CreditCardButton';
export { TileButton } from './components/buttons/TileButton';
export type { TileButtonProps } from './components/buttons/TileButton/TileButton.model';
export {
  SegmentedButton,
  type SegmentedButtonItem,
  type SegmentedButtonProps,
} from './components/buttons/SegmentedButton';

// Custom Cards (overrides Tamagui's Card)
export { default as Card } from './components/cards/Card';
export type { CardProps, CardType } from './components/cards/Card';
export {
  CardAccount,
  CardAccountBody,
  CardAccountHeader,
  useInteractionState,
} from './components/cards/CardAccount';
export type {
  CardAccountBodyProps,
  CardAccountHeaderProps,
  CardAccountProps,
  CardAccountTheme,
  InteractionState,
} from './components/cards/CardAccount';
export { CardAlert } from './components/cards/CardAlert';
export type {
  CardAlertAction,
  CardAlertProps,
  CardAlertVariant,
} from './components/cards/CardAlert';
export { CardNotification } from './components/cards/CardNotification';
export type {
  CardNotificationProps,
  CardNotificationVariant,
} from './components/cards/CardNotification';
export { CardNotificationStack } from './components/cards/CardNotification/CardNotificationStack';
export {
  CardWidget,
  CardWidgetHeader,
  CardWidgetIcon,
  CardWidgetRemoveButton,
} from './components/cards/CardWidget';
export type {
  CardWidgetProps,
  CardWidgetVariant,
} from './components/cards/CardWidget';
export { CardWidgetFooter } from './components/cards/CardWidget/CardWidgetFooter';
export type {
  CardWidgetFooterProps,
  CardWidgetFooterVariant,
} from './components/cards/CardWidget/CardWidgetFooter';
export { CardWidgetFooterLoterias } from './components/cards/CardWidget/CardWidgetFooterLoterias';
export type { CardWidgetFooterLoteriasProps } from './components/cards/CardWidget/CardWidgetFooterLoterias';
export { CardCarouselVertical } from './components/cards/CardCarouselVertical';
export type {
  CardCarouselVerticalProps,
  BackgroundImageProps,
  BackgroundImageVariant,
  MaskImageProps,
} from './components/cards/CardCarouselVertical';
export { default as CardCarouselHorizontal } from './components/cards/CardCarouselHorizontal';
export type {
  CardCarouselHorizontalProps,
  CardCarouselHorizontalTheme,
} from './components/cards/CardCarouselHorizontal';

// Custom Forms (overrides Tamagui's Input, Checkbox, Switch, Slider)
export { Input } from './components/forms/Input';
export type {
  InputProps,
  InputCompoundComponent,
} from './components/forms/Input';
export { InputMoney, InputMoneyFeedback } from './components/forms/InputMoney';
export type {
  InputMoneyProps,
  InputMoneyFeedbackProps,
  InputMoneyInternalState,
  InputMoneyFeedbackVariant,
} from './components/forms/InputMoney';
export { default as Checkbox } from './components/forms/Checkbox';
export { Radio } from './components/forms/Radio';
export type {
  DscRadioGroupItemProps,
  RadioGroupProps,
} from './components/forms/Radio';
export { default as Switch } from './components/forms/Switch';
export type { SwitchProps } from './components/forms/Switch';
export { Slider, type SliderProps } from './components/forms/Slider';
export { InputPin } from './components/forms/InputPin';
export type {
  InputPinProps,
  InputPinVariant,
  InputPinFeedbackType,
} from './components/forms/InputPin';

// Custom Feedback (overrides Tamagui's AlertDialog, Spinner, Progress)
export {
  AlertDialog,
  AlertDialogDemo,
  type AlertDialogProps,
  type AlertDialogTriggerProps,
} from './components/feedback/AlertDialog';
export {
  SnackBar,
  SnackBarProvider,
  useSnackBar,
} from './components/feedback/SnackBar';
export type {
  SnackBarContextType,
  SnackBarProps,
  SnackBarColor,
} from './components/feedback/SnackBar';
export { default as Spinner } from './components/feedback/Spinner';
export type {
  SpinnerProps,
  SpinnerSize,
  SpinnerVariant,
} from './components/feedback/Spinner';
export { Progress } from './components/feedback/Progress';
export type {
  ProgressProps,
  ProgressSize,
} from './components/feedback/Progress';
export * from './components/feedback/FeedbackIllustration';
export {
  SkeletonLoading,
  type SkeletonLoadingProps,
} from './components/feedback';

// Custom Data Display (overrides Tamagui's Avatar)
export * from './components/data-display/Typography';
export { Avatar, AvatarStack } from './components/data-display/Avatar';
export type {
  AvatarProps,
  AvatarStackProps,
  AvatarStyle,
  AvatarSize,
  AvatarSpacing,
  MonogramChar,
} from './components/data-display/Avatar';
export { default as BadgeText } from './components/data-display/BadgeText';
export type {
  BadgeTextProps,
  BadgeTextSize,
  BadgeTextColor,
} from './components/data-display/BadgeText';
export { Chips } from './components/data-display/Chips';
export type {
  ChipsProps,
  ChipsLeftSlotProps,
  ChipsRightSlotProps,
  ChipsLeftSlotVariant,
  ChipsRightSlotVariant,
  ChipsVariant,
} from './components/data-display/Chips';
export { Icon } from './components/data-display/Icon';
export type { IconProps } from './components/data-display/Icon';
export * from './components/data-display/Icon/svg';
export {
  IconWrapper,
  type IconWrapperProps,
} from './components/data-display/IconWrapper';
export { ValueSection } from './components/data-display/ValueSection';
export type { ValueSectionProps } from './components/data-display/ValueSection';
export {
  ExtractItem,
  type ExtractItemProps,
} from './components/data-display/ExtractList';
export {
  ExtractList,
  type ExtractListProps,
} from './components/data-display/ExtractList';

// Custom Lists (overrides Tamagui's Accordion, ListItem)
export {
  Accordion,
  AccordionContainer,
  AccordionTrigger,
  AccordionContent,
  AccordionContentFooter,
} from './components/lists/Accordion';
export type {
  AccordionProps,
  accordionStyle,
} from './components/lists/Accordion';
export {
  ListItem,
  ListItemLeftSlot,
  ListItemRightSlot,
} from './components/lists/ListItem';
export type {
  ListItemProps,
  ListItemLeftSlotProps,
  ListItemRightSlotProps,
} from './components/lists/ListItem';
export { ListHeading } from './components/lists/ListHeading';
export type {
  ListHeadingProps,
  ListHeadingSize,
  ListHeadingConfiguration,
} from './components/lists/ListHeading';
export { ListFooter } from './components/lists/ListFooter';
export type { ListFooterProps } from './components/lists/ListFooter';
export { ListAccordion } from './components/lists/ListAccordion';
export type { ListAccordionProps } from './components/lists/ListAccordion';

// Custom Navigation (overrides Tamagui's Tabs)
export { default as TopAppBar } from './components/navigation/TopAppBar';
export type {
  TopAppBarProps,
  TopAppBarVariant,
} from './components/navigation/TopAppBar';
export { Toolbar, ToolbarItem } from './components/navigation/Toolbar';
export type {
  ToolbarProps,
  ToolbarItemProps,
  ToolbarItemInteractionState,
} from './components/navigation/Toolbar';
export { Tabs } from './components/navigation/Tabs';
export { TabItem } from './components/navigation/Tabs/components/TabItem';
export type {
  TabsProps,
  TabOption,
  TabItemProps,
} from './components/navigation/Tabs/Tabs.model';
/**
 * @deprecated VerticalActions e componentes relacionados estão obsoletos e serão removidos em uma versão futura.
 * Use os seguintes componentes como alternativa:
 * - VerticalActions → OptionsList
 * - VerticalActionsSection → ActionsList
 */
export {
  VerticalActions,
  VerticalActionsSection,
  type VerticalActionsProps,
  type VerticalActionsSectionProps,
} from './components/navigation/VerticalActions';
/**
 * @deprecated VerticalActionsItem está obsoleto e será removido em uma versão futura.
 * Use o componente `ListItem` como alternativa.
 */
export {
  VerticalActionsItem,
  type VerticalActionsItemProps,
} from './components/navigation/VerticalActions/components/VerticalActionsItem';

// Custom Overlays (overrides Tamagui's Sheet, Popover)
export {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetOverlay,
  SheetFrame,
  SheetHandle,
} from './components/overlays/Sheet';
export type {
  SheetProps,
  SheetHeaderProps,
  SheetContentProps,
  SheetOverlayProps,
  SheetFrameProps,
  SheetHandleProps,
} from './components/overlays/Sheet';
export { Popover } from './components/overlays/Popover';

// Custom Layout (overrides Tamagui's Separator)
export { default as Separator } from './components/layout/Separator';
export type {
  SeparatorProps,
  SeparatorDirection,
} from './components/layout/Separator';
export * from './components/layout/ScreenFooter';

// Config
export { DscProvider } from './config/DscProvider';
export { dscFonts, type DscFonts } from './config/fonts';
export { typography as typographyPresets } from './config/fonts/typography';
export { dscConfig, type DscConfig } from './config/tamagui.config';

// Templates
export { Stories } from './templates/screens/Stories';
export type { StoriesProps } from './templates/screens/Stories';

// Templates
export { ButtonRow } from './templates/buttons/ButtonRow';
export type { ButtonRowProps } from './templates/buttons/ButtonRow';
export { ActionsButtonRow } from './templates/buttons/ActionsButtonRow';
export type { ActionsButtonRowProps } from './templates/buttons/ActionsButtonRow';
export { WidgetRow } from './templates/cards/WidgetRow';
export type { WidgetRowProps } from './templates/cards/WidgetRow';
export { CarouselVertical } from './templates/cards/CarouselVertical';
export type { CarouselVerticalProps } from './templates/cards/CarouselVertical';
export { CarouselHorizontal } from './templates/cards/CarouselHorizontal';
export type { CarouselHorizontalProps } from './templates/cards/CarouselHorizontal';
export { ContentWidgets } from './templates/cards/ContentWidgets';
export type { ContentWidgetsProps } from './templates/cards/ContentWidgets';
export { List } from './templates/lists/List';
export type { ListProps } from './templates/lists/List';
export { OptionsList } from './templates/lists/OptionsList';
export type { OptionsListProps } from './templates/lists/OptionsList';
export { ActionsList } from './templates/lists/ActionsList';
export type { ActionsListProps } from './templates/lists/ActionsList';
export { StatementList } from './templates/lists/StatementList';
export type { StatementListProps } from './templates/lists/StatementList';
export { ContentCard } from './templates/lists/ContentCard';
export type { ContentCardProps } from './templates/lists/ContentCard';
export { StatementListAccordion } from './templates/lists/StatementListAccordion';
export type { StatementListAccordionProps } from './templates/lists/StatementListAccordion';
