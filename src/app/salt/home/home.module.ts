import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ContentModule } from '../../shared/components/content/content.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ContentModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
