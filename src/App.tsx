import { FC } from 'react';

// Components
import AdviceCard from '@/components/AdviceCard';

// GlobalStyles
import GlobalStyles, {Container} from '@/AppStyles';

const App: FC = () => (
  <Container>
    <AdviceCard />
    <GlobalStyles />
  </Container>
);

export default App;
