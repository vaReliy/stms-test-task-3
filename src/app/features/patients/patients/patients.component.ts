import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, combineLatest } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { PatientService } from '../../../services/patient.service';
import { Patient } from '../../../shared/models/patient.model';
import { selectFollowedPatients } from 'app/features/follow-list/follow-list.selectors';
import { Store, select } from '@ngrx/store';
import { FollowListState } from 'app/features/follow-list/follow.list.reducers';
import { AddFollowListPatientAction } from 'app/features/follow-list/follow-list.actions';

@Component({
  selector: 'st-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  patientList$: Observable<Patient[]>;

  followedPatients$: Observable<Patient[]> = this.store$.pipe(select(selectFollowedPatients));

  refresh$ = new Subject();

  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly store$: Store<FollowListState>,
    private readonly patientService: PatientService
    ) {}

  ngOnInit() {
    this.patientList$ = this.refresh$.pipe(
      tap(() => this.isLoading$.next(true)),
      switchMap(() => combineLatest([
        this.patientService.getPatientList(),
        this.followedPatients$
      ])),
      map(([patientList, followedPatients]) => patientList.map(patient => ({
          ...patient,
          followUpPatient: followedPatients.find(fp => fp.code === patient.code)?.followUpPatient
        }))),
      catchError(() => {
        // todo: do error handle
        this.isLoading$.next(false);
        return [];
      }),
      tap(() => this.isLoading$.next(false))
    );
  }

  onRefresh(): void {
    this.refresh$.next({});
  }

  onFollowPatient(patient: Patient): void {
    this.store$.dispatch(new AddFollowListPatientAction({
      patient: {
        ...patient,
        followUpPatient: true
      }
    }));
  }
}
