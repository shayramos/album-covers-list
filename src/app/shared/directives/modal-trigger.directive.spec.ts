import { Overlay } from '@angular/cdk/overlay';
import { ModalTriggerDirective } from './modal-trigger.directive';
import { ViewContainerRef } from '@angular/core';

describe('ModalTriggerDirective', () => {
  let overlay: Overlay;
  let viewContainerRef: ViewContainerRef;

  beforeEach(() => {
    overlay = jasmine.createSpyObj('Overlay', ['']);
    viewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['']);
  });

  it('should create an instance', () => {
    const directive = new ModalTriggerDirective(overlay, viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
