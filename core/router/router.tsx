import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from "../enums/routes-enum";
import HomeView from "../../main/views/home/home-view";
import QuestionsView from "../../main/views/questions/questions-view";
import ResultsView from "../../main/views/results/results-view";

const Stack = createNativeStackNavigator();

let routerOptions = {
    headerShown: false,
}

export class Router extends React.Component {
    render() {
        return <NavigationContainer>
        <Stack.Navigator screenOptions={routerOptions} initialRouteName={Routes.Home}>
            <Stack.Screen name={Routes.Home} component={HomeView} />
            <Stack.Screen name={Routes.Questions} component={QuestionsView} />
            <Stack.Screen name={Routes.Results} component={ResultsView} />
        </Stack.Navigator>
      </NavigationContainer>
    }
}