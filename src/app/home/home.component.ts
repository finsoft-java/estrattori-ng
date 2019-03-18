import { Component, OnInit } from '@angular/core';
import { NbpStyle, NbpButtonType, NbpSize } from 'cjlib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  isSelection: Boolean = false;
  default: NbpStyle = NbpStyle.DEFAULT;
  primary: NbpStyle = NbpStyle.PRIMARY;
  secondary: NbpStyle = NbpStyle.SECONDARY;
  checkStyle: NbpStyle = NbpStyle.CHECK;
  profileStyle: NbpStyle = NbpStyle.PROFILE;
  backgroundGreen: NbpStyle = NbpStyle.BACKGROUNDGREEN;
  backgroundGray: NbpStyle = NbpStyle.BACKGROUNDGRAY;
  outline: NbpStyle = NbpStyle.OUTLINE;
  select: NbpButtonType = NbpButtonType.SELECT;
  check: NbpButtonType = NbpButtonType.CHECK;
  profile: NbpButtonType = NbpButtonType.PROFILE;
  lg: NbpSize = NbpSize.LG;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openDemoPage(event:any): void {
    this.router.navigate(['/demo']);
  }
}
