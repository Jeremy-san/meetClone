import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArticleComponent } from './article/article.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'article', component: ArticleComponent
  },
  {
    path: 'shop', component: MarketplaceComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
