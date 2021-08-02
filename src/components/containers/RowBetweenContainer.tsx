import React, { FC, ReactElement, ReactNode } from 'react';
import { StyledRowBetweenContainer } from '../styles/Containers.style';

type RowContainerProps = {
  children: ReactNode
};

const RowSpaceContainer: FC<RowContainerProps> = (props: RowContainerProps): ReactElement => {
  const { children } = props;
  return (
    <StyledRowBetweenContainer>
      {children}
    </StyledRowBetweenContainer>
  );
};

export default RowSpaceContainer;
