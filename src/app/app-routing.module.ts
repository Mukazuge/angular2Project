import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MockComponent } from './mock_page/mock.component';

const appRoutes: Routes = <Routes>[
  {
    component: HomeComponent,
    path: '',
    pathMatch: 'full',
  },
  {
    path: 'mock',
    component: MockComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
