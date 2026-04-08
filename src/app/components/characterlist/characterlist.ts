import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CharacterService } from '../../services/character';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './characterlist.html',
  styleUrls: ['./characterlist.scss']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];
  loading = true;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching characters', err);
        this.loading = false;
      }
    });
  }
}