import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyEvent } from '../../models/my-event.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = "https://eventsapi.onrender.com/api/Events";
  events$:Observable<MyEvent[]> = new Observable<MyEvent[]>;

  constructor(private http:HttpClient) { }

  getEvents(){
    this.http.get<MyEvent[]>(this.url).subscribe(data=>{
      this.events$ = of(data);
    });
  }
  // addEvent(event:MyEvent){
  //   return this.http.post<MyEvent>(this.url,event);
  // }

}
