import React from "react";
import { Image, Text, View } from "react-native";
import Spacer from "../../components/shared/spacer";
import BaseButton from "../../components/shared/base-button";
import { Routes } from "../../../core/enums/routes-enum";
import { RouteProps } from "../../../core/interfaces/route-props-interface";
import HomeStyles from "../../styles/home/home-styles";

class HomeView extends React.Component<RouteProps> {
    private buttonNavigation(): void {
        this.props.navigation.navigate(Routes.Questions);
    }

    render() {
        return <View style={HomeStyles.container}>
            <Image source={require('../../../assets/logo.png')} style={HomeStyles.logo} />
            <Spacer fraction={0.1} />
            <Text style={HomeStyles.thisText}>
                This is
            </Text>
            <Spacer fraction={0.03} />
            <Text style={HomeStyles.triviaText}>
                Trivia Challenge
            </Text>
            <Spacer fraction={0.03} />
            <Text style={HomeStyles.questionsText}>
                You will receive 10 questions can you answer them all?
            </Text>
            <Spacer fraction={0.1} />
            <BaseButton onPress={() => this.buttonNavigation()} text={'Start'} />
        </View>
    }
}

export default HomeView;