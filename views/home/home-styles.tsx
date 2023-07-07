import { StyleSheet } from "react-native";
import GlobalStyles from "../../styles/global-styles";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.background.color,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});

export default HomeStyles;