import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from '../../models/patient.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'st-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientTableComponent {
  @Input() data: Patient[];

  @Input() isLoading$: Observable<boolean>;

  @Input() actionType: 'add' | 'remove' = 'add';

  @Output() action = new EventEmitter<Patient>();

  displayedColumns = [
    'action',
    'code',
    'fullName',
    'sex',
    'age',
    'birthDate',
  ];
}
