import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CompanyList from './src/Components/ScreenComponent/CompanyListComponent/CompanyList';
import CarouselSnap from './src/Components/UtilsComponent/CarouselComponent/CarouselSnap';
import CompanyDetail from './src/Components/ScreenComponent/DetailComponent/CompanyDetail';

export const SimpleApp = StackNavigator({
    Home: {screen: CompanyList},
    Detail: {screen: CarouselSnap},
    CompanyDetail: {screen: CompanyDetail}
});
AppRegistry.registerComponent('FiremanMobile', () => SimpleApp);
