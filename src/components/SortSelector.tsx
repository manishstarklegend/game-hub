import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
 onSelectSortOrder: (order: string) => void;
 sortOrderString: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrderString }: Props) => {
 const sortOrder = [
  {
   value: '',
   label: 'Relevance',
  },
  {
   value: '-added',
   label: 'Date added ',
  },
  {
   value: 'name',
   label: 'Name',
  },
  {
   value: '-released',
   label: 'Release Date',
  },
  {
   value: '-metacritic',
   label: 'Popularity',
  },
  {
   value: '-rating',
   label: 'Average Rating',
  },
 ];
 const currentSortOrder = sortOrder.find(
  (val) => val.value === sortOrderString
 );
 return (
  <Menu>
   <MenuButton as={Button} rightIcon={BsChevronDown}>
    Order by : {currentSortOrder?.label || 'Relevance'}
   </MenuButton>
   <MenuList>
    {sortOrder.map((order) => (
     <MenuItem
      onClick={() => onSelectSortOrder(order.value)}
      value={order.value}
      key={order.value}
     >
      {order.label}
     </MenuItem>
    ))}
   </MenuList>
  </Menu>
 );
};

export default SortSelector;
