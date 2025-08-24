import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { accentLightPalette, accentDarkPalette } from './accent';
import { neutralLightPalette, neutralDarkPalette } from './neutral';
import {
  highlightLightPalette,
  highlightDarkPalette,
} from './extras/highlight';
import { infoLightPalette, infoDarkPalette } from './extras/info';
import { successLightPalette, successDarkPalette } from './extras/success';
import { warningLightPalette, warningDarkPalette } from './extras/warning';
import { dangerLightPalette, dangerDarkPalette } from './extras/danger';

interface ColorSwatchProps {
  color: string;
  name: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, name }) => (
  <View style={styles.swatchContainer}>
    <View style={[styles.swatch, { backgroundColor: color }]} />
    <Text style={styles.colorName}>{name}</Text>
    <Text style={styles.colorValue}>{color}</Text>
  </View>
);

interface PaletteSectionProps {
  title: string;
  colors: Record<string, string>;
}

const PaletteSection: React.FC<PaletteSectionProps> = ({ title, colors }) => {
  const sortedColors = Object.entries(colors).sort(([nameA], [nameB]) => {
    const numberA = nameA.match(/\d+$/)?.[0];
    const numberB = nameB.match(/\d+$/)?.[0];

    if (numberA && numberB) {
      return parseInt(numberA, 10) - parseInt(numberB, 10);
    }

    return nameA.localeCompare(nameB);
  });

  return (
    <View style={styles.paletteSection}>
      <Text style={styles.sectionSubtitle}>{title}</Text>
      <View style={styles.swatchGrid}>
        {sortedColors.map(([name, color]) => (
          <ColorSwatch key={name} name={name} color={color} />
        ))}
      </View>
    </View>
  );
};

interface PaletteGroupProps {
  title: string;
  palette: Record<string, string>;
}

const PaletteGroup: React.FC<PaletteGroupProps> = ({ title, palette }) => {
  const gradientColors: Record<string, string> = {};
  const semanticColors: Record<string, string> = {};

  Object.entries(palette).forEach(([name, color]) => {
    if (/\d+$/.test(name)) {
      gradientColors[name] = color;
    } else {
      semanticColors[name] = color;
    }
  });

  return (
    <View style={styles.paletteGroup}>
      <Text style={styles.paletteTitle}>{title}</Text>

      {Object.keys(gradientColors).length > 0 && (
        <PaletteSection
          title="Gradient Colors (1-12)"
          colors={gradientColors}
        />
      )}

      {Object.keys(semanticColors).length > 0 && (
        <PaletteSection title="Semantic Colors" colors={semanticColors} />
      )}
    </View>
  );
};

interface PalettesProps {
  showPalette?:
    | 'accent'
    | 'neutral'
    | 'highlight'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
}

const Palettes: React.FC<PalettesProps> = ({ showPalette = 'highlight' }) => {
  const lightPalettes = {
    accent: accentLightPalette,
    neutral: neutralLightPalette,
    highlight: highlightLightPalette,
    info: infoLightPalette,
    success: successLightPalette,
    warning: warningLightPalette,
    error: dangerLightPalette,
  };

  const darkPalettes = {
    accent: accentDarkPalette,
    neutral: neutralDarkPalette,
    highlight: highlightDarkPalette,
    info: infoDarkPalette,
    success: successDarkPalette,
    warning: warningDarkPalette,
    error: dangerDarkPalette,
  };

  const selectedPalette = showPalette;
  const lightPalette = lightPalettes[selectedPalette];
  const darkPalette = darkPalettes[selectedPalette];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>
        {selectedPalette.charAt(0).toUpperCase() + selectedPalette.slice(1)}{' '}
        Color Palette
      </Text>

      {/* Light Theme */}
      <View style={styles.themeSection}>
        <Text style={styles.themeTitle}>Light Theme</Text>
        <PaletteGroup
          title={
            selectedPalette.charAt(0).toUpperCase() + selectedPalette.slice(1)
          }
          palette={lightPalette}
        />
      </View>

      {/* Dark Theme */}
      <View style={styles.themeSection}>
        <Text style={styles.themeTitle}>Dark Theme</Text>
        <PaletteGroup
          title={
            selectedPalette.charAt(0).toUpperCase() + selectedPalette.slice(1)
          }
          palette={darkPalette}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  themeSection: {
    marginBottom: 40,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    marginHorizontal: 8,
  },
  themeTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#495057',
  },
  paletteGroup: {
    marginBottom: 32,
  },
  paletteTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333333',
  },
  paletteSection: {
    marginBottom: 20,
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
    color: '#666666',
    paddingLeft: 4,
  },
  swatchGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  swatchContainer: {
    alignItems: 'center',
    minWidth: 120,
    marginBottom: 16,
  },
  swatch: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  colorName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },
  colorValue: {
    fontSize: 10,
    color: '#666666',
    textAlign: 'center',
    marginTop: 2,
  },
});

const meta: Meta<PalettesProps> = {
  title: 'Design System/Temas/Paletas de Cores',
  component: Palettes,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null, // Desabilita a página de docs padrão para usar o MDX
    },
  },
  argTypes: {
    showPalette: {
      control: 'select',
      options: [
        'accent',
        'neutral',
        'highlight',
        'info',
        'success',
        'warning',
        'error',
      ],
      description:
        'Which palette to display (shows both light and dark themes)',
      defaultValue: 'highlight',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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
