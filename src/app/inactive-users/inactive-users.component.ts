import { Component, Input, } from '@angular/core';
import { ActivationService } from '../activation.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private activationService: ActivationService, public counterService: CounterService) {}

  onSetToActive(id: number) {
    this.activationService.onSetToActive(id);
  }
}
