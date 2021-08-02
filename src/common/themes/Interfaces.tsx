import {
    ColorList,
    FontFamilyList,
    FontSizeList,
    HeightList, IconType, ImageBackgroundType,
    ImageLogoType,
    MarginList,
    PaddingList,
    WidthList,
} from './Enums';

export interface Color {
    textGrey: ColorList;
    backgroundGrey: ColorList;
    primary: ColorList;
    secondary: ColorList;
    tertiary: ColorList;
    facebook: ColorList;
    google: ColorList;
    white: ColorList;
    black: ColorList;
}

export interface Font {
    size: {
        xxs: FontSizeList,
        xs: FontSizeList,
        sm: FontSizeList,
        md: FontSizeList,
        lg: FontSizeList,
        xl: FontSizeList,
      },
      family: {
        primary: FontFamilyList,
        primaryBold: FontFamilyList,
        secondary: FontFamilyList,
        secondaryBold: FontFamilyList,
      },
}

export interface Padding {
      none: PaddingList,
      xs: PaddingList,
      sm: PaddingList,
      md: PaddingList,
      lg: PaddingList,
      xl: PaddingList,
      xxl: PaddingList,
}

export interface Margin {
      none: MarginList,
      xs: MarginList,
      sm: MarginList,
      md: MarginList,
      lg: MarginList,
      xl: MarginList,
      xxl: MarginList,
}

export interface Height {
  xs: HeightList,
  sm: HeightList,
  md: HeightList,
  lg: HeightList,
  xl: HeightList,
  mainLogo: HeightList,
  smallLogo: HeightList,
  smallButton: HeightList,
  socialButtonLogo: HeightList,
  productImage: HeightList,
  vendorImage: HeightList,
  categoryImage: HeightList,
  registerImage: HeightList,
  tabImage: HeightList,
}

export interface Width {
  mainLogo: WidthList,
  smallLogo: WidthList,
  smallButton: WidthList,
  mediumButton: WidthList,
  socialButtonLogo: WidthList,
  productImage: WidthList,
  vendorImage: WidthList,
  categoryImage: WidthList,
  registerImage: WidthList,
  tabImage: WidthList,
}

export interface Logo {
  primaryLogo: ImageLogoType;
  secondaryLogo: ImageLogoType;
  googleLogo: ImageLogoType;
}




