import { useState, useEffect, useRef } from 'react';
import AdviceService, { AdviceType } from '@/services/advice';

interface StateType {
  loading: boolean;
  error: Error | null;
  data: AdviceType | null;
}

type HookReturnType = [StateType];

export default function useRandomAdvice(): HookReturnType {
  const isMounted = useRef<boolean>(true);
  const [values, setValues] = useState<StateType>({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setValues((prevState) => ({
        ...prevState,
        loading: true,
      }));

      try {
        const data = await AdviceService.getRandomAdvice();
        setValues((prevState) => ({
          ...prevState,
          loading: false,
          data,
        }));
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    if (!isMounted.current) {
      return;
    }

    fetchData();

    return () => {
      isMounted.current = false;
    }
  }, []);

  return [values];
}
