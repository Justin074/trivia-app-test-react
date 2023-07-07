import React from "react";
import { Button, Text, View } from "react-native";
import { RouteProps } from "../../../core/core-module";

export default class QuestionsView extends React.Component<RouteProps> {
    render() {
        return <View style={
            { flex: 1, alignItems: 'center', justifyContent: 'center', }
        }>
            <Text>Questions Page</Text>
            <Button title="BACK" onPress={() => {
                this.props.navigation.pop();
            }}></Button>
        </View>
    }
}