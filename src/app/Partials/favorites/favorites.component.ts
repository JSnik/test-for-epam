import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CardComponent} from '../shared/card/card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  favCards: any = JSON.parse(localStorage.getItem('favorites')!);
}
