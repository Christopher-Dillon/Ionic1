import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LensterCountiesPage } from './lenster-counties.page';

describe('LensterCountiesPage', () => {
  let component: LensterCountiesPage;
  let fixture: ComponentFixture<LensterCountiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LensterCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
