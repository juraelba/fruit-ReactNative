import React, { FC, ReactElement, ReactNode } from 'react';
import { MarginList, PaddingList } from '../../common/themes/Enums';
import { StyledViewContainer } from '../styles/Containers.style';

type ViewContainerProps = {
  children: ReactNode;
  containerStyle?: {
    marginTop?: MarginList;
    marginRight?: MarginList;
    marginBottom?: MarginList;
    marginLeft?: MarginList;
    paddingTop?: PaddingList;
    paddingRight?: PaddingList;
    paddingBottom?: PaddingList;
    paddingLeft?: PaddingList;
  }
};

const ViewContainer: FC<ViewContainerProps> = (props: ViewContainerProps): ReactElement => {
  const { children, containerStyle } = props;

  const defaultProps = {
    containerStyle: {
      marginTop: (containerStyle?.marginTop) || MarginList.none,
      marginRight: (containerStyle?.marginRight) || MarginList.none,
      marginBottom: (containerStyle?.marginBottom) || MarginList.none,
      marginLeft: (containerStyle?.marginLeft) || MarginList.none,
      paddingTop: (containerStyle?.paddingTop) || PaddingList.none,
      paddingRight: (containerStyle?.paddingRight) || PaddingList.none,
      paddingBottom: (containerStyle?.paddingBottom) || PaddingList.none,
      paddingLeft: (containerStyle?.paddingLeft) || PaddingList.none,
    },
  };

  return (
    <StyledViewContainer
      containerStyle={defaultProps.containerStyle}
    >
      {children}
    </StyledViewContainer>
  );
};

ViewContainer.defaultProps = {
  containerStyle: {
    marginTop: MarginList.none,
    marginRight: MarginList.none,
    marginBottom: MarginList.none,
    marginLeft: MarginList.none,
    paddingTop: PaddingList.none,
    paddingRight: PaddingList.none,
    paddingBottom: PaddingList.none,
    paddingLeft: PaddingList.none,
  },
};

export default ViewContainer;
