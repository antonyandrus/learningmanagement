import { TemplateRef } from "@angular/core";
import { ButtonConfig } from "./button-config";

export class DialogConfig {
  header: string;
  visible: boolean;
  modal: boolean;
  width: WidthConfig;

  constructor() {
    this.header = '';
    this.visible = false;
    this.modal = true;
    this.width = new WidthConfig();
  }
}

export class WidthConfig {
  width: string = '400px';
}
