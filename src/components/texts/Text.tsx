import React, { FC, ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  ColorList, FontFamilyList, FontSizeList, MarginList,
} from '../../common/themes/Enums';
import mainTheme from '../../common/themes/mainTheme';
import { IconContainer } from '../styles/Buttons.style';
import { StyledText } from '../styles/Texts.style';

type TextProps = {
  value: string;
  fontFamily?: FontFamilyList;
  fontSize?: FontSizeList;
  color?: ColorList;
  onPress?: (() => void) | null;
};

const Text: FC<TextProps> = (props: TextProps): ReactElement => {
  const {
    color, fontFamily, fontSize, onPress, value,
  } = props;

  if (onPress) {
    
    return (
      <TouchableOpacity
        onPress={onPress}
      >
       
        <StyledText
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}
          
        >
          {value}
        </StyledText>
      </TouchableOpacity>
    );
  }

  

  return (
    <StyledText
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
     
    >
      {value}
    </StyledText>
  );
};

Text.defaultProps = {
  color: mainTheme.color.secondary,
  fontFamily: mainTheme.font.family.primary,
  fontSize: mainTheme.font.size.xs,
  onPress: null,
};

export default Text;
