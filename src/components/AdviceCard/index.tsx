import { FC } from 'react';
import { AdviceType } from '@/services/advice';

// Components
import IconDice from '../Icons/IconDice';

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

interface AdviceCardProps {
  data: AdviceType;
  getRandomAdvice: () => void;
}

const AdviceCard: FC<AdviceCardProps> = ({ data, getRandomAdvice }) => {
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
