import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { MarginList, PaddingList } from '../../common/themes/Enums';


interface StyledViewContainerProps {
  readonly containerStyle: {
    readonly marginTop: MarginList;
    readonly marginRight: MarginList;
    readonly marginBottom?: MarginList;
    readonly marginLeft?: MarginList;
    readonly paddingTop?: PaddingList;
    readonly paddingRight?: PaddingList;
    readonly paddingBottom?: PaddingList;
    readonly paddingLeft?: PaddingList;
  }
}

export const StyledMainContainer = styled.ScrollView`
  flex: 1;
  padding: ${(props) => props.theme.padding.md};
`;

export const StyledSearchMainContainer = styled.ScrollView`
  flex: 1;
  padding-top: 0;
  padding-left: ${(props) => props.theme.padding.md};
  padding-right: ${(props) => props.theme.padding.md};
  padding-bottom: ${(props) => props.theme.padding.md};
`;

export const StyledRowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const StyledRowWrapContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledRowBetweenContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const StyledRowAroundContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const StyledCenterContainer = styled.View`
  align-items: center;
`;

export const StyledViewContainer = styled.ScrollView<StyledViewContainerProps>`
  margin-top: ${(props) => props.containerStyle.marginTop};
  margin-right: ${(props) => props.containerStyle.marginRight};
  margin-bottom: ${(props) => props.containerStyle?.marginBottom};
  margin-left: ${(props) => props.containerStyle?.marginLeft};
  padding-top: ${(props) => props.containerStyle?.paddingTop};
  padding-right: ${(props) => props.containerStyle?.paddingRight};
  padding-bottom: ${(props) => props.containerStyle?.paddingBottom};
  padding-left: ${(props) => props.containerStyle?.paddingLeft};
`;

export const StyledLinearGradient = styled(LinearGradient)`
  flex: 1;
`;

export const StyledHeaderLinearGradient = styled(LinearGradient)`
  height: 74px;
  position: relative;
  padding-top: 15px;

`;


export const StyledTabLinearGradient = styled(LinearGradient)`
  margin-top: 19px;
  width: 325px;
  
`;

export const StyledLinearContainer = styled.ScrollView`
 flex: 1;
`;


export const IconTabContainer = styled.View`
  position: absolute; 
  display: flex;
  flex-direction: row; 
  margin-left: 7%;
  margin-top: 5%;
`;


