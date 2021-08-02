import React, { FC, ReactElement } from 'react';
import { ImageLogoType } from '../../common/themes/Enums';
import { StyledSmallLogo } from '../styles/Images.style';

type SmallLogoProps = {
  logoSrc: ImageLogoType;
};

const SmallLogo: FC<SmallLogoProps> = (props: SmallLogoProps): ReactElement => {
  const { logoSrc } = props;

  return (
    <StyledSmallLogo
      source={logoSrc}
    />
  );
};
export default SmallLogo;
