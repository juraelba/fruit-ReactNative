import React, { FC, ReactElement, ReactNode } from 'react';
import { StyledCenterContainer } from '../styles/Containers.style';

type CenterContainerProps = {
  children: ReactNode
};

const RowContainer: FC<CenterContainerProps> = (props: CenterContainerProps): ReactElement => {
  const { children } = props;
  return (
    <StyledCenterContainer>
      {children}
    </StyledCenterContainer>
  );
};

export default RowContainer;
