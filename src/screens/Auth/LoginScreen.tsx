import React, { FC, ReactElement, useContext } from 'react';
import Snackbar from 'react-native-snackbar';

import { Controller, useForm } from 'react-hook-form';

import handleFireAuthError from '../../utils/helpers/AuthErrorHandler';
import Navigation from '../../common/types/NavigationTypes';

import { AuthScreens } from '../../common/navigation/ScreenNames';
import { AuthContext } from '../../context/AuthContext';

import {
  CenterContainer, LoginContainer, MainContainer, ViewContainer,
} from '../../components/containers';
import { Text } from '../../components/texts';
import { Button, SocialButton } from '../../components/buttons';
import { InputText } from '../../components/inputs';
import { MainLogo } from '../../components/images';
import { FontFamilyList, FontSizeList, SocialButtonType } from '../../common/themes/Enums';
import mainTheme from '../../common/themes/mainTheme';
import FooterContainer from '../../components/containers/FooterContainer';
import { StyledTabImage } from '../../components/styles/Images.style';

type LoginScreenProps = {
  navigation: Navigation;
}

type LoginForm = {
  email: string;
  password: string;
};

const LoginScreen: FC<LoginScreenProps> = ({ navigation }: LoginScreenProps): ReactElement => {
  const { control, handleSubmit, errors } = useForm<LoginForm>();
  const { signInWithEmail, signInWithGoogle } = useContext(AuthContext);

  const onSubmit = async (credentials: LoginForm): Promise<void> => {
    try {
      await signInWithEmail(credentials.email, credentials.password);
    } catch (e) {
      Snackbar.show({
        text: handleFireAuthError(e),
      });
    }
  };

  const submitSignInWithGoogle = async (): Promise<void> => {
    try {
      signInWithGoogle();
    } catch (e) {
      Snackbar.show({
        text: handleFireAuthError(e),
      });
    }
  };

  return (
    <LoginContainer>
      <MainContainer>
        <ViewContainer
          containerStyle={{
            marginTop: mainTheme.margin.xl,
            marginBottom: mainTheme.margin.xxl,
          }}
        >
          <CenterContainer>
            <MainLogo
              logoSrc={mainTheme.logo.secondaryLogo}
            />
          </CenterContainer>
        </ViewContainer>

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <InputText
              errorMessage={errors.email && 'This is required'}
              value={value}
              onChangeText={(text: string) => onChange(text)}
              onBlur={onBlur}
              placeholder="example@gmail.com"
              secureTextEntry={false}
              label="Username"
              color={mainTheme.color.white}
            />
          )}
          name="email"
          rules={{ required: true }}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <InputText
              label="Password"
              errorMessage={errors.password && 'This is required'}
              onBlur={onBlur}
              onChangeText={(text: string) => onChange(text)}
              onSubmitEditing={handleSubmit(onSubmit)}
              placeholder="*******"
              secureTextEntry
              value={value}
              color={mainTheme.color.white}
            />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        <ViewContainer
          containerStyle={{
            marginTop: mainTheme.margin.md,
          }}
        >
        <Button
          color={mainTheme.color.primary}
          backgroundColor={mainTheme.color.white}
          onPress={handleSubmit(onSubmit)}
          title="Sign in"
        />
        <ViewContainer
          containerStyle={{
            marginTop: mainTheme.margin.sm,
          }}
        >
          <SocialButton
            onPress={() => submitSignInWithGoogle()}
            socialType={SocialButtonType.google}
            title="Continue with Google"
          />
        </ViewContainer>
        <ViewContainer
          containerStyle={{
            marginTop: mainTheme.margin.sm,
          }}
        >
          <SocialButton
            onPress={() => Snackbar.show({
              text: 'Disabled function',
            })}
            socialType={SocialButtonType.facebook}
            title="Continue with Facebook"
          />
        </ViewContainer>
        <ViewContainer
          containerStyle={{
            marginTop: mainTheme.margin.md,
          }}
        >
          <CenterContainer>
            <Text
              color={mainTheme.color.white}
              onPress={() => navigation.navigate(AuthScreens.Register)}
              value="New user? Sign up"
            />
          </CenterContainer>
        </ViewContainer>
        </ViewContainer>  
      </MainContainer>
      <FooterContainer onPress={() => navigation.navigate(AuthScreens.Register)}>
        <StyledTabImage source={require("../../assets/images/tab-white-left.png")}>
          <Text
            color={mainTheme.color.primary}
            value="Become a Vendor"
            fontSize={FontSizeList.md}
            fontFamily={FontFamilyList.primary}
          />
        </StyledTabImage>
      </FooterContainer>
    </LoginContainer>
  );
};

export default LoginScreen;
