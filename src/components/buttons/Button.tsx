import React, { FC, ReactElement } from 'react';
import { ColorList, HeightList, WidthList } from '../../common/themes/Enums';
import { StyledButton } from '../styles/Buttons.style';
import { FontFamilyList, FontSizeList } from '../../common/themes/Enums';
type ButtonProps = {
  backgroundColor?: ColorList;
  color?: ColorList;
  fontFamily?: FontFamilyList,
  fontSize?: FontSizeList
  title: string;
  onPress(): void;
  width?: WidthList,
  height?: HeightList
};

const Button: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
  const {
    color, backgroundColor, title, fontSize, fontFamily, onPress, width, height
  } = props;

  return (
    <StyledButton
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      backgroundColor={backgroundColor}
      title={title}
      onPress={onPress}
      width={width}
      height={height}
    />
  );
};

Button.defaultProps = {
  backgroundColor: ColorList.primary,
  fontFamily: FontFamilyList.primary,
  fontSize: FontSizeList.sm,
  color: ColorList.white,
  height: HeightList.lg
};

export default Button;
