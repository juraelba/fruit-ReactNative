import React, { FC, ReactElement, ReactNode } from 'react';
import { StyledSearchMainContainer } from '../styles/Containers.style';

type MainContainerProps = {
  children: ReactNode
};

const MainContainer: FC<MainContainerProps> = (props: MainContainerProps): ReactElement => {
  const { children } = props;
  return (
    <StyledSearchMainContainer>
      {children}
    </StyledSearchMainContainer>
  );
};

export default MainContainer;
