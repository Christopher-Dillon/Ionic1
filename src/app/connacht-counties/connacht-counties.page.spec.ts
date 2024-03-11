import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnachtCountiesPage } from './connacht-counties.page';

describe('ConnachtCountiesPage', () => {
  let component: ConnachtCountiesPage;
  let fixture: ComponentFixture<ConnachtCountiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConnachtCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
