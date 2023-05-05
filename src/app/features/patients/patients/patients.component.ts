import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { PatientService } from '../../../services/patient.service';
import { Patient } from '../../../shared/models/patient.model';

@Component({
  selector: 'st-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  patientList$: Observable<Patient[]>;

  refresh$ = new Subject();

  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly patientService: PatientService) {}

  ngOnInit() {
    this.patientList$ = this.refresh$.pipe(
      tap(() => this.isLoading$.next(true)),
      switchMap(() => this.patientService.getPatientList()),
      catchError(() => {
        // todo: do error handle
        this.isLoading$.next(false);
        return [];
      }),
      map((list: Patient[]) =>
        list.map(patient => this.patientService.applyFollowed(patient))
      ),
      tap(() => this.isLoading$.next(false))
    );
  }

  onRefresh(): void {
    this.refresh$.next({});
  }

  onFollowPatient(patient: Patient): void {
    this.patientService.addFollowedItem(patient);
  }
}
