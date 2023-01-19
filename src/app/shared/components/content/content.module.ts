import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [ContentComponent],
  exports: [ContentComponent],
  imports: [CommonModule, NavbarModule],
})
export class ContentModule {}
