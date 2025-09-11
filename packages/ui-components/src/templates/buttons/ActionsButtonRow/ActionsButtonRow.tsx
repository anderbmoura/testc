import React from 'react';
import { ActionsButtonRowContainer } from './ActionsButtonRow.styles';
import { ActionsButtonRowHeader } from './components/ActionsButtonRowHeader';
import { ActionsButtonRowContent } from './components/ActionsButtonRowContent';
import { ActionsButtonRowToggle } from './components/ActionsButtonRowToggle';
import {
  useActionsButtonRowState,
  useActionsButtonRowInteractions,
} from './hooks';
import type { ActionsButtonRowProps } from './ActionsButtonRow.model';

/**
 * Template DSC ActionsButtonRow
 *
 * Container que organiza ações com título, botão de ação e lista de ButtonRow
 * organizados verticalmente. Permite limitar a quantidade inicial de linhas exibidas
 * com opção de expandir/contrair. Título e botão de ação são opcionais.
 *
 * @example
 * ```tsx
 * // Exemplo completo com título e botão de ação
 * <ActionsButtonRow
 *   title="Ações Rápidas"
 *   buttonActionName="Ver tudo"
 *   initialRowNumber={3}
 *   onButtonAction={() => console.log('Ação executada')}
 * >
 *   <ButtonRow>
 *     <IconButtonText icon={<HomeIcon />}>Início</IconButtonText>
 *     <IconButtonText icon={<ProfileIcon />}>Perfil</IconButtonText>
 *     <IconButtonText icon={<SettingsIcon />}>Configurações</IconButtonText>
 *   </ButtonRow>
 * </ActionsButtonRow>
 *
 * // Exemplo apenas com título
 * <ActionsButtonRow title="Menu Principal">
 *   <ButtonRow>
 *     <IconButtonText icon={<HomeIcon />}>Início</IconButtonText>
 *   </ButtonRow>
 * </ActionsButtonRow>
 *
 * // Exemplo sem header (somente ButtonRows)
 * <ActionsButtonRow>
 *   <ButtonRow>
 *     <IconButtonText icon={<HomeIcon />}>Início</IconButtonText>
 *   </ButtonRow>
 * </ActionsButtonRow>
 * ```
 */
export const ActionsButtonRow: React.FC<ActionsButtonRowProps> = ({
  title,
  buttonActionName,
  onButtonAction,
  initialRowNumber,
  children,
  ...props
}) => {
  const {
    showAll,
    contentHeight,
    shouldShowToggleButton,
    initialRows,
    additionalRows,
    handleToggleRows,
    handleContentLayout,
  } = useActionsButtonRowState({
    initialRowNumber,
    children,
  });

  const { handleButtonAction } = useActionsButtonRowInteractions({
    onButtonAction,
    onToggle: handleToggleRows,
  });

  const headerProps = {
    title,
    buttonActionName,
    onButtonAction: handleButtonAction,
  };

  const contentProps = {
    initialRows,
    additionalRows,
    showAll,
    contentHeight,
    shouldShowToggleButton,
    onContentLayout: handleContentLayout,
  };

  const toggleProps = {
    showAll,
    onToggle: handleToggleRows,
  };

  return (
    <ActionsButtonRowContainer {...props}>
      {(title || buttonActionName) && (
        <ActionsButtonRowHeader {...headerProps} />
      )}

      <ActionsButtonRowContent {...contentProps} />

      {shouldShowToggleButton && <ActionsButtonRowToggle {...toggleProps} />}
    </ActionsButtonRowContainer>
  );
};
