import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';
import tabStoriesMocks from './stories-mocks';

const meta: Meta<typeof Tabs> = {
  title: 'Componentes/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente de Tabs

## Como usar

\`\`\`tsx
import { Tabs, TabOption } from '@superapp-caixa/dsc-library';
import { Star, BadgeCheck } from 'iconoir-react-native';
import { useState } from 'react';
 
type TabKeys = 'tab1' | 'tab2' | 'tab3';

const tabOptions: TabOption<TabKeys>[] = [
    {
        key: 'tab1',
        label: 'Tab Item1',
        show: true,
    },
    { key: 'tab2', label: 'Tab Item2', show: true, leftIcon: <Star /> },
    {
        key: 'tab3',
        label: 'Tab Item3',
        show: true,
        rightIcon: <BadgeCheck />,
    },
];

export function MyComponent() {
    const [selectedTab, setSelectedTab] = useState<TabKeys>();

    const onTabPressHandler = (tab: TabOption<TabKeys>) => {
        setSelectedTab(tab.key);
    };

    return (
        <Tabs
            variant="standard"
            tabItems={tabOptions}
            selectedTabKey={selectedTab}
            onTabPress={onTabPressHandler}
        />
    );
}
\`\`\`
    `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['small', 'standard', 'large'],
      description: 'Define o tamanho das tabs',
    },
    tabItems: {
      control: 'object',
      description:
        'Array de objetos TabOption contendo as propriedades de cada tab',
    },
    selectedTabKey: {
      control: 'select',
      options: ['tab1', 'tab2', 'tab3'],
      description: 'Chave da tab atualmente selecionada',
    },
    onTabPress: {
      description:
        'Função chamada ao pressionar uma tab, recebe as propriedades da tab pressionada',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabItems: tabStoriesMocks.default,
    selectedTabKey: 'tab1',
  },
};

export const Disabled: Story = {
  args: {
    tabItems: tabStoriesMocks.disabled,
    selectedTabKey: 'tab1',
  },
};

export const WithIcon: Story = {
  args: {
    tabItems: tabStoriesMocks.withIcon,
    selectedTabKey: 'tab1',
  },
};

export const WithoutLabel: Story = {
  args: {
    tabItems: tabStoriesMocks.withoutLabel,
    selectedTabKey: 'tab1',
  },
};
