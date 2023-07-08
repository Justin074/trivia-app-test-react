import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import QuestionModel from "../../../core/models/question-model";
import { SafeAreaView } from "react-native-safe-area-context";
import API from "../../../core/api/api";
import { Routes } from "../../../core/enums/routes-enum";
import { RouteProps } from "../../../core/interfaces/route-props-interface";
import BaseButton from "../../components/shared/base-button";
import Spacer from "../../components/shared/spacer";
import GlobalStyles from "../../styles/global/global-styles";
import QuestionsStyles from "../../styles/questions/questions-style";

export default class QuestionsView extends React.Component<RouteProps> {
    constructor(props: RouteProps) {
        super(props);
        this.loadQuestions();
    }

    state = {
        pageLoading: true,
        questions: [] as QuestionModel[],
        currentQuestion: 0,
    }

    private loadQuestions(): void {
        API.get('https://the-trivia-api.com/api/questions?limit=10').then(async (res: Response) => {
            let jsonData = await res.json();
            let questions: QuestionModel[] = jsonData.map((data: any) => QuestionModel.fromJson(data));
            this.setState({
                pageLoading: false,
                questions: questions,
            });
        }).catch((_) => {
            this.setState({
                pageLoading: false,
            });
        })
    }

    get currentModel(): QuestionModel {
        return this.state.questions[this.state.currentQuestion];
    }

    private chooseAnswer(answer: string): void {
        this.currentModel.chosenAnswer = answer;
        if (this.state.currentQuestion + 1 == this.state.questions.length) {
            this.props.navigation.navigate(Routes.Results, { questions: this.state.questions });
            return;
        };
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
        });
    }


    render() {
        if (this.state.pageLoading) return <View style={QuestionsStyles.containerLoader}>
            <ActivityIndicator size={'large'} color={GlobalStyles.highlights.color}></ActivityIndicator>
        </View>

        return <SafeAreaView style={QuestionsStyles.container}>
            <Text style={QuestionsStyles.topText}>
                Question: {this.state.currentQuestion + 1}/{this.state.questions.length}
            </Text>
            <View style={QuestionsStyles.contentHousing}>
                <Text style={QuestionsStyles.categoryText}>
                    {this.currentModel.category}
                </Text>
                <Spacer fraction={0.1} />
                <Text style={QuestionsStyles.questionText}>
                    {this.currentModel.question}
                </Text>
                <Spacer fraction={0.1} />
                {
                    this.currentModel.shuffledAnswers.map((answer: string) => {
                        return <BaseButton
                            key={answer}
                            smallText={true}
                            marginBottom={20}
                            text={answer}
                            onPress={() => this.chooseAnswer(answer)}></BaseButton>
                    })
                }
            </View>
        </SafeAreaView>
    }
}