import React from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { API, RouteProps, Routes } from "../../../core/core-module";
import QuestionModel from "../../../core/models/question-model";
import { BaseButton, Spacer } from "../../components/components-module";
import { GlobalStyles, QuestionsStyles } from "../../main-module";
import { SafeAreaView } from "react-native-safe-area-context";

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

    private chooseAnswer(answer: string): void {
        this.state.questions[this.state.currentQuestion].chosenAnswer = answer;
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
                    {this.state.questions[this.state.currentQuestion].category}
                </Text>
                <Spacer fraction={0.1} />
                <Text style={QuestionsStyles.questionText}>
                    {this.state.questions[this.state.currentQuestion].question}
                </Text>
                <Spacer fraction={0.1} />
                {
                    this.state.questions[this.state.currentQuestion].shuffledAnswers.map((answer: string) => {  
                        return <BaseButton key={answer} marginBottom={20} text={answer} onPress={() => this.chooseAnswer(answer)}></BaseButton>
                    })
                }
            </View>
        </SafeAreaView>
    }
}