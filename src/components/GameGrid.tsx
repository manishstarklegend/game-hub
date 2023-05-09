import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

const GameGrid = () => {
 const [games, setGames] = useState<Game[]>([]);
 const [error, setError] = useState('');

 interface Game {
  id: number;
  name: string;
 }
 interface FetchGameResponse {
  count: number;
  results: Game[];
 }
 useEffect(() => {
  apiClient
   .get<FetchGameResponse>('/games')
   .then((result) => {
    setGames(result.data.results);
   })
   .catch((err) => {
    console.log(err.message);
    setError(err.message);
   });
 }, []);
 return (
  <>
   {error && <Text>{error}</Text>}
   <ul>
    {games.map((game) => (
     <li key={game.id}>{game.name}</li>
    ))}
   </ul>
  </>
 );
};

export default GameGrid;
