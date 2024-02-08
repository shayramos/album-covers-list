import { Directive, HostListener, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { FullscreenOverlayContainer, Overlay, OverlayConfig, OverlayContainer } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appModalTrigger]',
  providers: [ {provide: OverlayContainer, useClass: FullscreenOverlayContainer} ],
  standalone: true
})
export class ModalTriggerDirective implements OnDestroy {
  
  @Input('appModalTrigger') template!: TemplateRef<any>;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  @HostListener('click', ['$event'])
  clickEvent() {
    if (this.template) {
      this.openModalWithTemplate(this.template);
    }
  }

  openModalWithTemplate(template: TemplateRef<any>) {
    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'modal-background'
    });

    const overlayRef = this.overlay.create(configs);
    
    overlayRef.attach(new TemplatePortal(template, this.viewContainerRef));
    overlayRef.backdropClick().pipe(takeUntil(this.destroy$)).subscribe(() => overlayRef.dispose());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
