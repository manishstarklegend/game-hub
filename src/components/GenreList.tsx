import {
 Button,
 HStack,
 Heading,
 Image,
 List,
 ListItem,
 Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
 selecteGenre: (genre: Genre) => void;
 selectedGenre: Genre | null;
}

const GenreList = ({ selecteGenre, selectedGenre }: Props) => {
 const { data, isLoading, error } = useGenres();
 if (error) return null;
 if (isLoading) return <Spinner />;
 return (
  <>
   <Heading marginBottom={3} fontSize={'2xl'}>
    Genres
   </Heading>
   <List>
    {data.results.map((genre) => (
     <ListItem key={genre.id} cursor={'pointer'} paddingY={'5px'}>
      <HStack>
       <Image
        src={getCroppedImageUrl(genre.image_background)}
        boxSize={'32px'}
        objectFit={'cover'}
        borderRadius={8}
       />
       <Button
        whiteSpace={'normal'}
        textAlign={'start'}
        onClick={() => selecteGenre(genre)}
        fontSize={'lg'}
        variant={'link'}
        fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
       >
        {genre.name}
       </Button>
      </HStack>
     </ListItem>
    ))}
   </List>
  </>
 );
};

export default GenreList;
