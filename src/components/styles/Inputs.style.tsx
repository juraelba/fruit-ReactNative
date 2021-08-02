import styled from 'styled-components/native';
import { Input } from 'react-native-elements';
import { pixelsToStyleSheet } from '../../utils/Conversions';
import { ColorList } from '../../common/themes/Enums';

interface StyledInputTextProps {
  readonly color?: ColorList;
  readonly leftIconContainerStyle?: object;
  readonly inputContainerStyle?: object;
  readonly leftIcon?: object;
}

export const StyledInputText = styled(Input).attrs<StyledInputTextProps>((props) => ({
  containerStyle: {
    paddingHorizontal: pixelsToStyleSheet(props.theme.padding.none),
  },
  //inputContainerStyle: {
    // borderBottomColor: props.theme.color.tertiary
  //},
  inputContainerStyle: props.inputContainerStyle,
  inputStyle: {
    color: props.color,
    fontSize: pixelsToStyleSheet(props.theme.font.size.xs),
    fontFamily: props.theme.font.family.primary,
  },
  placeholderTextColor: props.color,
  labelStyle: {
    color: props.color,
  },
  leftIcon: props.leftIcon,
  leftIconContainerStyle: props.leftIconContainerStyle,
  errorStyle: {
    fontSize: pixelsToStyleSheet(props.theme.font.size.xxs),
  },
}))<StyledInputTextProps>``;

export default StyledInputText;
