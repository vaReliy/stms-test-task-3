import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { PatientsRepo } from '../repositories/patients-repo.service'
import { Patient } from '../shared/models/patient.model'
import { AbstractFollowedService } from './abstract-followed.service'

@Injectable({
  providedIn: 'root'
})
export class PatientService extends AbstractFollowedService<Patient> {
  constructor(private readonly patientsRepo: PatientsRepo) {
    super()
  }

  getPatientList(): Observable<Patient[]> {
    return this.patientsRepo.getList()
  }

  addFollowedItem(patient: Patient): void {
    patient.followUpPatient = true
    this.followedList.set(patient.code, patient)
  }

  removeFollowedItem(patient: Patient): void {
    if (this.followedList.has(patient.code)) {
      this.followedList.delete(patient.code)
      patient.followUpPatient = false
    }
  }
}
