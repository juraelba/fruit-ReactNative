import React, { FC, ReactElement, ReactNode } from 'react';
import { StyledRowWrapContainer } from '../styles/Containers.style';

type RowContainerProps = {
  children: ReactNode
};

const RowSpaceAroundContainer: FC<RowContainerProps> = (props: RowContainerProps): ReactElement => {
  const { children } = props;
  return (
    <StyledRowWrapContainer>
      {children}
    </StyledRowWrapContainer>
  );
};

export default RowSpaceAroundContainer;
