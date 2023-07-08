import React from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { API, RouteProps } from "../../../core/core-module";
import QuestionModel from "../../../core/models/question-model";

export default class QuestionsView extends React.Component<RouteProps> {
    constructor(props: RouteProps) {
        super(props);
        this.loadQuestions();
    }

    state = {
        pageLoading: true,
        questions: [] as QuestionModel[],
        currentQuestion: 0,
        new: ''
    }

    private loadQuestions(): void {
        API.get('https://the-trivia-api.com/api/questions?limit=10').then(async (res: Response) => {
            let jsonData = await res.json();
            let questions: QuestionModel[] = jsonData.map((data: any) => QuestionModel.fromJson(data));
            this.setState({
                pageLoading: false,
                questions: questions,
                currentQuestion: 0,
            });
        }).catch((_) => {
            this.setState({
                pageLoading: false,
                questions: [],
                currentQuestion: 0,
            });
        })
    }

    private chooseAnswer(answer: string): void {
        this.state.questions[this.state.currentQuestion].chosenAnswer = answer;
        if (this.state.currentQuestion + 1 == this.state.questions.length) {
            this.setState({
                new: this.state.questions.map((q) => q.chosenAnswer),
            });
            return;
        };
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
        });
    }

    render() {
        if (this.state.pageLoading) return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>

        return <View style={
            { flex: 1, alignItems: 'center', justifyContent: 'center', }
        }>
            <Text>Question: {this.state.currentQuestion + 1}/{this.state.questions.length}</Text>
            <Text>{this.state.questions[this.state.currentQuestion].category}</Text>
            <Text>{this.state.questions[this.state.currentQuestion].question}</Text>
            <Text>{this.state.new}</Text>

            {
                this.state.questions[this.state.currentQuestion].shuffledAnswers.map((answer: string) => <Button title={answer} onPress={() => this.chooseAnswer(answer)}></Button>)
            }

            <Button title="BACK" onPress={() => {
                this.props.navigation.pop();
            }}></Button>
        </View>
    }
}