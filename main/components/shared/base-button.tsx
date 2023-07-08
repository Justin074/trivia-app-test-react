import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../../styles/styles-module";

type BaseButtonProps = {
    onPress: (event: GestureResponderEvent) => void,
    text: String,
    screenWidth?: number,
    height?: number,
    marginBottom?: number,
}

export default class BaseButton extends React.Component<BaseButtonProps> {
    render() {
        return <TouchableOpacity 
            onPress={this.props.onPress} style={{
                backgroundColor: GlobalStyles.button.color,
                borderRadius: 10,
                flexDirection: 'row',
                marginBottom: this.props.marginBottom}}>
            <View style={{
                flex: this.props.screenWidth ?? 0.9,
                height: this.props.height ?? 60,
                alignItems: 'center',
                justifyContent: 'center',}}>
                <Text style={{
                    color: GlobalStyles.main.color,
                    fontSize: 30,
                    textAlign: 'center'}}>
                    {this.props.text}
                </Text>
            </View>
        </TouchableOpacity>
    }
}