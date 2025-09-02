import { FlatList, FlatListProps as FLProps } from 'react-native';
import { Separator, styled } from 'tamagui';
import { Item } from './ListItem';

const StyledList = styled(FlatList, {});
export const List = StyledList.styleable((props, ref) => {
  return <StyledList ref={ref} {...props} ItemSeparatorComponent={Separator} />;
});

export interface FlatListProps extends FLProps<Item[]> {}

export default List;
