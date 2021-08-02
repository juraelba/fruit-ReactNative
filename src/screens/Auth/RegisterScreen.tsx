import React, { FC, useContext } from 'react';
import Snackbar from 'react-native-snackbar';

import { Controller, useForm } from 'react-hook-form';
import { ImageBackground } from 'react-native';
import handleFireAuthError from '../../utils/helpers/AuthErrorHandler';
import { AuthContext } from '../../context/AuthContext';

import { CenterContainer, MainContainer, RowContainer, ViewContainer } from '../../components/containers';
import { Subtitle, Text, Title } from '../../components/texts';
import { Button, SocialButton } from '../../components/buttons';
import { InputText } from '../../components/inputs';
import {
  ColorList,
  FontFamilyList,
  FontSizeList,
  ImageBackgroundType,
  SocialButtonType,
} from '../../common/themes/Enums';
import mainTheme from '../../common/themes/mainTheme';
import Navigation from '../../common/types/NavigationTypes';
import { AuthScreens } from '../../common/navigation/ScreenNames';
import {StyledProductImage, StyledRegisterImage, StyledTabImage, StyledTabImageGradient} from '../../components/styles/Images.style';
import FooterContainer from '../../components/containers/FooterContainer';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { IconContainer } from '../../components/styles/Buttons.style';
import { IconTabContainer } from '../../components/styles/Containers.style';



type RegisterScreenProps = {
  navigation: Navigation;
}

type RegisterForm = {
  email: string;
  password: string;
};

const RegisterScreen:FC<RegisterScreenProps> = ({ navigation }:RegisterScreenProps) => {
  const { register, signInWithGoogle } = useContext(AuthContext);
  const { control, handleSubmit, errors } = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    try {
      await register(data.email, data.password);
    } catch (e) {
      Snackbar.show({
        text: handleFireAuthError(e),
      });
    }
  };

  const submitSignUpWithGoogle = async (): Promise<void> => {
    try {
      signInWithGoogle();
    } catch (e) {
      Snackbar.show({
        text: handleFireAuthError(e),
      });
    }
  };

  const submitSignUpWithFacebook = async (): Promise<void> => {
    try {
      Snackbar.show({
        text: 'Disabled function',
      });
    } catch (e) {
      Snackbar.show({
        text: handleFireAuthError(e),
      });
    }
  };

  return (
    <StyledRegisterImage source={require('../../assets/images/back.png')}>
      <ScrollView>
      <MainContainer>
        <ViewContainer
          containerStyle={{
            marginTop: mainTheme.margin.xxl,
            marginBottom: mainTheme.margin.xxl,
          }}
        >
          <Title value="Getting Started" />
          <Subtitle value="Create a Fresh Account" />
        </ViewContainer>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <InputText
              errorMessage={errors.email && 'This is required'}
              value={value}
              onChangeText={(text: string) => onChange(text)}
              onBlur={onBlur}
              placeholder="johnsmith@hotmail.com"
              secureTextEntry={false}
              label="Email"
              color={mainTheme.color.secondary}

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
              errorMessage={errors.password && 'This is required'}
              onBlur={onBlur}
              onChangeText={(text: string) => onChange(text)}
              onSubmitEditing={handleSubmit(onSubmit)}
              placeholder="******"
              secureTextEntry
              value={value}
              label="Password"
              color={mainTheme.color.secondary}
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
          onPress={handleSubmit(onSubmit)}
          title="Sign Up"
        />
        <ViewContainer
          containerStyle={{
            marginTop: mainTheme.margin.sm,
          }}
        >
          <SocialButton
            socialType={SocialButtonType.google}
            title="Continue with Google"
            onPress={() => submitSignUpWithGoogle()}
          />
        </ViewContainer>
        <ViewContainer
          containerStyle={{
            marginTop: mainTheme.margin.sm,
          }}
        >
          <SocialButton
            socialType={SocialButtonType.facebook}
            title="Continue with Facebook"
            onPress={() => submitSignUpWithFacebook()}
          />
        </ViewContainer>

        <ViewContainer
          containerStyle={{
            marginTop: mainTheme.margin.md,
          }}
        >
          <RowContainer>
            <Text value="Already have an account? " />
            <Text
              color={mainTheme.color.primary}
              value="Sign In"
              onPress={() => navigation.navigate(AuthScreens.Login)}
            />
          </RowContainer>
        </ViewContainer>
        </ViewContainer>
      </MainContainer>
      <FooterContainer onPress={() => navigation.navigate(AuthScreens.Login)}>
      
        <StyledTabImageGradient source={require("../../assets/images/tab-gradient-left.png")}>      
          <IconTabContainer>
          <Icon name="store" color={mainTheme.color.white} size={32} iconStyle={{paddingRight: 4, marginTop: -4}} />
          <Text
              color={mainTheme.color.white}
              value="Become a Vendor"
              fontSize={FontSizeList.md}
              fontFamily={FontFamilyList.primary}
          />
          </IconTabContainer> 
          
        </StyledTabImageGradient>

      </FooterContainer>
      </ScrollView>
     
    </StyledRegisterImage>


  );
};

export default RegisterScreen;
