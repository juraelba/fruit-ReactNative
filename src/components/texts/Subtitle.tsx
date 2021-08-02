import React, { FC, ReactElement } from 'react';
import { StyledSubtitle } from '../styles/Texts.style';

type SubtitleProps = {
  value: string;
};

const Subtitle: FC<SubtitleProps> = (props: SubtitleProps): ReactElement => {
  const { value } = props;

  return (
    <StyledSubtitle>
      {value}
    </StyledSubtitle>
  );
};

export default Subtitle;
