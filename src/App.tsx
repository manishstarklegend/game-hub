import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

function App() {
 const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null);
 return (
  <Grid
   templateAreas={{
    base: `"nav" "main"`,
    xl: `"nav nav" "aside main"`,
   }}
   templateColumns={{
    base: '1fr',
    lg: '200px 1fr',
   }}
  >
   <GridItem area="nav">
    <NavBar />
   </GridItem>
   <Show above="lg">
    <GridItem area="aside" paddingX={5}>
     <GenreList
      selecteGenre={(genre) => setSelectedGenres(genre)}
      selectedGenre={selectedGenres}
     />
    </GridItem>
   </Show>
   <GridItem area="main" paddingX={'10px'}>
    <GameGrid selectedGenre={selectedGenres} />
   </GridItem>
  </Grid>
 );
}

export default App;
