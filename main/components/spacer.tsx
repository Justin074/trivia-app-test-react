import React from "react";
import { View } from "react-native";

export default class Spacer extends React.Component<{fraction: number}> {
    render() {
        return <View style={{ flex:this.props.fraction }}></View>
    }
}