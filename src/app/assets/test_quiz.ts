import Question from '../models/question';
import Quiz from '../models/quiz';

let quiz: Quiz;
export default quiz = {
  "id": 1,
  "name": "Test quiz",
  "questions": [
    {
      "question": "What year is this?",
      "answers": ["1920", "2024", "2025", "2120"],
      "correctAnswers": [2]
    }
    ]
}
