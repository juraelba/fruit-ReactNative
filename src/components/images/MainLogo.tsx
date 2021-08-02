import React, { FC, ReactElement } from 'react';
import { ImageLogoType } from '../../common/themes/Enums';
import { StyledMainLogo } from '../styles/Images.style';

type MainLogoProps = {
  logoSrc: ImageLogoType;
};

const MainLogo: FC<MainLogoProps> = (props: MainLogoProps): ReactElement => {
  const { logoSrc } = props;

  return (
    <StyledMainLogo
      source={logoSrc}
    />
  );
};
export default MainLogo;
