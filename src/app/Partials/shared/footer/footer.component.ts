import {AfterViewInit, Component, ElementRef, EventEmitter, inject, OnDestroy, Output} from '@angular/core';
import {ActionsService} from '../../../Services/actions.service';
import {LoadMoreService} from '../../../Services/load-more.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  providers: [ActionsService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit, OnDestroy{
  private _loadMoreService = inject(LoadMoreService)
  private elementRef: ElementRef = inject(ElementRef)

  @Output() visible = new EventEmitter<void>(); // Emit an event when footer becomes visible
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        this._loadMoreService.loadMoreSubject.next(true);
      }
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
