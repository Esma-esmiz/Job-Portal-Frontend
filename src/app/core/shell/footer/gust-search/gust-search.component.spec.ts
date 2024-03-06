import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GustSearchComponent } from './gust-search.component';

describe('GustSearchComponent', () => {
  let component: GustSearchComponent;
  let fixture: ComponentFixture<GustSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GustSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GustSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
