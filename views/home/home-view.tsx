import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HomeStyles from "./home-styles";
import GlobalStyles from "../../styles/global-styles";

const HomeView = () => {
    return (<View style={HomeStyles.container}>
        <Image source={require('../../assets/logo.png')} style={{
            marginLeft: 20,
        }}/>
         <View style={{
            height: 30,
        }}></View>
        <Text style={{
            color: GlobalStyles.main.color,
            fontSize: 25,
            fontFamily: 'RussoOne',
        }}>This is</Text>
        <View style={{
            height: 10,
        }}></View>
        <Text style={{
            color: GlobalStyles.highlights.color,
            fontSize: 35,
            fontFamily: 'RussoOne',
            textAlign: 'center',
        }}>Trivia Challenge</Text>
        <View style={{
            height: 10,
        }}></View>
        <Text style={{
            color: GlobalStyles.main.color,
            fontSize: 18,
            fontFamily: 'RussoOne',
            textAlign: 'center',
        }}>You will receive 10 questions can you answer them all?</Text>
        <View style={{
            height: 50,
        }}></View>
        <TouchableOpacity onPress={() => {}} style={{
            backgroundColor: GlobalStyles.button.color,
            borderRadius: 10,
            flexDirection: 'row'
        }}>
            <View style={{
                flex: 0.9,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: GlobalStyles.main.color,
                    fontFamily: 'RussoOne',
                    fontSize: 30,
                }}>Start</Text>
            </View>
        </TouchableOpacity>
    </View>);
}

export default HomeView;