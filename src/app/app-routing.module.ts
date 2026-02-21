import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionFormComponent } from './features/suggestions/suggestion-form/suggestion-form.component';
import { ListSuggestionComponent } from '../app/core/list-suggestion/list-suggestion.component';
const routes: Routes = [   
  { path: 'suggestions', component: ListSuggestionComponent },
  { path: 'add-suggestion', component: SuggestionFormComponent },
  { path: '', redirectTo: '/suggestions', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
