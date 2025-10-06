import { TabOption } from './Tabs.model';
import { BadgeCheck, Star } from 'iconoir-react-native';

export type TabKeys = 'tab1' | 'tab2' | 'tab3';

const defaultMockTabOptions: TabOption<TabKeys>[] = [
  {
    key: 'tab1',
    label: 'Tab Item1',
    show: true,
  },
  { key: 'tab2', label: 'Tab Item2', show: true },
  {
    key: 'tab3',
    label: 'Tab Item3',
    show: true,
  },
];

const disabledMockTabOptions: TabOption<TabKeys>[] = [
  {
    key: 'tab1',
    label: 'Tab Item1',
    show: true,
  },
  { key: 'tab2', label: 'Tab Item2', show: false },
  {
    key: 'tab3',
    label: 'Tab Item3',
    show: true,
  },
];

const withIconMockTabOptions: TabOption<TabKeys>[] = [
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

const withoutLabelMockTabOptions: TabOption<TabKeys>[] = [
  {
    key: 'tab1',
    show: true,
    leftIcon: <Star />,
  },
  { key: 'tab2', show: true, leftIcon: <Star /> },
  {
    key: 'tab3',
    show: true,
    rightIcon: <BadgeCheck />,
  },
];

const tabStoriesMocks = {
  default: defaultMockTabOptions,
  disabled: disabledMockTabOptions,
  withIcon: withIconMockTabOptions,
  withoutLabel: withoutLabelMockTabOptions,
};

export default tabStoriesMocks;
