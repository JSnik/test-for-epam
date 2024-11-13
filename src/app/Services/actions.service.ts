import { Injectable } from '@angular/core';

@Injectable()
export class ActionsService {

  addToFavorites(photo: string): void {
    let favorites: any = localStorage.getItem('favorites');
    if (favorites) {
      try {
        favorites = JSON.parse(favorites);
        if (!Array.isArray(favorites)) {
          throw new Error('Favorites is not an array');
        }
      } catch (error) {
        favorites = [];
      }
    } else {
      favorites = [];
    }
    favorites.push(photo);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  removeFromFavorites(photo: string): void {
    let favorites: any = localStorage.getItem('favorites');
    if (favorites) {
      try {
        favorites = JSON.parse(favorites);
        if (!Array.isArray(favorites)) {
          throw new Error('Favorites is not an array');
        }
      } catch (error) {
        favorites = [];
      }
    } else {
      favorites = [];
    }

    const photoIndex = favorites.indexOf(photo);
    if (photoIndex > -1) {
      favorites.splice(photoIndex, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
}
