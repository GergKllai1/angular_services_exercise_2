import { ActivationService } from './activation.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  changedToActive = 0;
  changedToInactive = 0;

  constructor() { }


}
