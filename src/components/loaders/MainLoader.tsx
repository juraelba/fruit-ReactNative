import React, { FC, ReactElement } from 'react';
import mainTheme from '../../common/themes/mainTheme';
import { CenterContainer, MainContainer } from '../containers';
import { StyledMainLoader } from '../styles/Loaders.style';

const MainLoader: FC = (): ReactElement => (
  <MainContainer>
    <CenterContainer>
      <StyledMainLoader
        color={mainTheme.color.primary}
        size="large"
      />
    </CenterContainer>
  </MainContainer>
);

export default MainLoader;
