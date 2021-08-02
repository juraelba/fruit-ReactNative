import React, { FC, ReactElement } from 'react';
import { ImageLogoType } from '../../common/themes/Enums';
import { StyledSocialButtonLogo } from '../styles/Images.style';

type SocialButtonLogoProps = {
    logoSrc: ImageLogoType;
};

const SocialButtonLogo: FC<SocialButtonLogoProps> = (props: SocialButtonLogoProps): ReactElement => {
  const { logoSrc } = props;

  return (
    <StyledSocialButtonLogo
      source={logoSrc}
    />
  );
};
export default SocialButtonLogo;