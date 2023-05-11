import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platfrom } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
 genre: Genre | null;
 platform: Platfrom | null;
}

function App() {
 // const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null);
 // const [selectedPlatforms, setSelectedPlatforms] = useState<Platforms | null>(
 //  null
 // );
 const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
      selecteGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
      selectedGenre={gameQuery.genre}
     />
    </GridItem>
   </Show>
   <GridItem area="main" paddingX={'10px'}>
    <HStack spacing={5} paddingLeft={2} marginBottom={2}>
     <PlatformSelector
      selectedPlatform={gameQuery.platform}
      onSelectedPlatform={(platform) =>
       setGameQuery({ ...gameQuery, platform })
      }
     />
     <SortSelector />
    </HStack>
    <GameGrid gameQuery={gameQuery} />
   </GridItem>
  </Grid>
 );
}

export default App;
