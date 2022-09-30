import { FC } from 'react';
import { BaseLoader, LoaderWrapper } from './styles';

const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <BaseLoader>Loading</BaseLoader>
    </LoaderWrapper>
  );
};

export default Loader;
