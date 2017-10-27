import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MockComponent} from './mock_page/mock.component';

const appRoutes: Routes = <Routes>[
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Page one' }
  },
  {
    path: 'mock',
    component: MockComponent,
    data: { title: 'Mock' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
