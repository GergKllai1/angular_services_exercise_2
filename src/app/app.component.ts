import { ActivationService } from './activation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  activeUsers = this.activationService.activeUsers;
  inactiveUsers = this.activationService.inactiveUsers;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private activationService: ActivationService) {
  }
}
