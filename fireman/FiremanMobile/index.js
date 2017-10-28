import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CompanyList from './src/CompanyList';
import CarouselSnap from './src/Components/CarouselComponent/CarouselSnap';
import CompanyDetail from './src/CompanyDetail';

export const SimpleApp = StackNavigator({
    Home: {screen: CompanyList},
    Detail: {screen: CarouselSnap},
    CompanyDetail: {screen: CompanyDetail}
});
AppRegistry.registerComponent('FiremanMobile', () => SimpleApp);
