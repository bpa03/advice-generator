import { FC, useState, useEffect } from 'react';
import AdviceService, { AdviceType } from '@/services/advice';

interface State {
  loading: boolean;
  error: Error | null;
  data: AdviceType | null;
}

const AdviceCard: FC = () => {
  const [{ data, loading }, setValues] = useState<State>({
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

    fetchData();
  }, []);

  if (loading || !data) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h2>{data.slip.id}</h2>
      <h1>{data.slip.advice}</h1>
    </div>
  );
};

export default AdviceCard;
