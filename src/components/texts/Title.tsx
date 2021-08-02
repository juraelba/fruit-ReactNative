import React, { FC, ReactElement } from 'react';
import { StyledTitle } from '../styles/Texts.style';

type TitleProps = {
  value: string;
};

const Title: FC<TitleProps> = (props: TitleProps): ReactElement => {
  const { value } = props;

  return (
    <StyledTitle>
      {value}
    </StyledTitle>
  );
};

export default Title;
