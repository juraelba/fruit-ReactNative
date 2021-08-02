import styled from 'styled-components/native';
import { ColorList, FontFamilyList, FontSizeList } from '../../common/themes/Enums';

interface TextProps {
  readonly color?: ColorList;
  readonly fontFamily?: FontFamilyList;
  readonly fontSize?: FontSizeList;
}

export const StyledTitle = styled.Text`
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.font.family.primaryBold};
  font-size: ${(props) => props.theme.font.size.xl};
`;

export const StyledSubtitle = styled.Text`
  color: ${(props) => props.theme.color.secondary};
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.md};
`;

export const StyledText = styled.Text<TextProps>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
`;
