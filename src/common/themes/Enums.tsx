/* eslint-disable global-require */
export enum ImageLogoType {
    primary = require('../../assets/images/primary-logo.jpg'),
    secondary = require('../../assets/images/secondary-logo.png'),
    google = require('../../assets/images/google-logo.png'),
}

//TODO Reorganizar, no concuerda con los enums de themes
export enum SocialButtonType {
    google = 'google',
    facebook = 'facebook',
    apple = 'apple',
}



export enum ColorList {
    backgroundGrey='#E2E3E6',
    textGrey='#4B5461',
    primary='#0FAA7E',
    secondary= '#3E4A59',
    tertiary='#D3DFEF',
    facebook= '#3654A4',
    google='#4286F5',
    white='#FFFFFF',
    black='black'
}

export enum FontSizeList {
    xxs= '12px',
    xs= '14px',
    sm= '16px',
    md= '18px',
    lg= '24px',
    xl= '36px',
}

export enum FontFamilyList {
    primary= 'ProximaNova-Regular',
    primaryBold= 'ProximaNova-Bold',
    secondary= 'Roboto-Regular',
    secondaryBold= 'Roboto-Bold',
}

export enum PaddingList {
    none= '0px',
    xs= '5px',
    sm= '10px',
    md= '20px',
    lg= '30px',
    xl= '40px',
    xxl= '50px',
}

export enum MarginList {
    none= '0px',
    xs= '5px',
    sm= '10px',
    md= '20px',
    lg= '30px',
    xl= '40px',
    xxl= '50px',
}

export enum HeightList {
    xs= '10px',
    sm= '20px',
    md= '30px',
    lg= '40px',
    xl= '50px',
    smallButton = '24px',
    mainLogo = '76px',
    smallLogo = '32px',
    socialButtonLogo= '30px',
    productImage = '375px',
    categoryImage = '100px',
    vendorImage = '120px',
    registerImage= '100%',
    tabImage= '60px'
}

export enum WidthList {
    smallButton = '54px',
    mediumButton = '105px',
    smallLogo = '36px',
    mainLogo = '86px',
    socialButtonLogo= '30px',
    productImage = '375px',
    vendorImage = '120px',
    categoryImage = '165px',
    registerImage='100%',
    tabImage= '375px',
}
