import { ActivationService } from './activation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ActivationService]
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ActivationService: ActivationService) {
    this.activeUsers = ActivationService.activeUsers;
    this.inactiveUsers = ActivationService.inactiveUsers;
  }


}
