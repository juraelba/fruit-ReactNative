import 'styled-components';
import {
    Color, Font, Height, Logo, Margin, Padding, Width, Background, Icon,
} from './Interfaces';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: Color;
        font: Font;
        padding: Padding;
        margin: Margin;
        height: Height;
        width: Width;
        logo: Logo;
    }
  }
