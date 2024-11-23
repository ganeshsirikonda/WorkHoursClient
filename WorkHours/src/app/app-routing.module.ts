import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggingComponent } from './logging/logging.component';


const routes: Routes = [
  { path: '', redirectTo: '/logging', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'logging', component: LoggingComponent }
];

  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
