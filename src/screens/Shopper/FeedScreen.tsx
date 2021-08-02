import React, { FC, ReactElement, useContext } from 'react';
import { CenterContainer, HeaderContainer, MainContainer, RowContainer, ViewContainer, RowBetweenContainer, RowAroundContainer } from '../../components/containers';
import { AuthContext } from '../../context/AuthContext';
import { StyledText } from '../../components/styles/Texts.style';
import { ColorList, FontFamilyList, FontSizeList } from '../../common/themes/Enums';
import { StyledHeaderImage, StyledProductImage, StyledTabImageRight } from '../../components/styles/Images.style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../../components/texts';
import { IconTabContainer } from '../../components/styles/Containers.style';
import mainTheme from '../../common/themes/mainTheme';
import { Avatar, Icon, ListItem } from 'react-native-elements';
import Navigation from '../../common/types/NavigationTypes';
import {  ShopperScreens } from '../../common/navigation/ScreenNames';
import { Button } from '../../components/buttons';
import { SmallLogo } from '../../components/images';
type FeedScreenProps = {
  navigation: Navigation;
}

const FeedScreen: FC<FeedScreenProps> = ({ navigation }:FeedScreenProps): ReactElement => {
  const { authData, logout } = useContext(AuthContext);
  const products = [
    {
      vendor: {
        id: 1,
        name: 'Anarvin',
        photo: {name: 'tree', color: 'green', type: 'font-awesome'} 
      },
      productName: 'Pineapple',
      productImage: 'https://cdn.pixabay.com/photo/2017/04/11/07/11/pineapple-2220704_960_720.jpg',
      price: '$12.34/per pount',
    },
    {
      vendor: {
        id: 2,
        name: 'All Natural',
        photo: {name: 'pied-piper', color: 'lightgreen', type: 'font-awesome'} 
      },
      productName: 'Apple',
      productImage: 'https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '$12.34/per pount',
    },
    {
      vendor: {
        id: 3,
        name: 'Fly by day',
        photo: {name: 'pagelines', color: 'green', type: 'font-awesome'} 
      },
      productName: 'Oranges',
      productImage: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '$12.34/per pount',
    },
    {
      vendor: {
        id: 4,
        name: '123Farm',
        photo: {name: 'tree', color: 'green', type: 'font-awesome'} 
      },
      productName: 'Vegetables pack',
      productImage: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '$12.34/per pount',
    }
  ];
  return (
    <> 
      <ScrollView> 
        <StyledHeaderImage source={require('../../assets/images/header-gradient.png')}>
          <RowBetweenContainer>
              <SmallLogo
                logoSrc={mainTheme.logo.secondaryLogo}
              />
              <RowBetweenContainer>
                <CenterContainer>
                  <StyledText color={ColorList.white} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.md}>
                    {authData ? 'Samuel' + "'s" : ''}
                  </StyledText>
                  <StyledText color={ColorList.white} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.md}>
                    Market
                  </StyledText>
                </CenterContainer>
                <Avatar
                    size="small"
                    rounded
                    overlayContainerStyle={{backgroundColor: '#30BB73'}}
                    icon={{name: 'check', color: 'white', type: 'font-awesome'}}
                    activeOpacity={1}
                    containerStyle={{width: 24, height: 24, marginLeft: 10}}
                  />
              </RowBetweenContainer>
              <Icon name="shopping-cart" color={mainTheme.color.white} size={32} />
          </RowBetweenContainer>
        </StyledHeaderImage>
        {products.map((item, index) => (
          <ViewContainer key={index} containerStyle={{marginTop: index === 0? mainTheme.margin.none : mainTheme.margin.md, marginBottom: index === products.length - 1? mainTheme.margin.md: mainTheme.margin.none}}>
              <TouchableOpacity onPress= {() => navigation.navigate(ShopperScreens.VendorProfile,{
                idEjemplo: item.vendor.id
              })} >
                <ListItem pad={8} containerStyle={{paddingLeft: 8, paddingRight: 0, paddingTop: 0, paddingBottom: 0, backgroundColor: '#F2F2F2'}}>
                  <Avatar
                    size="small"
                    rounded
                    icon={item.vendor.photo}
                    activeOpacity={0.7}
                    avatarStyle={{borderWidth: 1, borderColor: '#e6e6e6'}}
                  />
                  <ListItem.Content>
                    <StyledText color={ColorList.textGrey} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.md}>
                      {item.vendor.name}
                    </StyledText>
                  </ListItem.Content>
                </ListItem>
              </TouchableOpacity>
              <ViewContainer containerStyle={{paddingTop: mainTheme.padding.md}}>
                <StyledProductImage source={{uri: item.productImage}}>
                  <Avatar
                    size="small"
                    rounded
                    overlayContainerStyle={{backgroundColor: 'white'}}
                    icon={{name: 'leaf', color: 'green', type: 'font-awesome'}}
                    activeOpacity={0.7}
                    containerStyle={{position:'absolute', right: '13%', top: '10%', width: 34, height: 34}}
                  />
                  <Avatar
                    size="small"
                    rounded
                    overlayContainerStyle={{backgroundColor: 'white'}}
                    icon={{name: 'star', color: 'black', type: 'font-awesome'}}
                    activeOpacity={0.7}
                    containerStyle={{position:'absolute', right: '3%', top: '10%', width: 34, height: 34}}
                  />
                  <StyledText  color={ColorList.white} fontFamily={FontFamilyList.primary} fontSize={FontSizeList.lg}>
                      {item.price}
                  </StyledText>
                  <StyledText  color={ColorList.white} fontFamily={FontFamilyList.primaryBold} fontSize={FontSizeList.xl}>
                      {item.productName}
                  </StyledText>
                </StyledProductImage>
              </ViewContainer>
          </ViewContainer>
        ))}    
        {/* <Button onPress={() => logout()} title="Logout" /> */}
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

export default FeedScreen;
