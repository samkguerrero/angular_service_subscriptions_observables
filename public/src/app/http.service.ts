import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
    this.getTask('0');
  }
  getTasks(){
      return this._http.get('/api/tasks');
  }
  getTask(id: String){
      return this._http.get(`/api/tasks/${id}`);
  }
  addTask(newTask: any){
    return this._http.post(`/api/tasks`, newTask)
  }
  deleteTask(id: String){
    return this._http.delete(`/api/tasks/${id}`)
  }
  updateTask(id: String, newTaskEdit: any){
    return this._http.put(`/api/tasks/${id}`, newTaskEdit)
  }
}
