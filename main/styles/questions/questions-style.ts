import { StyleSheet } from "react-native";
import GlobalStyles from "../global/global-styles";

const QuestionsStyles = StyleSheet.create({
    containerLoader: {
        flex: 1,
        backgroundColor: GlobalStyles.background.color,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.background.color,
        padding: 20,
    },
    topText: {
        color: GlobalStyles.main.color,
        fontFamily: 'RussoOne',
        fontSize: 18,
    },
    categoryText: {
        color: GlobalStyles.highlights.color,
        fontSize: 35,
        fontFamily: 'RussoOne',
        textAlign: 'center',
    },
    questionText: {
        color: GlobalStyles.main.color,
        fontSize: 18,
        fontFamily: 'RussoOne',
        textAlign: 'center',
    },
    contentHousing: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default QuestionsStyles;