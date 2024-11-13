import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [CommonModule, RouterLink],
})
export class CardComponent {
  private router = inject(Router)

  @Input() index: number | string = 0;
  @Input() isFullLink: boolean = false;
  @Input() isDetailPage: boolean = false;

  @Output() addFavorite: EventEmitter<any> = new EventEmitter;

  addToFavorites(photo: string) {
    this.addFavorite.emit(photo);
  }

  navigate() {
    const decoder = encodeURIComponent(this.index);
    this.router.navigate(['/favorite/detail', decoder]);
  }
}
