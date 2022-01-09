import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MainComponent } from '../../main.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(public appMain: MainComponent, public app: AppComponent) { }

  ngOnInit(): void {
  }

}
