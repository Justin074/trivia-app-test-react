import { StyleSheet } from "react-native";
import GlobalStyles from "../global/global-styles";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.background.color,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        marginLeft: 20,
    },
    thisText: {
        color: GlobalStyles.main.color,
        fontSize: 25,
    },
    triviaText: {
        color: GlobalStyles.highlights.color,
        fontSize: 35,
        textAlign: 'center',
    },
    questionsText: {
        color: GlobalStyles.main.color,
        fontSize: 18,
        textAlign: 'center',
    }

});

export default HomeStyles;