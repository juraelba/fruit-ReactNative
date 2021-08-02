import React, { FC, ReactNode } from 'react';
import { StyledLinearContainer, StyledHeaderLinearGradient } from '../styles/Containers.style';

type BackgroundContainerProps = {
    children: ReactNode;
};

const HeaderContainer: FC<BackgroundContainerProps> = (props: BackgroundContainerProps) => {
    const { children } = props;
    return (
        <StyledHeaderLinearGradient
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            colors={[
                '#DFF74D',
                '#A5E759',
                '#72D864',
                '#5ED368',
                '#58D06A',
                '#49C86E',
                '#2FBA75',
                '#0FAA7E',
            ]}
            locations={[
                0,
                0.18,
                0.41,
                0.54,
                0.64,
                0.75,
                0.88,
                1,
            ]}
        >
            <StyledLinearContainer>
                {children}
            </StyledLinearContainer>
        </StyledHeaderLinearGradient>
    );
};

export default HeaderContainer;
