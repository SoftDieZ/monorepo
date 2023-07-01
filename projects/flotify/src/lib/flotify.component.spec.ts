import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotifyComponent } from './flotify.component';

describe('FlotifyComponent', () => {
  let component: FlotifyComponent;
  let fixture: ComponentFixture<FlotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlotifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
