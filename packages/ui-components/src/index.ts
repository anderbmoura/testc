export * from 'tamagui';
export {
  Accordion,
  AccordionContainer,
  AccordionTrigger,
  AccordionContent,
  AccordionContentFooter,
} from './components/Accordion';
export type { AccordionProps, accordionStyle } from './components/Accordion';
export {
  AlertDialog,
  AlertDialogDemo,
  type AlertDialogProps,
  type AlertDialogTriggerProps,
} from './components/AlertDialog';
export { default as BadgeText } from './components/BadgeText';
export type { BadgeTextProps } from './components/BadgeText';
export { default as Button } from './components/Button';
export type { ButtonProps, ButtonSize, ButtonType } from './components/Button';
export { default as Card } from './components/Card';
export type { CardProps, CardType } from './components/Card';
export {
  CardAccount,
  CardAccountBody,
  CardAccountHeader,
} from './components/CardAccount';
export type {
  CardAccountBodyProps,
  CardAccountHeaderProps,
  CardAccountProps,
  CardAccountTheme,
} from './components/CardAccount';
export { CardAlert } from './components/CardAlert';
export type {
  CardAlertAction,
  CardAlertProps,
  CardAlertVariant,
} from './components/CardAlert';
export { CardNotification } from './components/CardNotification';
export type {
  CardNotificationProps,
  CardNotificationVariant,
} from './components/CardNotification';
export { CardNotificationStack } from './components/CardNotificationStack';
export { CardWidgetFooter } from './components/CardWidgetFooter';
export type {
  CardWidgetFooterProps,
  CardWidgetFooterVariant,
} from './components/CardWidgetFooter';
export { CardWidgetFooterLoterias } from './components/CardWidgetFooterLoterias';
export type { CardWidgetFooterLoteriasProps } from './components/CardWidgetFooterLoterias';
export {
  CardWidget,
  CardWidgetHeader,
  CardWidgetIcon,
} from './components/CardWidget';
export type {
  CardWidgetProps,
  CardWidgetVariant,
} from './components/CardWidget';
export { Chips } from './components/Chips';
export type {
  ChipsProps,
  ChipsLeftSlotProps,
  ChipsRightSlotProps,
  ChipsLeftSlotVariant,
  ChipsRightSlotVariant,
  ChipsVariant,
} from './components/Chips';
export { ExtractItem, type ExtractItemProps } from './components/ExtractList';
export { ExtractList, type ExtractListProps } from './components/ExtractList';
export { CardCarouselVertical } from './components/CardCarouselVertical';
export type { CardCarouselVerticalProps } from './components/CardCarouselVertical';
export { default as CardCarouselHorizontal } from './components/CardCarouselHorizontal';
export type {
  CardCarouselHorizontalProps,
  CardCarouselHorizontalTheme,
} from './components/CardCarouselHorizontal';
export { IconButton } from './components/IconButton';
export type { IconButtonProps, IconButtonSize } from './components/IconButton';
export { ListItem } from './components/ListItem';
export type { ListItemProps } from './components/ListItem';
export { ListHeading } from './components/ListHeading';
export type {
  ListHeadingProps,
  ListHeadingSize,
  ListHeadingConfiguration,
} from './components/ListHeading';
export { default as IconButtonText } from './components/IconButtonText';
export type { IconButtonTextProps } from './components/IconButtonText';
export { InputMoney, InputMoneyFeedback } from './components/InputMoney';
export type {
  InputMoneyProps,
  InputMoneyFeedbackProps,
  InputMoneyInternalState,
  InputMoneyFeedbackVariant,
} from './components/InputMoney';
export { Input } from './components/Input';
export type { InputProps, InputCompoundComponent } from './components/Input';
export { Popover } from './components/Popover';
export { Progress } from './components/Progress';
export type { ProgressProps, ProgressSize } from './components/Progress';
export { SnackBar, SnackBarProvider, useSnackBar } from './components/SnackBar';
export type { SnackBarContextType, SnackBarProps } from './components/SnackBar';
export { default as Spinner } from './components/Spinner';
export type {
  SpinnerProps,
  SpinnerSize,
  SpinnerVariant,
} from './components/Spinner';
export { default as Switch } from './components/Switch';
export type { SwitchProps } from './components/Switch';
export { default as TopAppBar } from './components/TopAppBar';
export type { TopAppBarProps, TopAppBarVariant } from './components/TopAppBar';
export { ValueSection } from './components/ValueSection';
export type { ValueSectionProps } from './components/ValueSection';
export { default as Separator } from './components/Separator';
export type {
  SeparatorProps,
  SeparatorDirection,
} from './components/Separator';
export {
  VerticalActions,
  VerticalActionsSection,
  type VerticalActionsProps,
  type VerticalActionsSectionProps,
} from './components/VerticalActions';
export {
  VerticalActionsItem,
  type VerticalActionsItemProps,
} from './components/VerticalActions/components/VerticalActionsItem';
export * from './components/Typography';
export { DscProvider } from './config/DscProvider';
export { dscFonts, type DscFonts } from './config/fonts';
export { typography as typographyPresets } from './config/fonts/typography';
export { dscConfig, type DscConfig } from './config/tamagui.config';
export { default as CreditCardButton } from './components/CreditCardButton';
export type { CreditCardButtonProps } from './components/CreditCardButton';
export { Avatar, AvatarStack } from './components/Avatar';
export type { AvatarProps, AvatarStackProps } from './components/Avatar';
export {
  SegmentedButton,
  type SegmentedButtonItem,
  type SegmentedButtonProps,
} from './components/SegmentedButton';
export { IconWrapper, type IconWrapperProps } from './components/IconWrapper';

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
export { List } from './templates/lists/List';
export type { ListProps } from './templates/lists/List';
export { OptionsList } from './templates/lists/OptionsList';
export type { OptionsListProps } from './templates/lists/OptionsList';
export { ActionsList } from './templates/lists/ActionsList';
export type { ActionsListProps } from './templates/lists/ActionsList';
export { ContentCard } from './templates/lists/ContentCard';
export type { ContentCardProps } from './templates/lists/ContentCard';
