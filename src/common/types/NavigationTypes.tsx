import { StackNavigationProp } from '@react-navigation/stack';

type Navigation = {
  navigation: StackNavigationProp<any, any>;
  route: any;
  navigate: any;
  goBack(): void;
};

export default Navigation;
