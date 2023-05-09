import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientsRepo } from '../repositories/patients-repo.service';
import { Patient } from '../shared/models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private readonly patientsRepo: PatientsRepo) {}

  getPatientList(): Observable<Patient[]> {
    return this.patientsRepo.getList();
  }
}
