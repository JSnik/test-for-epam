import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../shared/card/card.component";
import {HttpMethodsService} from "../../Services/http-methods.service";
import {CommonModule} from '@angular/common';
import {ActionsService} from '../../Services/actions.service';
import {LoadMoreService} from '../../Services/load-more.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HttpMethodsService, ActionsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{
  private _cdr = inject(ChangeDetectorRef)
  private _HttpMethodCalls = inject(HttpMethodsService);
  private _actionService = inject(ActionsService);
  private _loadMoreService = inject(LoadMoreService);

  private amount: number = 10;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public cards: any[] = [];
  public loading = false;

  ngOnInit(): void {
    // imitation of calling images API
   this.loadMore();
   this.getPhotos();
   this.fillCardsAmount(10);
  }

  loadMore(): void {
    this._loadMoreService.loadMore$.pipe(takeUntil(this.destroy$)).subscribe((next) => {
      this.loading = true;
      this._cdr.markForCheck();
      setTimeout(() => {
        this.loading = false;
        this.fillCardsAmount(this.amount + 10);
        this._cdr.markForCheck();
      }, 400)
    })
  }

  fillCardsAmount(amount: number): void {
    let array = [...Array(amount)].map(() => '.');
    this.cards = [];
    this.cards = [...array];
  }

  getPhotos(): void {
    this._HttpMethodCalls.getPhotos().subscribe((log: any) => console.log(log))
  }

  addFavoriteFunc($event: string) {
    this._actionService.addToFavorites($event);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

