import { Home, SeaWaves } from 'iconoir-react-native';
import { YStack } from 'tamagui';
import { List } from './FlatItemList';
import { Item, ListItem } from './ListItem';

export function FlatListItemExample() {
  const data: Item[] = [
    {
      id: '1',
      title: 'Item 1',
      content: 'Content for item 1',
      iconRight: <Home />,
    },
    {
      id: '2',
      title: 'Item 2',
      content: 'Content for item 2',
      iconLeft: <SeaWaves height={36} width={36} />,
      subContent: 'This is a sub-content for item 2',
    },
    {
      id: '3',
      title: 'Item 3',
      content: 'Content for item 3',
      iconRight: <Home />,
    },
    {
      id: '4',
      title: 'Item 4',
      content: 'Content for item 4',
      nav: true,
      onSelect: item => {
        console.log(item);
      },
    },
    {
      id: '5',
      title: 'Item 5',
      content: 'Content for item 5',
      switchButton: true,
      iconLeft: <SeaWaves height={36} width={36} />,
      onSelect: (item, checkState) => {
        console.log(item, checkState);
      },
      disabled: false,
    },
    {
      id: '6',
      title: 'Item 6',
      content: 'Content for item 6',
      switchButton: true,
      iconLeft: <SeaWaves height={36} width={36} />,
      onSelect: (item, checkState) => {
        console.log(item, checkState);
      },
      disabled: true,
    },
  ];

  const renderItem = (item: Item) => {
    console.log('item', item);
    const { id, ...props } = item;
    return (
      <YStack>
        <ListItem id={id} {...props} />
      </YStack>
    );
  };

  return (
    <List data={data} renderItem={({ item }) => renderItem(item as Item)} />
  );
}
