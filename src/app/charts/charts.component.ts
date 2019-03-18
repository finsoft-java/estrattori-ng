import { Component, OnInit, Input } from '@angular/core';
import { ispProgress } from './ispProgress';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.less'],
  providers: [ispProgress]
})
export class ChartsComponent implements OnInit {

  @Input() data;
  @Input() enable;

  constructor(private progress: ispProgress) {}

  ngOnInit() {

    console.log(this.enable)

    switch (this.data.type) {

      case 'progress':
        this.progress.creaGrafico(this);
        break;

      default:
        break;
    }
  }

}
