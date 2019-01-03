import { ActivationService } from './../activation.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private activationService: ActivationService) {}

  onSetToInactive(id: number) {
    this.activationService.onSetToInactive(id);
  }
}
