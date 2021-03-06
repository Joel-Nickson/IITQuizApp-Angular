import { Component, Input, OnInit } from '@angular/core';
import { QuestionSet } from '../questions';

@Component({
  selector: 'app-fitb1',
  templateUrl: './fitb1.component.html',
  styleUrls: ['./fitb1.component.scss']
})
export class FITB1Component implements OnInit {

  blanks = '_________'
  question = ""
  @Input() questionSet!: QuestionSet;
  constructor() {
  }

  ngOnInit(): void {
    if (this.questionSet) {
      this.question = this.questionSet.question.split('{}').join(this.blanks);
    }
  }

}
