import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurants = async (term) => {
    setResults((prevState) => ({ ...prevState, loading: true }));

    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 1,
          term,
          location: 'Toronto',
        },
      });
      setResults({
        data: response.data.businesses,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: 'Something went wrong',
      });
    }
  };

  return [results, searchRestaurants];
};
