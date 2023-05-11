import {
 Button,
 HStack,
 Image,
 List,
 ListItem,
 Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
 selecteGenre: (genre: Genre) => void;
}

const GenreList = ({ selecteGenre }: Props) => {
 const { data, isLoading, error } = useGenres();
 if (error) return null;
 if (isLoading) return <Spinner />;
 return (
  <List>
   {data.map((genre) => (
    <ListItem key={genre.id} cursor={'pointer'} paddingY={'5px'}>
     <HStack>
      <Image
       src={getCroppedImageUrl(genre.image_background)}
       boxSize={'32px'}
       borderRadius={8}
      />
      <Button
       onClick={() => selecteGenre(genre)}
       fontSize={'lg'}
       variant={'link'}
      >
       {genre.name}
      </Button>
     </HStack>
    </ListItem>
   ))}
  </List>
 );
};

export default GenreList;
