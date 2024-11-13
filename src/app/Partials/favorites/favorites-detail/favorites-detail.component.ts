import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {CardComponent} from '../../shared/card/card.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionsService} from '../../../Services/actions.service';

@Component({
  selector: 'app-favorites-detail',
  standalone: true,
  imports: [
    CardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ActionsService],
  templateUrl: './favorites-detail.component.html',
  styleUrl: './favorites-detail.component.scss'
})
export class FavoritesDetailComponent implements OnInit {
  private _actionService = inject(ActionsService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)
  public detailPhoto: string = '';

  ngOnInit() {
    const encodedUrl = this.route.snapshot.paramMap.get('id');
    if (encodedUrl) {
      const decodedUrl = decodeURIComponent(encodedUrl);
      this.detailPhoto = decodedUrl;
    }
  }

  removeFromFav(detailPhoto: string) {
    this._actionService.removeFromFavorites(detailPhoto);
    this.router.navigate(['./favorite'])
  }
}
