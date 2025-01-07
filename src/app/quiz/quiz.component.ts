import {Component, Input, OnInit} from '@angular/core';
import Question from '../models/question';
import test_quiz from '../assets/test_quiz';
import {QuestionComponent} from '../question/question.component';
import Quiz from '../models/quiz';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';


@Component({
  selector: 'app-quiz',
  imports: [
    QuestionComponent
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  @Input({required: true})
  public quiz: Quiz = test_quiz;

  ngOnInit() {

  }
}
