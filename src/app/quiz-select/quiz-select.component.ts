import {Component, Input} from '@angular/core';
import {MatCard, MatCardHeader} from '@angular/material/card';
import Quiz from '../models/quiz';

@Component({
  selector: 'app-quiz-select',
  imports: [
    MatCard,
    MatCardHeader
  ],
  templateUrl: './quiz-select.component.html',
  styleUrl: './quiz-select.component.scss'
})
export class QuizSelectComponent {
  @Input({required:true})
  public quiz!: Quiz;
}
