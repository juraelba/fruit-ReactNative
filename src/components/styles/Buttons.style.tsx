import styled from 'styled-components/native';
import { Button, Icon } from 'react-native-elements';
import { pixelsToStyleSheet } from '../../utils/Conversions';
import { ColorList, SocialButtonType, FontSizeList, FontFamilyList, WidthList, HeightList } from '../../common/themes/Enums';
// @ts-ignore
import GoogleLogo from '../../assets/images/google-logo.png';

interface StyledButtonProps {
  readonly color?: ColorList;
  readonly backgroundColor?: ColorList;
  readonly fontSize?: FontSizeList;
  readonly fontFamily?: FontFamilyList;
  readonly width?: WidthList;
  readonly height?: HeightList
}

interface SocialButtonProps {
  readonly socialType: SocialButtonType;
}

export const StyledButton = styled(Button).attrs<StyledButtonProps>((props) => ({
  titleStyle: {
    // fontFamily: props.theme.font.family.primaryBold,
    fontFamily: props.fontFamily,
    // fontSize: pixelsToStyleSheet(props.theme.font.size.sm),
    fontSize: pixelsToStyleSheet(props.fontSize),
    color: props.color,
  },
  buttonStyle: {
    backgroundColor: props.backgroundColor,
    // height: pixelsToStyleSheet(props.theme.height.lg),
    height: pixelsToStyleSheet(props.height),
    width:  pixelsToStyleSheet(props.width ? props.width: 'undefined')
  },
}))<StyledButtonProps>``;

export const StyledSocialButton = styled(Button).attrs<SocialButtonProps>((props) => ({
  titleStyle: {
    fontFamily: props.theme.font.family.primaryBold,
    fontSize: pixelsToStyleSheet(props.theme.font.size.sm),
  },
  buttonStyle: {
    height: pixelsToStyleSheet(props.theme.height.xl),
    backgroundColor: getButtonColor(props.socialType),
  },
}))<SocialButtonProps>``;

export const FacebookIcon = styled(Icon).attrs((props) => ({
  color: props.theme.color.white,
  name: 'facebook',
  size: pixelsToStyleSheet(props.theme.font.size.xl),
}))``;

export const GoogleIcon = styled(Icon).attrs((props) => ({
  background: `url(${GoogleLogo})`,
  size: pixelsToStyleSheet(props.theme.font.size.xl),
}))``;

export const AppleIcon = styled(Icon).attrs((props) => ({
  color: props.theme.color.white,
  name: 'apple',
  size: pixelsToStyleSheet(props.theme.font.size.xl),
  type: 'font-awesome',
}))``;

export const SocialButtonGrid = styled.View`
  flex-direction: row;
`;

export const SocialButtonContainer = styled.View`
  width: 100%
`;

export const IconContainer = styled.View`
  position: absolute;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
`;

function getButtonColor(buttonType: SocialButtonType): ColorList {
  switch (buttonType) {
    case SocialButtonType.facebook:
      return ColorList.facebook;
    case SocialButtonType.google:
      return ColorList.google;
    case SocialButtonType.apple:
      return ColorList.black;
    default:
      return ColorList.google;
  }
}
