import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { PatientService } from '../../../services/patient.service';
import { Order } from '../../../shared/models/order.model';
import { Patient } from '../../../shared/models/patient.model';

@Component({
  selector: 'st-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  patientList$: Observable<Order[]>;

  refresh$ = new Subject();

  constructor(private readonly patientService: PatientService) {}

  ngOnInit() {
    this.patientList$ = this.refresh$.pipe(
      switchMap(() => this.patientService.getPatientList())
    );
  }

  onRefresh(): void {
    this.refresh$.next({});
  }

  onFollowPatient(patient: Patient): void {
    this.patientService.addFollowedItem(patient);
  }
}
