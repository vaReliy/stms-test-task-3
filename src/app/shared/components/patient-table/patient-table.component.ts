import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'st-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientTableComponent implements OnInit {
  @Input() data: Patient[];

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

  constructor() { }

  ngOnInit(): void {
  }

}
