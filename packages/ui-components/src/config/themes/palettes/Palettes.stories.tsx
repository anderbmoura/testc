import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  TitleSmall,
  BodyStandard,
  BodySmall,
  LabelStandard,
} from '../../../components/Typography';
import { accentLightPalette, accentDarkPalette } from './accent';
import {
  neutralLightPalette,
  neutralDarkPalette,
  neutralLightDisabledPalette,
  neutralDarkDisabledPalette,
} from './neutral';
import {
  highlightLightPalette,
  highlightDarkPalette,
} from './extras/highlight';
import { infoLightPalette, infoDarkPalette } from './extras/info';
import { successLightPalette, successDarkPalette } from './extras/success';
import { warningLightPalette, warningDarkPalette } from './extras/warning';
import { dangerLightPalette, dangerDarkPalette } from './extras/danger';
import {
  decorativeLightPalette,
  decorativeDarkPalette,
} from './extras/decorative';
import { fixedPalette } from './fixed';

const ColorItem: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => (
  <View style={styles.colorItem}>
    <View style={[styles.colorBlock, { backgroundColor: color }]} />
    <View style={styles.colorInfo}>
      <LabelStandard style={styles.colorName}>{name}</LabelStandard>
      <LabelStandard style={styles.colorValue}>{color}</LabelStandard>
    </View>
  </View>
);

interface PaletteSectionProps {
  title: string;
  colors: Record<string, string>;
  sectionType: 'gradient' | 'semantic' | 'state' | 'disabled';
}

const PaletteSection: React.FC<PaletteSectionProps> = ({
  title,
  colors,
  sectionType,
}) => {
  const sortedColors = Object.entries(colors).sort(([nameA], [nameB]) => {
    const numberA = nameA.match(/\d+$/)?.[0];
    const numberB = nameB.match(/\d+$/)?.[0];

    if (numberA && numberB) {
      return parseInt(numberA, 10) - parseInt(numberB, 10);
    }

    return nameA.localeCompare(nameB);
  });

  const sectionKey = `${sectionType}Section` as keyof typeof styles;
  const sectionStyle = (styles as any)[sectionKey] as any;

  return (
    <View style={[styles.paletteSection, sectionStyle]}>
      <View style={styles.sectionHeader}>
        <BodyStandard style={styles.sectionSubtitle}>{title}</BodyStandard>
      </View>
      <View style={styles.swatchGrid}>
        {sortedColors.map(([name, color]) => (
          <ColorItem key={name} name={name} color={color} />
        ))}
      </View>
    </View>
  );
};

interface PaletteGroupProps {
  palette: Record<string, string>;
}

const DisabledColorsSection: React.FC<{ palette: Record<string, string> }> = ({
  palette,
}) => {
  const disabledColors: Record<string, string> = {};

  Object.entries(palette).forEach(([name, color]) => {
    if (name.includes('disabled') || name.includes('Disabled')) {
      disabledColors[name] = color;
    }
  });

  if (Object.keys(disabledColors).length === 0) {
    return null;
  }

  return (
    <View style={styles.disabledSpecialSection}>
      <View style={styles.sectionHeader}>
        <BodyStandard style={styles.sectionSubtitle}>
          Cores Desabilitadas
        </BodyStandard>
      </View>
      <BodySmall style={styles.disabledDescription}>
        Cores universais para elementos desabilitados, aplicáveis a todos os
        componentes independente do tema.
      </BodySmall>
      <View style={styles.swatchGrid}>
        {Object.entries(disabledColors).map(([name, color]) => (
          <ColorItem key={name} name={name} color={color} />
        ))}
      </View>
    </View>
  );
};

const FixedColorsSection: React.FC<{ palette: Record<string, string> }> = ({
  palette,
}) => {
  return (
    <View style={styles.fixedSpecialSection}>
      <View style={styles.sectionHeader}>
        <BodyStandard style={styles.sectionSubtitle}>Cores Fixas</BodyStandard>
      </View>
      <BodySmall style={styles.fixedDescription}>
        Cores que permanecem constantes em todos os temas. Ideais para elementos
        de identidade visual e branding que não devem se adaptar ao tema.
      </BodySmall>
      <View style={styles.swatchGrid}>
        {Object.entries(palette).map(([name, color]) => (
          <ColorItem key={name} name={name} color={color} />
        ))}
      </View>
    </View>
  );
};

const PaletteGroup: React.FC<PaletteGroupProps> = ({ palette }) => {
  const gradientColors: Record<string, string> = {};
  const semanticColors: Record<string, string> = {};
  const stateColors: Record<string, string> = {};

  Object.entries(palette).forEach(([name, color]) => {
    if (name.includes('Hover') || name.includes('Pressed')) {
      stateColors[name] = color;
    } else if (name.includes('disabled') || name.includes('Disabled')) {
      return;
    } else if (/\d+$/.test(name)) {
      gradientColors[name] = color;
    } else {
      semanticColors[name] = color;
    }
  });

  return (
    <View style={styles.paletteGroup}>
      {Object.keys(gradientColors).length > 0 && (
        <PaletteSection
          title="Cores Gradiente (1-12)"
          colors={gradientColors}
          sectionType="gradient"
        />
      )}

      {Object.keys(semanticColors).length > 0 && (
        <PaletteSection
          title="Cores Semânticas"
          colors={semanticColors}
          sectionType="semantic"
        />
      )}

      {Object.keys(stateColors).length > 0 && (
        <PaletteSection
          title="Cores de Estado"
          colors={stateColors}
          sectionType="state"
        />
      )}
    </View>
  );
};

