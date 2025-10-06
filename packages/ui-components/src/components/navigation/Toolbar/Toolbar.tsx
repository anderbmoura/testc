import React, { memo } from 'react';
import { ToolbarContainer } from './Toolbar.styles';
import type { ToolbarProps } from './Toolbar.model';

/**
 * Componente DSC Toolbar
 *
 * Toolbar para organizar múltiplos ToolbarItems, ideal para barras de navegação e ações.
 *
 * @example
 * ```tsx
 * import { Toolbar, ToolbarItem } from '@superapp-caixa/dsc-library';
 * import { Home, Settings, User } from 'iconoir-react-native';
 *
 * // Toolbar básica
 * <Toolbar>
 *   <ToolbarItem
 *     icon={<Home />}
 *     label="Home"
 *     onPress={() => navigateToHome()}
 *   />
 *   <ToolbarItem
 *     icon={<Settings />}
 *     label="Settings"
 *     onPress={() => navigateToSettings()}
 *   />
 *   <ToolbarItem
 *     icon={<User />}
 *     label="Profile"
 *     onPress={() => navigateToProfile()}
 *   />
 * </Toolbar>
 *
 * // Toolbar com item desabilitado
 * <Toolbar>
 *   <ToolbarItem
 *     icon={<Home />}
 *     label="Home"
 *     onPress={() => navigateToHome()}
 *   />
 *   <ToolbarItem
 *     icon={<Settings />}
 *     label="Settings"
 *     disabled
 *   />
 * </Toolbar>
 * ```
 */
export const Toolbar: React.FC<ToolbarProps> = memo(({ children }) => {
  return <ToolbarContainer>{children}</ToolbarContainer>;
});

Toolbar.displayName = 'Toolbar';
