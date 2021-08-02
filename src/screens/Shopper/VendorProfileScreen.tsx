import React, { FC, ReactElement, useContext, useState } from 'react';
import { CenterContainer, RowWrapContainer, RowContainer, ViewContainer, RowAroundContainer, RowBetweenContainer } from '../../components/containers';
import { AuthContext } from '../../context/AuthContext';
import { StyledText } from '../../components/styles/Texts.style';
import { ColorList, FontFamilyList, FontSizeList, HeightList, MarginList, PaddingList, WidthList } from '../../common/themes/Enums';
import { StyledTabImageRight, StyledVendorHeaderImage } from '../../components/styles/Images.style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../../components/texts';
import mainTheme from '../../common/themes/mainTheme';
import { Avatar, Icon, Image, ListItem } from 'react-native-elements';
import Navigation from '../../common/types/NavigationTypes';
import {  ShopperScreens } from '../../common/navigation/ScreenNames';
import { Button } from '../../components/buttons';


type VendorProfileScreenProps = {
  navigation: Navigation;
}

const VendorProfileScreen: FC<VendorProfileScreenProps> = ({ navigation }:VendorProfileScreenProps): ReactElement => {
  const { authData, logout } = useContext(AuthContext);
  const profile = {
    vendor:{
        name: "Anarvin",
        description: "Profile description sem malesuada magna mollis euis mod. Praesent commodo cursus magna", 
        categories: ["Fruits", "Vegetables"],
        photo:  {name: 'tree', color: 'green', type: 'font-awesome'} 
    },
    products:[
      {
          photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg' 
      },
      {
        photo: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
      },
      {
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg' 
      },
      {
        photo: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
      },
      {
        photo: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
      },
      {
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg' 
      },
      {
        photo: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
      },
      {
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg' 
      },
      {
        photo: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
      },
      {
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg' 
      },
      {
        photo: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
      },
      {
        photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg' 
      }
    ] 
  }

  // const profile2 = {
  //   vendor:{
  //       name: "All Natural",
  //       description: "Description", 
  //       categories: ["Fruits"],
  //       photo:   {name: 'pied-piper', color: 'lightgreen', type: 'font-awesome'} 
  //   },
  //   products:[
  //       {
  //           photo: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg' 
  //       },
  //   ] 
  // }

  // const profile3 = {
  //   vendor:{
  //       name: "Fly by day",
  //       description: "Description", 
  //       categories: ["Fruits"],
  //       photo: {name: 'pagelines', color: 'green', type: 'font-awesome'} 
  //   },
  //   products:[
  //       {
  //           photo: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
  //       }
  //   ] 
  // }
  
  const [profileInfo, setProfileInfo] = useState(profile);
  
  return (
    <> 
      <ScrollView>
        <StyledVendorHeaderImage source={require('../../assets/images/header-gradient.png')}>
          <RowBetweenContainer>
              <Icon name="arrow-back" color={mainTheme.color.white} size={32} onPress={() => navigation.goBack()}/>
              <StyledText color={ColorList.white} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.md}>
                Vendor Profile
              </StyledText>
              <Icon name="shopping-cart" color={mainTheme.color.white} size={32} />
          </RowBetweenContainer>
        </StyledVendorHeaderImage>
        <ViewContainer containerStyle={{paddingRight: mainTheme.padding.md, paddingBottom: mainTheme.padding.md, paddingLeft: mainTheme.padding.md}}>
          <ListItem pad={16} containerStyle={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 16, backgroundColor: '#F2F2F2'}}>
            <Avatar
              size="large"
              rounded
              icon={profileInfo.vendor.photo}
              activeOpacity={1}
              avatarStyle={{borderWidth: 1, borderColor: '#e6e6e6'}}
            />
            <ListItem.Content>
              <ListItem.Title style={{paddingBottom: 10}}>
                <StyledText color={ColorList.textGrey} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.lg}>
                  {profileInfo.vendor.name}
                </StyledText>
              </ListItem.Title>
              <ListItem.Subtitle>
                <RowContainer>    
                  {profileInfo.vendor.categories.map((category, index)=> 
                    <ViewContainer containerStyle={{marginRight: MarginList.sm}} key={index}>
                      <Button title={category} onPress={() => console.log('this works!')} width={index === 0 ? WidthList.smallButton : WidthList.mediumButton} height={HeightList.smallButton} backgroundColor={ColorList.backgroundGrey} color={ColorList.textGrey} fontSize={FontSizeList.xxs} />
                    </ViewContainer>
                  )}
                </RowContainer>
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <StyledText color={ColorList.textGrey} fontFamily={FontFamilyList.primary} fontSize={FontSizeList.xs}>
            {profileInfo.vendor.description}
          </StyledText>
          <ViewContainer containerStyle={{paddingTop: PaddingList.lg, paddingBottom: PaddingList.sm}}>
            <RowBetweenContainer>
              <Button title="Photo Album" onPress={() => console.log('this works!')} width={WidthList.mediumButton} backgroundColor={ColorList.backgroundGrey} color={ColorList.textGrey} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.xs} />
              <Button title="About Us" onPress={() => console.log('this works!')} width={WidthList.mediumButton} backgroundColor={ColorList.backgroundGrey} color={ColorList.textGrey} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.xs} />
              <Button title="Call Us" onPress={() => console.log('this works!')} width={WidthList.mediumButton} backgroundColor={ColorList.backgroundGrey} color={ColorList.textGrey} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.xs} />
            </RowBetweenContainer>
          </ViewContainer>
          <Button title="Follow this vendor" onPress={() => console.log('this works!')}/>
        </ViewContainer>
        <ViewContainer>
          <RowWrapContainer>
              {
                profileInfo.products.map((item, index) =>                 
                <Image
                  key={index}
                  source={{ uri: item.photo }}
                  style={{width: 120, height: 120, marginRight: 8, marginBottom: 8 }}
                  />
                )  
              }
          </RowWrapContainer>
        </ViewContainer>  
      </ScrollView>
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

export default VendorProfileScreen;
