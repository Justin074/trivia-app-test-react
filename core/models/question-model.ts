export default class QuestionModel {
    constructor(
        category: string,
        question: string,
        incorrectAnswers: string[],
        correctAnswer: string,
    ) {
        this.category = category;
        this.question = question;
        this.incorrectAnswers = incorrectAnswers;
        this.correctAnswer = correctAnswer;
    }

    category: string;
    question: string;
    incorrectAnswers: string[];
    correctAnswer: string;
    chosenAnswer?: string;

    static fromJson(data: any): QuestionModel {
        return new QuestionModel(
            data.category,
            data.question,
            data.incorrectAnswers,
            data.correctAnswer
        );
    }

    get answeredCorrectly(): Boolean {
        return this.chosenAnswer?.toLowerCase() === this.correctAnswer.toLowerCase();
    } 

    get shuffledAnswers(): string[] {
        return [...this.incorrectAnswers, this.correctAnswer].sort(() => Math.random() - 0.5);
    }
}
