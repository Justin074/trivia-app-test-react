import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

export interface RouteProps extends ParamListBase {
    navigation: NativeStackNavigationProp<any>,
    route: any,
}