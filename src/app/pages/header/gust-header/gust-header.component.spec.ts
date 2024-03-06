import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GustHeaderComponent } from './gust-header.component';

describe('GustHeaderComponent', () => {
  let component: GustHeaderComponent;
  let fixture: ComponentFixture<GustHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GustHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GustHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
