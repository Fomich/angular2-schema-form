import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-checkbox-widget',
  template: require('./checkbox.widget.html')
})
export class CheckboxWidget extends ControlWidget {}
