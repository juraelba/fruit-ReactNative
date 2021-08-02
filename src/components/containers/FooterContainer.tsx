import React, { FC, ReactElement, ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

type FooterContainerProps = {
    children: ReactNode,
    onPress?: (() => void) | null;
};

const FooterContainer: FC<FooterContainerProps> = (props: FooterContainerProps): ReactElement => {
  const { children, onPress } = props;
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        
            {children}
          
      </TouchableOpacity>
    );
  }



  return (
    <StyledFooterContainer>
      <StyledTabContainer>
        {children}
      </StyledTabContainer>
    </StyledFooterContainer>
  );
};

FooterContainer.defaultProps = {
  onPress: null,
};

export default FooterContainer;
