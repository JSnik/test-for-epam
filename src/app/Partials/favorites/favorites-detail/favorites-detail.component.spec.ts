import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesDetailComponent } from './favorites-detail.component';

describe('FavoritesDetailComponent', () => {
  let component: FavoritesDetailComponent;
  let fixture: ComponentFixture<FavoritesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
