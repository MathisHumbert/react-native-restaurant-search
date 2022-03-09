import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [result, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurant = async (id) => {
    setResults((prevState) => ({ ...prevState, loading: true }));

    try {
      const response = await yelp.get(`/${id}`);
      setResults({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);
      setResults({
        data: null,
        loading: false,
        error: 'Something went wrong',
      });
    }
  };

  return [result, searchRestaurant];
};
