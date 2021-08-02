import React, { FC, ReactElement, useContext, useState } from 'react';
import { CenterContainer, SearchMainContainer, ViewContainer, RowWrapContainer, RowBetweenContainer, RowAroundContainer } from '../../components/containers';
import { AuthContext } from '../../context/AuthContext';
import { StyledText } from '../../components/styles/Texts.style';
import { ColorList, FontFamilyList, FontSizeList } from '../../common/themes/Enums';
import { StyledTabImageRight, StyledVendorHeaderImage } from '../../components/styles/Images.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../../components/texts';
import mainTheme from '../../common/themes/mainTheme';
import {Icon, Image } from 'react-native-elements';
import Navigation from '../../common/types/NavigationTypes';
import {  ShopperScreens } from '../../common/navigation/ScreenNames';
import { Controller, useForm } from 'react-hook-form';
import { InputText } from '../../components/inputs';
import { Button } from '../../components/buttons';
import { SmallLogo } from '../../components/images';
type SearchScreenProps = {
  navigation: Navigation;
}

type SearchForm = {
  vendorOrProduct: string;
};

const SearchScreen: FC<SearchScreenProps> = ({ navigation }:SearchScreenProps): ReactElement => {
  const { control, handleSubmit, errors } = useForm<SearchForm>();
  const { authData, logout } = useContext(AuthContext);
  const [selected, setSelected] = useState(true); 
  
  const [categories, setCategories] = useState(
    [
      {
        categoryName: 'Fruits',
        isChecked: true,
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg'
      },
      {
        categoryName: 'Vegetables',
        isChecked: false,
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg'
      },
      {
        categoryName: 'Juice',
        isChecked: false,
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg'
      },
      {
        categoryName: 'Fruits',
        isChecked: true,
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg'
      },
      {
        categoryName: 'Vegetables',
        isChecked: false,
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg'
      },
      {
        categoryName: 'Juice',
        isChecked: true,
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg'
      }
    ]
  );
  
  return (
    <> 
      <StyledVendorHeaderImage source={require('../../assets/images/header-gradient.png')}>
        <RowBetweenContainer>
            <SmallLogo
              logoSrc={mainTheme.logo.secondaryLogo}
            />
            <StyledText color={ColorList.white} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.md}>
              Search
            </StyledText>
            <Icon name="shopping-cart" color={mainTheme.color.white} size={32} />
        </RowBetweenContainer>
      </StyledVendorHeaderImage> 
      <SearchMainContainer>
        <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <InputText
                errorMessage={errors.vendorOrProduct && 'This is required'}
                value={value}
                onChangeText={(text: string) => onChange(text)}
                onBlur={onBlur}
                leftIcon={{ name: 'search', color: ColorList.backgroundGrey}}
                leftIconContainerStyle={{ paddingRight: 12, paddingBottom: 8 }}
                inputContainerStyle={{ borderBottomWidth: 0.5, borderBottomColor: '#D3DFEF' }}
                placeholder="Search by vendor or product name"
                secureTextEntry={false}
                color={mainTheme.color.secondary}
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
        <ViewContainer 
          containerStyle={{
            marginTop: mainTheme.margin.sm,
        }}>
          <CenterContainer>
            <Text value="Or explore by category" fontFamily={mainTheme.font.family.primaryBold} fontSize={mainTheme.font.size.md}/>
          </CenterContainer>
          <ViewContainer containerStyle={{paddingTop: mainTheme.padding.md, paddingBottom: mainTheme.padding.md}}>
              <RowWrapContainer>
                {
                  categories.map((item, index) =>                 
                    <Image
                      key={index}
                      source={{ uri: item.photo }}
                      style={{width: 165, height: 100, marginRight: 8, marginBottom: 8, paddingLeft: 10, paddingTop: '42%' }}
                      onPress={()=> {categories[index].isChecked = !item.isChecked; setCategories([...categories])   }}
                      >
                        <Icon name={categories[index].isChecked? 'heart' : 'heart-o'} type='font-awesome' color={mainTheme.color.white} size={20} containerStyle={{ position: 'absolute', right: 10, top: 10 }}/>
                        <StyledText style={{ textShadowOffset: { width: 1, height: 4 }, textShadowRadius: 0, textShadowColor: 'rgba(0,0,0,0.6)'}} color={ColorList.white} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.sm}>
                          {item.categoryName}
                      </StyledText>
                    </Image>
                  )  
                }
              </RowWrapContainer>
            </ViewContainer>
        </ViewContainer>
        <ViewContainer
          containerStyle={{
            marginTop: mainTheme.margin.sm,
            marginBottom: mainTheme.margin.lg
          }}
        >
          <Button
            title="Explore Categories"
          />
        </ViewContainer>
      </SearchMainContainer>
      <StyledTabImageRight source={require('../../assets/images/tab-gradient-right.png')}>
        <RowAroundContainer>
          <CenterContainer>
            <TouchableOpacity onPress={() => navigation.navigate(ShopperScreens.Search)}>
              <Icon name="search" color={mainTheme.color.white} size={32} iconStyle={{paddingRight: 4, marginTop: -4}} />
              <Text
                  color={mainTheme.color.white}
                  value="Search"
                  fontSize={FontSizeList.xxs}
                  fontFamily={FontFamilyList.primary}
              />
            </TouchableOpacity>
          </CenterContainer>
          <CenterContainer>
            <Icon name="storefront" color={mainTheme.color.white} size={32} iconStyle={{paddingRight: 4, marginTop: -4}} />
            <Text
                color={mainTheme.color.white}
                value="Marketplace"
                fontSize={FontSizeList.xxs}
                fontFamily={FontFamilyList.primary}
            />
          </CenterContainer>
        </RowAroundContainer>
      </StyledTabImageRight>
    </>
  );
};

export default SearchScreen;
