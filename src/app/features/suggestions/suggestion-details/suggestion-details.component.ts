import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../../../core/Services/suggestion.service';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent implements OnInit {

goToUpdate() {
  const id = this.route.snapshot.paramMap.get('id');
  this.router.navigate(['/listSuggestion/update', id]);
}

  suggestion?: Suggestion;

  constructor(
    private route: ActivatedRoute,
    private service: SuggestionService,
    private router: Router

  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.suggestion = this.service.getSuggestionById1(id);
  }
}