import styled from 'styled-components/native';

export const StyledMainLogo = styled.Image`
    width: ${(props) => props.theme.width.mainLogo};
    height: ${(props) => props.theme.height.mainLogo};
`;

export const StyledSmallLogo = styled.Image`
    width: ${(props) => props.theme.width.smallLogo};
    height: ${(props) => props.theme.height.smallLogo};
`;

export const StyledSocialButtonLogo = styled.Image`
    width: ${(props) => props.theme.width.socialButtonLogo};
    height: ${(props) => props.theme.height.socialButtonLogo};
`;

export const StyledProductImage = styled.ImageBackground`
  width: 100%;
  height: ${(props) => props.theme.height.productImage};
  padding-top: 65%;
  padding-left: 3%;
`;

// export const StyledCategoryImage = styled.ImageBackground`
//   width:  ${(props) => props.theme.width.categoryImage};
//   height: ${(props) => props.theme.height.categoryImage};
//   padding-top: 65%;
//   padding-left: 3%;
// `;

export const StyledRegisterImage = styled.ImageBackground`
  width: ${(props) => props.theme.width.registerImage};
  height: ${(props) => props.theme.height.registerImage};
`;


export const StyledTabImage = styled.ImageBackground`
  width: ${(props) => props.theme.width.tabImage};
  height: ${(props) => props.theme.height.tabImage};
  padding-top: 5%;
  padding-left: 7%;
  margin-top: 23.6%;
`;

export const StyledTabImageGradient = styled.ImageBackground`
  width: ${(props) => props.theme.width.tabImage};
  height: ${(props) => props.theme.height.tabImage};
  padding-top: 5%;
  padding-left: 7%;
  margin-top: 25.4%;
`;

export const StyledHeaderImage = styled.ImageBackground`
  width: 100%;
  height: 90px;
  padding-top: 2%;
  padding-left: 8%;
  padding-right: 8%;
`;

export const StyledVendorHeaderImage = styled.ImageBackground`
  width: 100%;
  height: 90px;
  padding-top: 3%;
  padding-left: 5%;
  padding-right: 5%;
`;

export const StyledTabImageRight = styled.ImageBackground`
  height: 60px;
  padding-left: 50%;
  padding-top: 2%;
  `;