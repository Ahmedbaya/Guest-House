import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffreComponent } from './listoffre.component';

describe('ListoffreComponent', () => {
  let component: ListoffreComponent;
  let fixture: ComponentFixture<ListoffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListoffreComponent]
    });
    fixture = TestBed.createComponent(ListoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
