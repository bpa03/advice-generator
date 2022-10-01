import { FC } from 'react';

// Components
import AdviceCard from '@/components/AdviceCard';
import Loader from '@/components/Loader';

// Hooks
import useRandomAdvice from '@/hooks/useRandomAdvice';

// GlobalStyles
import GlobalStyles, { Container } from '@/AppStyles';

const App: FC = () => {
  const [values, getRandomAdvice] = useRandomAdvice();
  const { data, loading } = values;

  return (
    <Container>
      <GlobalStyles />
      {loading || !data ? (
        <Loader />
      ) : (
        <AdviceCard data={data} getRandomAdvice={getRandomAdvice} />
      )}
    </Container>
  );
};

export default App;
