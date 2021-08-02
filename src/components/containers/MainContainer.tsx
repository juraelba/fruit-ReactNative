import React, { FC, ReactElement, ReactNode } from 'react';
import { StyledMainContainer } from '../styles/Containers.style';

type MainContainerProps = {
  children: ReactNode
};

const MainContainer: FC<MainContainerProps> = (props: MainContainerProps): ReactElement => {
  const { children } = props;
  return (
    <StyledMainContainer>
      {children}
    </StyledMainContainer>
  );
};

export default MainContainer;
