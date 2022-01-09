import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topbarTheme = 'light';

  menuTheme = 'dim';

  layoutMode = 'light';

  menuMode = 'static';

  isRTL = false;

  inputStyle = 'outlined';

  ripple: boolean;

  constructor(private primengConfig: PrimeNGConfig) {
    this.ripple = false;
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
