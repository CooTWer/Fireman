import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CompanyList from './src/CompanyList';
import CompanyDetail from './src/CompanyDetail';

export const SimpleApp = StackNavigator({
    Home: {screen: CompanyList},
    Detail: {screen: CompanyDetail}
});
AppRegistry.registerComponent('FiremanMobile', () => SimpleApp);
