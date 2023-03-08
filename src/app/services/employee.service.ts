import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iemployee } from '../interfaces/iemployee';
//import 'rxjs/add/operator/map'; 
//import 'rxjs/add/operator/mapTo'; 
import { PusherService } from './pusher.service';
import { map, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _endPoint = 'http://localhost:2000/employee'
  private _channel: any;

  constructor(private _http: HttpClient, private _pusherService: PusherService) { 
    this._channel = this._pusherService.getPusher().subscribe('employee');
  }

  /**
     * @return employee's channel for the different event available under employee
     */
  getChannel () {
    return this._channel;
  }
  
  list (): Observable<Iemployee[]> {
    return this._http.get(this._endPoint)
    .pipe(map(res => <Iemployee[]> res));
  }
  
  /**
   * Create new employee
   * @param param
   * @return Observable<IEmployee> with the id
   */
  create(param: Iemployee): Observable<Iemployee> {
    return this._http.post(this._endPoint, param)
    .pipe(map(res => <Iemployee> res));
  }
  
  /**
   * Remove an employee
   * @param employee to remove
   * @return Observable<IEmployee> the employee just removed
   */
  delete(employee: Iemployee): Observable<Iemployee> {
    return this._http.delete(`${this._endPoint}/${employee.id}`)
    .pipe(mapTo(employee));
  }
}
