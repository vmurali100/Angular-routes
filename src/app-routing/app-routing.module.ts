import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from '../app/components/home/home.component';
import { AboutComponent} from '../app/components/about/about.component';
import { BlogComponent} from '../app/components/blog/blog.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component : AboutComponent},
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