interface PalettesProps {
  showPalette?:
    | 'fixed'
    | 'accent'
    | 'neutral'
    | 'highlight'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'decorative'
    | 'disabled';
}

const Palettes: React.FC<PalettesProps> = ({ showPalette = 'highlight' }) => {
  const lightPalettes = {
    fixed: fixedPalette,
    accent: accentLightPalette,
    neutral: neutralLightPalette,
    highlight: highlightLightPalette,
    info: infoLightPalette,
    success: successLightPalette,
    warning: warningLightPalette,
    error: dangerLightPalette,
    decorative: decorativeLightPalette,
    disabled: neutralLightDisabledPalette,
  };

  const darkPalettes = {
    fixed: fixedPalette,
    accent: accentDarkPalette,
    neutral: neutralDarkPalette,
    highlight: highlightDarkPalette,
    info: infoDarkPalette,
    success: successDarkPalette,
    warning: warningDarkPalette,
    error: dangerDarkPalette,
    decorative: decorativeDarkPalette,
    disabled: neutralDarkDisabledPalette,
  };

  const selectedPalette = showPalette;
  const lightPalette = lightPalettes[selectedPalette];
  const darkPalette = darkPalettes[selectedPalette];

  if (selectedPalette === 'disabled') {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.themeSection}>
          <TitleSmall style={styles.themeTitle}>
            Tema Claro - Cores Desabilitadas
          </TitleSmall>
          <DisabledColorsSection palette={lightPalettes.disabled} />
        </View>

        <View style={styles.themeSection}>
          <TitleSmall style={styles.themeTitle}>
            Tema Escuro - Cores Desabilitadas
          </TitleSmall>
          <DisabledColorsSection palette={darkPalettes.disabled} />
        </View>
      </ScrollView>
    );
  }

  if (selectedPalette === 'fixed') {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.themeSection}>
          <TitleSmall style={styles.themeTitle}>
            Cores Fixas - Invariantes entre Temas
          </TitleSmall>
          <FixedColorsSection palette={fixedPalette} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Light Theme */}
      <View style={styles.themeSection}>
        <TitleSmall style={styles.themeTitle}>Tema Claro</TitleSmall>
        <PaletteGroup palette={lightPalette} />
      </View>

      {/* Dark Theme */}
      <View style={styles.themeSection}>
        <TitleSmall style={styles.themeTitle}>Tema Escuro</TitleSmall>
        <PaletteGroup palette={darkPalette} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#1a202c',
  },
  paletteDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4a5568',
    marginBottom: 24,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  themeSection: {
    marginBottom: 40,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  themeTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'left',
    color: '#2d3748',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  paletteGroup: {
    marginBottom: 32,
  },
  paletteSection: {
    marginBottom: 28,
    padding: 16,
    backgroundColor: '#f7fafc',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  disabledSpecialSection: {
    marginBottom: 28,
    padding: 20,
    backgroundColor: '#fffaf0',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fed7d7',
    marginHorizontal: 8,
  },
  disabledDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 16,
    lineHeight: 20,
  },
  fixedSpecialSection: {
    marginBottom: 28,
    padding: 20,
    backgroundColor: '#f0f9ff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#bfdbfe',
    marginHorizontal: 8,
  },
  fixedDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 16,
    lineHeight: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3748',
  },
  swatchGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'flex-start',
  },
  colorItem: {
    alignItems: 'center',
    width: 130,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  colorBlock: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  colorInfo: {
    alignItems: 'center',
    width: '100%',
  },
  swatchContainer: {
    alignItems: 'center',
    width: 130,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  swatch: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  swatchInfo: {
    alignItems: 'center',
    width: '100%',
  },
  colorName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2d3748',
    textAlign: 'center',
    marginBottom: 4,
  },
  colorValue: {
    fontSize: 11,
    color: '#718096',
    textAlign: 'center',
    fontFamily: 'monospace',
    backgroundColor: '#f7fafc',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',
  },
});

const meta: Meta<PalettesProps> = {
  title: 'Design System/Temas/Paletas de Cores',
  component: Palettes,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null,
    },
  },
  argTypes: {
    showPalette: {
      control: 'select',
      options: [
        'fixed',
        'accent',
        'neutral',
        'highlight',
        'info',
        'success',
        'warning',
        'error',
        'decorative',
        'disabled',
      ],
      description:
        'Qual paleta exibir (mostra temas claro e escuro; disabled mostra paletas desabilitadas claro/escuro; fixed mostra as mesmas cores em ambos os temas)',
      defaultValue: 'highlight',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FixedColors: Story = {
  args: {
    showPalette: 'fixed',
  },
};

export const HighlightColors: Story = {
  args: {
    showPalette: 'highlight',
  },
};

export const AccentColors: Story = {
  args: {
    showPalette: 'accent',
  },
};

export const NeutralColors: Story = {
  args: {
    showPalette: 'neutral',
  },
};

export const InfoColors: Story = {
  args: {
    showPalette: 'info',
  },
};

export const SuccessColors: Story = {
  args: {
    showPalette: 'success',
  },
};

export const WarningColors: Story = {
  args: {
    showPalette: 'warning',
  },
};

export const ErrorColors: Story = {
  args: {
    showPalette: 'error',
  },
};

export const DecorativeColors: Story = {
  args: {
    showPalette: 'decorative',
  },
};

export const DisabledColors: Story = {
  args: {
    showPalette: 'disabled',
  },
};
