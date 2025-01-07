import {Component, inject} from '@angular/core';
import Quiz from '../models/quiz';
import {MatCard, MatCardHeader} from '@angular/material/card';
import {QuizSelectComponent} from '../quiz-select/quiz-select.component';
import test_quiz from '../assets/test_quiz';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  imports: [
    MatCard,
    MatCardHeader,
    QuizSelectComponent
  ],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.scss'
})
export class QuizListComponent {
  public readonly quizzes: Quiz[] = [test_quiz];
  private readonly router = inject(Router);
  constructor() {
    console.log(this.quizzes);
  }
  selectQuiz(quiz: Quiz) {
    console.log(quiz);
    this.router.navigate([`/quiz/${quiz.id}`])
  }
}
