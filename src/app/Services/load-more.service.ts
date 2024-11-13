import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class LoadMoreService {
  loadMoreSubject = new Subject<boolean>();
  loadMore$: Observable<boolean> = this.loadMoreSubject.asObservable();

}
