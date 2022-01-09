import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../../main.component';

@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.scss']
})
export class RightpanelComponent implements OnInit {
  checked1 = true;

  checked2 = true;

  checked3 = false;

  checked4 = false;

  checked5 = false;

  checked6 = false;

  checked7 = false;

  checked8 = false;

  constructor(public app: MainComponent) { }

  ngOnInit(): void {
  }

}
