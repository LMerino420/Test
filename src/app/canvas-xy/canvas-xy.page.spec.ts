import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanvasXyPage } from './canvas-xy.page';

describe('CanvasXyPage', () => {
  let component: CanvasXyPage;
  let fixture: ComponentFixture<CanvasXyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasXyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
