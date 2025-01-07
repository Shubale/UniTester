import {Component, Input} from '@angular/core';
import Question from '../models/question';
import test_quiz from '../assets/test_quiz';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-question',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input({required: true})
  public question!: Question;
}
