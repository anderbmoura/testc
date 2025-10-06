export { default as TopAppBar } from './TopAppBar';
export type { TopAppBarProps, TopAppBarVariant } from './TopAppBar';
export { Toolbar, ToolbarItem } from './Toolbar';
export type {
  ToolbarProps,
  ToolbarItemProps,
  ToolbarItemInteractionState,
} from './Toolbar';
export * from './Tabs';
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
} from './VerticalActions';

/**
 * @deprecated VerticalActionsItem está obsoleto e será removido em uma versão futura.
 * Use o componente `ListItem` como alternativa.
 */
export {
  VerticalActionsItem,
  type VerticalActionsItemProps,
} from './VerticalActions/components/VerticalActionsItem';
