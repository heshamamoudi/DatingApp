import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownConfig, BsDropdownModule } from 'ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
declarations: [],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    // BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-center'
    }),

  ],
  exports: [
    // NgModule,
    // BsDropdownModule,
    // BrowserAnimationsModule,
     ToastrModule,
    //  BsDropdownConfig
    ],
    providers:[{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class SharedModule {}
