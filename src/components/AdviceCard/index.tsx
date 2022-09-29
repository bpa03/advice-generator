import { FC } from 'react';
import IconDice from '../Icons/IconDice';

// Hooks
import useRandomAdvice from '@/hooks/useRandomAdvice';

// Styles
import {
  Card,
  AdviceCode,
  AdviceText,
  CardBody,
  CardFooter,
  CardHeader,
  Separator,
  DiceButton
} from './styles';

const AdviceCard: FC = () => {
  const [{ data, loading }, getRandomAdvice] = useRandomAdvice();

  if (loading || !data) {
    return <h1>Loading</h1>;
  }

  const { advice, id } = data.slip;
  const formatedAdvice = `"${advice}"`;

  return (
    <Card>
      <CardHeader>
        <AdviceCode>Advice #{id}</AdviceCode>
      </CardHeader>
      <CardBody>
        <AdviceText>{formatedAdvice}</AdviceText>
      </CardBody>
      <CardFooter>
        <Separator />
        <DiceButton onClick={getRandomAdvice}>
          <IconDice />
        </DiceButton>
      </CardFooter>
    </Card>
  );
};

export default AdviceCard;
