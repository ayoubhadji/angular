import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SuggestionService } from '../../../core/Services/suggestion.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {

  suggestionForm!: FormGroup;

  id!: number;
  isUpdateMode: boolean = false;

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor(
    private fb: FormBuilder,
    private service: SuggestionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.suggestionForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-zA-Z ]*$')
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(30)
      ]],
      category: ['', Validators.required],
      date: [{ value: new Date(), disabled: true }],
      status: [{ value: 'en attente', disabled: true }],
      nbLikes: 0
    });

    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {

      this.isUpdateMode = true;
      this.id = Number(idParam);

      this.service.getSuggestionById(this.id)
        .subscribe(data => {
          this.suggestionForm.patchValue(data);
        });
    }
  }

  onSubmit() {

    if (this.suggestionForm.valid) {

      if (this.isUpdateMode) {

        this.service.updateSuggestion(
          this.id,
          this.suggestionForm.getRawValue()
        ).subscribe(() => {
          this.router.navigate(['/listSuggestion']);
        });

      } else {

        this.service.addSuggestion(
          this.suggestionForm.getRawValue()
        ).subscribe(() => {
          this.router.navigate(['/listSuggestion']);
        });

      }
    }
  }
}