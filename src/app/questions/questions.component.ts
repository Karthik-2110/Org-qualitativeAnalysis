import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private Ques: QuestionsService, private route: Router, private cdr: ChangeDetectorRef) { }

  question:any;

  ngOnInit(): void {
    this.Ques.getAllQuestions().subscribe( res => {
      console.log(res)
      this.question = res
    } );
    this.cdr.detectChanges();
  }

  onselectProduct(index: number) {
    this.route.navigate(['/QuestionInfo', index])
  }


}
