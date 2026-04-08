import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule, MatFormFieldModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './characterfilter.html',
  styleUrls: ['./characterfilter.scss']
})
export class CharacterfilterComponent {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse = '';
  characters: Character[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  onHouseChange(): void {
    if (!this.selectedHouse) return;
    this.loading = true;
    this.characters = [];
    this.http.get<Character[]>(
      `https://hp-api.onrender.com/api/characters/house/${this.selectedHouse}`
    ).subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching house characters', err);
        this.loading = false;
      }
    });
  }
}