import { Badge } from '@chakra-ui/react';

interface Props {
 score: number;
}

const CriticScore = ({ score }: Props) => {
 let color = score > 90 ? 'green' : score > 60 ? 'yellow' : '';
 return (
  <Badge
   paddingX={2}
   fontSize={'14px'}
   borderRadius={'5px'}
   colorScheme={color}
  >
   {score}
  </Badge>
 );
};

export default CriticScore;
