import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivationService } from '../activation.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private activationService: ActivationService) {}

  onSetToActive(id: number) {
    this.activationService.onSetToActive(id);
  }
}
