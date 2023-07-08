import { StyleSheet } from "react-native";
import GlobalStyles from "../global/global-styles";

const ResultsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.background.color,
        padding: 20,
    },
    topContainer: {
        flex: 0.1, 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'row',
    },
    topBorderContainer: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: GlobalStyles.highlights.color,
        borderWidth: 0.5,
        height: 45,
        borderRadius: 5,
    },
    middleContainer: {
        flex: 0.8, 
        justifyContent: 'center',
    },
    bottomContainer: {
        flex: 0.1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    resultsText: {
        fontSize: 22, 
        fontFamily: 'RussoOne',
        color: GlobalStyles.highlights.color,
    },
    correctText: {
        color: GlobalStyles.highlights.color, 
        fontSize: 20, 
        fontFamily: 'RussoOne',
        paddingLeft: 20, 
        paddingBottom: 15,
    },
    incorrectText: {
        color: GlobalStyles.main.color, 
        fontSize: 20, 
        fontFamily: 'RussoOne',
        paddingLeft: 20, 
        paddingBottom: 15,
    },
});

export default ResultsStyles;