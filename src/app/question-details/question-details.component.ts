import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {
  questionDetails: any; // List of questions from selected card
  getParamName: any; // param from selected group card
  questionIndex: number = 0;
  points: number = 0;

  constructor(private questionData: QuestionsService, private activatedRoute: ActivatedRoute, private route: Router, private toast: ToastrService, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {

    this.getParamName = this.activatedRoute.snapshot.paramMap.get('group_name');

    this.questionData.getByGroupName(this.getParamName).subscribe((res) => {
      this.questionDetails = res;
      console.log(this.questionDetails)
    });
    this.cdr.detectChanges();
  }

  onNext(){
    if (this.questionDetails.content[this.questionIndex].key.crt0) {
      this.points = this.points + 5;
      this.toast.success(this.questionDetails.content[this.questionIndex].key.crt1);
      
      setTimeout(() => {
        this.questionIndex ++}, 3000
      );
      
    }
    
    if (this.questionDetails.content[this.questionIndex].last === 'true') {
      setTimeout(() => {
        this.route.navigateByUrl('/Question')
      }, 3000)
    }
  }

  onNext1(){
     if (this.questionDetails.content[this.questionIndex].key.wrg0) {
      this.points = this.points - 5;
      this.toast.error(this.questionDetails.content[this.questionIndex].key.wrg1);
      setTimeout(() => {
        this.questionIndex ++}, 3000
      );
    }
    
    if (this.questionDetails.content[this.questionIndex].last === 'true') {
      setTimeout(() => {
        this.route.navigateByUrl('/Question')
      }, 3000)
    }
  }

}
