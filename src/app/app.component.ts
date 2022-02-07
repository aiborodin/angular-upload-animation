import {Component, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {NgbProgressbar} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('uploadStart', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s ease-out', style({opacity: 1}))
      ]),
      transition(':leave', animate('2s ease-out', style({opacity: 0})))
    ])
  ]
})
export class AppComponent {
  @ViewChild('uploadProgress')
  progressBar !: NgbProgressbar;

  progress: number = 0;
  completionLabel: string = '';

  constructor() {
  }

  imitateFileUpload($event: any) {
    this.progress += 4
    setTimeout(() => {
      this.progress += 12
      setTimeout(() => {
          this.progress += 44
          setTimeout(() => {
            this.progress += 40;
            this.finishUpload()
          }, 1000)
        }
        , 1000)
    }, 1500)
  }

  finishUpload() {
    this.progressBar.animated = false;
    this.progressBar.striped = false;
    this.progressBar.showValue = false;
    this.completionLabel = 'Completed!';
    setTimeout(() => this.progress = 0, 300);
  }
}
