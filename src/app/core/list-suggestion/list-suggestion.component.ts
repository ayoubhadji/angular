import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { SuggestionService } from '../Services/suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent implements OnInit {

   searchText: string = '';
  favorites: Suggestion[] = [];
  suggestions: Suggestion[] = [];

  constructor(private service: SuggestionService) {}

 ngOnInit(): void {
  // this.suggestions = this.service.getSuggestionsList();
this.service.getSuggestionsList().subscribe(data => {
    this.suggestions = data;
  });  
}

  likeSuggestion(s: Suggestion) {
    s.nbLikes++;
    
  }

  addToFavorites(s: Suggestion) {
    if (!this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }

  filteredSuggestions() {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  deleteSuggestion(id: number) {
  this.service.deleteSuggestion(id).subscribe(() => {
    this.service.getSuggestionsList().subscribe(data => {
      this.suggestions = data;
    });
  });
}
//   ngOnInit(): void {

//   const newSuggestion = history.state.newSuggestion;
//   if (newSuggestion) {
//     this.suggestions.push(newSuggestion);
//   }
// }

}
