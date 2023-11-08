import {useEffect, useState} from 'react';
import axios from 'axios';
import {RootTypes} from '../types';

const useFetch = (URL: string) => {
  const [data, setData] = useState<RootTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<RootTypes>(URL);
        const result = res.data;
        setData(result);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  return {data, isLoading, error};
};

export default useFetch;
