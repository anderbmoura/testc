import { FlatList, FlatListProps as FLProps } from 'react-native';
import { Separator, styled } from 'tamagui';
import { Item, ItemProps } from './ListItem';

const StyledList = styled(FlatList<ItemProps>, {});
export const List = StyledList.styleable((props, ref) => {
  return <StyledList ref={ref} {...props} ItemSeparatorComponent={Separator} />;
});

export interface FlatListProps extends FLProps<Item[]> {}

export default List;
