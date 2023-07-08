import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import { RouteProps, Routes } from "../../../core/core-module";
import QuestionModel from "../../../core/models/question-model";
import { BaseButton } from "../../components/components-module";
import { ResultsStyles } from "../../main-module";

interface ResultsProps{
    questions: QuestionModel[],
}

export default class ResultsView extends React.Component<RouteProps> {
    constructor(props: RouteProps) {
        super(props);
        this.pageParams = props.route.params;
        this.corectAnswers = this.pageParams.questions.filter((question: QuestionModel) => question.answeredCorrectly).length;
    }
    pageParams: ResultsProps;
    corectAnswers: number;
    questionsCounter = 0;

    render() {
        return <SafeAreaView style={ResultsStyles.container}>
            <View style={ResultsStyles.topContainer}>
                <View style={ResultsStyles.topBorderContainer}>
                    <Text style={ResultsStyles.resultsText}>
                        Results: {this.corectAnswers} / {this.pageParams.questions.length}
                    </Text>
                </View>
            </View>
            <View style={ResultsStyles.middleContainer}>
                {
                    this.pageParams.questions.map((question: QuestionModel) => {
                        this.questionsCounter += 1;
                        return <Text key={question.chosenAnswer} style={question.answeredCorrectly ? ResultsStyles.correctText : ResultsStyles.incorrectText}>
                            {this.questionsCounter} - {question.chosenAnswer}
                        </Text>
                    })
                }
            </View>
            <View style={ResultsStyles.bottomContainer}>
                <BaseButton text="Play Again" onPress={() => {
                    this.props.navigation.navigate(Routes.Home);
                }}></BaseButton>
            </View>
        </SafeAreaView>
    }
}