import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { trips } from '../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { Router } from '@angular/router'

@Component({
  imports: [CommonModule, TripCardComponent],
  selector: 'app-trip-listing',
  standalone: true,
  styleUrl: './trip-listing.component.css',
  templateUrl: './trip-listing.component.html',
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {
  trips!: Trip[];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private cdr: ChangeDetectorRef
    ) {
    console.log('trip-listing constructor')
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  public handleDelete (tripCode: string): void {
    this.tripDataService.deleteTrip(tripCode)
    .subscribe({
      next: (updatedTrips: any) => {
        this.trips = updatedTrips;
        this.message = updatedTrips.length > 0
          ? `There are ${updatedTrips.length} trips available.`
          : 'There were no trips retrieved from the database.';

        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Error deleting trip: ' + error);
      }
    })
  }

  private getStuff(): void {
    this.tripDataService.getTrips()
    .subscribe({
      next: (value: any) => {
        this.trips = value;
        if (value.length > 0)
        {
          this.message = 'There are ' + value.length + ' trips available.';
        }
        else {
          this.message = 'There were no trips retrieved from the database.';
        }
        console.log(this.message);
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    });
  }

  ngOnInit(): void {
    console.log('ngOnit');
    this.getStuff();
  }
}
