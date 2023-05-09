import axios from 'axios';

export default axios.create({
 baseURL: 'https://api.rawg.io/api',
 params: {
  key: 'ae1ae3b838bc44cfbe0d2d9b59efb5ef',
 },
});
