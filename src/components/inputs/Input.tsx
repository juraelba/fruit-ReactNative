import React, { FC, ReactElement } from 'react';
import { ColorList } from '../../common/themes/Enums';
import { StyledInputText } from '../styles/Inputs.style';

type InputTexttProps = {
  errorMessage: string | undefined;
  value?: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  onSubmitEditing?: () => void;
  placeholder: string;
  secureTextEntry?: boolean;
  color?: ColorList;
  label?: string;
  leftIcon?: object;
  leftIconContainerStyle?: object;
  inputContainerStyle?: object;
};

const InputText: FC<InputTexttProps> = (props: InputTexttProps): ReactElement => {
  const {
    color,
    errorMessage,
    onChangeText,
    onBlur,
    onSubmitEditing,
    placeholder,
    secureTextEntry,
    value,
    label,
    leftIcon,
    leftIconContainerStyle,
    inputContainerStyle
  } = props;
  return (
    <StyledInputText
      label={label}
      color={color}
      errorMessage={errorMessage}
      value={value}
      onBlur={onBlur}
      onChangeText={(text: string) => onChangeText(text)}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onSubmitEditing={onSubmitEditing}
      leftIcon={leftIcon}
      leftIconContainerStyle={leftIconContainerStyle}
      inputContainerStyle={inputContainerStyle}
    />
  );
};

InputText.defaultProps = {
  onBlur: () => null,
  onSubmitEditing: () => null,
  secureTextEntry: false,
  value: '',
  label: '',
  color: ColorList.secondary,
};

export default InputText;
