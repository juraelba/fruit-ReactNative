import React, {
  FC,
  useContext,
  ReactElement,
} from 'react';
import Snackbar from 'react-native-snackbar';

import { useForm, Controller } from 'react-hook-form';
import firestore from '@react-native-firebase/firestore';

import * as AuthRepo from '../../resources/repositories/AuthRepo';
import FirestoreErrorHandler from '../../utils/helpers/FirestoreErrorHandler';

import { AuthContext } from '../../context/AuthContext';
import Shopper from '../../common/models/Shopper';

import { CenterContainer, MainContainer, ViewContainer } from '../../components/containers';
import { Subtitle, Title, Text } from '../../components/texts';
import { Button } from '../../components/buttons';
import { InputText } from '../../components/inputs';
import mainTheme from '../../common/themes/mainTheme';

type ShopperRegisterForm = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  zipCode: string;
  last4: string;
};

const ShopperRegisterScreen: FC = (): ReactElement => {
  const {
    logout, authData, setShopper,
  } = useContext(AuthContext);
  const { control, handleSubmit, errors } = useForm<ShopperRegisterForm>();

  const onSubmit = async (data: ShopperRegisterForm) => {
    try {
      if (authData) {
        const requestData: Shopper = {
          createdAt: firestore.FieldValue.serverTimestamp(),
          updatedAt: null,
          deviceToken: null,
          email: (authData.email) ? authData.email : data.email,
          fullName: {
            firstName: data.firstName,
            lastName: data.lastName,
          },
          phone: {
            prefix: '+1',
            number: data.phone,
          },
          pictureSrc: null,
          uid: authData.uid,
          zipCode: {
            code: data.zipCode,
            last4: data.last4,
          },
        };

        const shopperData = await AuthRepo.setShopper(authData?.uid, requestData);
        await AuthRepo.updateUser(authData?.uid, {
          isShopper: true,
        });
        setShopper?.(shopperData.data());
      }
    } catch (e) {
      Snackbar.show({
        text: FirestoreErrorHandler(e),
      });
    }
  };

  return (
    <MainContainer>
      <ViewContainer>
        <Title value="Welcome to GoFresh" />
        <Subtitle value="To finish registering, enter the following fields" />
      </ViewContainer>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <InputText
            errorMessage={errors.firstName && 'This is required'}
            value={value}
            onChangeText={(text: string) => onChange(text)}
            onBlur={onBlur}
            placeholder="First name"
            secureTextEntry={false}
            color={mainTheme.color.secondary}
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <InputText
            errorMessage={errors.lastName && 'This is required'}
            value={value}
            onChangeText={(text: string) => onChange(text)}
            onBlur={onBlur}
            placeholder="Last name"
            secureTextEntry={false}
          />
        )}
        name="lastName"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <InputText
            errorMessage={errors.phone && 'This is required'}
            value={value}
            onChangeText={(text: string) => onChange(text)}
            onBlur={onBlur}
            placeholder="Phone"
            secureTextEntry={false}
            color={mainTheme.color.secondary}
          />
        )}
        name="phone"
        rules={{ required: true }}
        defaultValue=""
      />
      { !authData?.email
      && (
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <InputText
            errorMessage={errors.email && 'This is required'}
            value={value}
            onChangeText={(text: string) => onChange(text)}
            onBlur={onBlur}
            placeholder="Email"
            secureTextEntry={false}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      )}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <InputText
            errorMessage={errors.zipCode && 'This is required'}
            onBlur={onBlur}
            onChangeText={(text: string) => onChange(text)}
            onSubmitEditing={handleSubmit(onSubmit)}
            placeholder="Zip Code"
            secureTextEntry={false}
            value={value}
          />
        )}
        name="zipCode"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <InputText
            errorMessage={errors.last4 && 'This is required'}
            onBlur={onBlur}
            onChangeText={(text: string) => onChange(text)}
            onSubmitEditing={handleSubmit(onSubmit)}
            placeholder="Last 4"
            secureTextEntry={false}
            value={value}
          />
        )}
        name="last4"
        rules={{ required: true }}
        defaultValue=""
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        title="Continue"
      />
      <ViewContainer
        containerStyle={{
          marginTop: mainTheme.margin.xxl,
        }}
      >
        <CenterContainer>
          <Text
            onPress={() => logout()}
            value="Continue later"
          />
        </CenterContainer>
      </ViewContainer>
    </MainContainer>
  );
};

export default ShopperRegisterScreen;
