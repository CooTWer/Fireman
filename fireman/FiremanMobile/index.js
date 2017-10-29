import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import CompanyList from './src/Components/ScreenComponent/CompanyListComponent/CompanyList';
import CompanyDetail from './src/Components/ScreenComponent/DetailComponent/CompanyDetail';

export const SimpleApp = StackNavigator({
        Home: {screen: CompanyList},
        Detail: {screen: CompanyDetail},
        CompanyDetail: {screen: CompanyDetail},
    }, {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                height: 30,
                backgroundColor: '#fff'
            },
            headerTitleStyle: {
                height: 30,
                fontSize: 15,
                // backgroundColor: '#000000',
                paddingBottom: 10
            },
            cardStack: {
                gesturesEnabled: true
            }
        },
        mode: 'card',
        headerMode: 'screen'
    }
);

AppRegistry.registerComponent('FiremanMobile', () => SimpleApp);
