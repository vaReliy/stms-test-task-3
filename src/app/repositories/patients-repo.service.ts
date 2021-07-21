import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { Patient } from '../shared/models/patient.model'

@Injectable({
  providedIn: 'root',
})
export class PatientsRepo {
  constructor(private readonly http: HttpClient) {
  }

  getList(): Observable<Patient[]> {
    const url = `${environment.apiUrl}/v2/51597ef3`

    return this.http.get<{ patient: Patient[] }>(url).pipe(map(({patient}) => patient))
  }
}
