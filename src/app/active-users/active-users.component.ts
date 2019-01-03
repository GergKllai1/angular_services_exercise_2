import { ActivationService } from './../activation.service';
import { Component, Input } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private activationService: ActivationService, public counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.activationService.onSetToInactive(id);
  }
}
