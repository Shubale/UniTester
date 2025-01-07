import { Routes } from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';

export const routes: Routes = [
  {path: 'quiz-list', component: QuizListComponent},
  {path: '', redirectTo: '/quiz-list', pathMatch: 'full'},
  {path: 'quiz/:id', component: QuizComponent},
];
