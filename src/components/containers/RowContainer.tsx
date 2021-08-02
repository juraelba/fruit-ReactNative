import React, { FC, ReactElement, ReactNode } from 'react';
import { StyledRowContainer } from '../styles/Containers.style';

type RowContainerProps = {
  children: ReactNode
};

const RowContainer: FC<RowContainerProps> = (props: RowContainerProps): ReactElement => {
  const { children } = props;
  return (
    <StyledRowContainer>
      {children}
    </StyledRowContainer>
  );
};

export default RowContainer;
