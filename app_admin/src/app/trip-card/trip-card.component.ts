import { Component, OnInit, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { EventEmitter } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-trip-card',
  standalone: true,
  styleUrl: './trip-card.component.css',
  templateUrl: './trip-card.component.html',
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;
  @Output() tripDeleted = new EventEmitter<string>();
  constructor(private router: Router) {}
  ngOnInit(): void {
    
  }
  public editTrip(trip: Trip){
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  onDelete(): void {
    if (confirm(`Are you sure you want to delete ${this.trip.name}?`)) {
      this.tripDeleted.emit(this.trip.code);
    }
  }

}
