import React, { FC, ReactElement } from 'react';
import { SocialButtonType } from '../../common/themes/Enums';
import {
  AppleIcon,
  IconContainer,
  StyledSocialButton,
  SocialButtonContainer,
  SocialButtonGrid,
  FacebookIcon,
  // GoogleIcon,
} from '../styles/Buttons.style';
import mainTheme from '../../common/themes/mainTheme';
import { SocialButtonLogo } from '../../components/images';

type SocialButtonProps = {
  disabled?: boolean;
  socialType: SocialButtonType;
  title: string;
  onPress(): void;
};

const SocialButton: FC<SocialButtonProps> = (props: SocialButtonProps): ReactElement => {
  const {
    disabled, title, onPress, socialType,
  } = props;

  const SelectedIcon = () => {
    switch (socialType) {
      case SocialButtonType.facebook:
        return <FacebookIcon />;
      case SocialButtonType.google:
        return <SocialButtonLogo logoSrc={mainTheme.logo.googleLogo} />;
      case SocialButtonType.apple:
        return <AppleIcon />;
      default:
        return <SocialButtonLogo logoSrc={mainTheme.logo.googleLogo} />;
    }
  };

  return (
    <SocialButtonGrid>
      <SocialButtonContainer>
        <StyledSocialButton
          socialType={socialType}
          title={title}
          onPress={onPress}
          disabled={disabled}
        />
      </SocialButtonContainer>
      <IconContainer>
        <SelectedIcon />
      </IconContainer>
    </SocialButtonGrid>
  );
};

SocialButton.defaultProps = {
  disabled: false,
};

export default SocialButton;
