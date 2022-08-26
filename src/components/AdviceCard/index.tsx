import { FC } from 'react';
import useRandomAdvice from '@/hooks/useRandomAdvice';

const AdviceCard: FC = () => {
  const [{ data, loading }] = useRandomAdvice();

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
