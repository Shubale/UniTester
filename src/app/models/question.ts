export default class Question {
  public question: string;
  public answers: string[];
  public correctAnswers: number[];
  constructor(question: string, answers: string[], correctAnswers: number[]) {
    this.question = question;
    this.answers = answers;
    this.correctAnswers = correctAnswers;
  }
}
