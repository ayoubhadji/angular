import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionFormComponent } from './features/suggestions/suggestion-form/suggestion-form.component';
import { ListSuggestionComponent } from '../app/core/list-suggestion/list-suggestion.component';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },   
  // { path: 'suggestions', component: ListSuggestionComponent },
  { path: 'add-suggestion', component: SuggestionFormComponent },
  { path: 'home', component: HomeComponent },
  //{ path: 'listSuggestion', component: ListSuggestionComponent },
  { path: 'listSuggestion', loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
