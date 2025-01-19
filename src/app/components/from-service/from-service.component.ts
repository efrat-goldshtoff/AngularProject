import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-from-service',
  standalone: true,
  imports: [JsonPipe,AsyncPipe],
  templateUrl: './from-service.component.html',
  styleUrl: './from-service.component.css'
})
export class FromServiceComponent implements OnInit {
  constructor(public eventService:EventService){}
  ngOnInit(): void {
    this.eventService.getEvents();
  }


}
