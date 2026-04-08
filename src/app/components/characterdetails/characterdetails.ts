import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './characterdetails.html',
  styleUrls: ['./characterdetails.scss']
})
export class CharacterdetailsComponent implements OnInit {
  character: Character | null = null;
  loading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<Character[]>(`https://hp-api.onrender.com/api/character/${id}`)
      .subscribe({
        next: (data) => {
          this.character = data[0];
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching character details', err);
          this.loading = false;
        }
      });
  }
}