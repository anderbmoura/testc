import { Button, Text } from 'tamagui';

import { Popover } from './Popover';

export const PopoverDemo = () => {
  return (
    <Popover placement="left">
      <Popover.Trigger>
        <Button>Olá</Button>
      </Popover.Trigger>
      <Popover.FocusScope loop trapped focusOnIdle={true}>
        <Popover.Content>
          <Popover.Arrow />
          <Popover.Close>
            <Button size="$size.1">x</Button>
          </Popover.Close>
          <Text>Oláááá</Text>
        </Popover.Content>
      </Popover.FocusScope>
    </Popover>
  );
};
export default PopoverDemo;
