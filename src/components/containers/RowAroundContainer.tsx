import React, { FC, ReactElement, ReactNode } from 'react';
import { StyledRowAroundContainer } from '../styles/Containers.style';

type RowContainerProps = {
  children: ReactNode
};

const RowSpaceAroundContainer: FC<RowContainerProps> = (props: RowContainerProps): ReactElement => {
  const { children } = props;
  return (
    <StyledRowAroundContainer>
      {children}
    </StyledRowAroundContainer>
  );
};

export default RowSpaceAroundContainer;
