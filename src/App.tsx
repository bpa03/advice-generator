import { FC } from 'react';

// Components
import AdviceCard from '@/components/AdviceCard';

// GlobalStyles
import GlobalStyles, { Container } from '@/AppStyles';

const App: FC = () => (
  <Container>
    <GlobalStyles />
    <AdviceCard />
  </Container>
);

export default App;
