import { Injectable } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor (private http: HttpClient) {}

suggestionUrl = 'http://localhost:3000/suggestions';

  suggestionsList: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Améliorer la gestion des réservations en ligne.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Programme de récompenses pour motiver les employés.',
      category: 'RH',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: 'Moderniser l’interface utilisateur',
      description: 'Refonte complète de l’interface utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  // getSuggestionsList(): Suggestion[] {
  //   return this.suggestionsList;
  // }
  getSuggestionById1(id: number): Suggestion | undefined {
    return this.suggestionsList.find(s => s.id === id);
  }
  
  ////////////////////////////////////////////////////////////////
  getSuggestionsList() {
    return this.http.get<Suggestion[]>(this.suggestionUrl);
  }

  getSuggestionById(id: number) {
    return this.http.get<Suggestion>(`${this.suggestionUrl}/${id}`);
  }

  deleteSuggestion(id: number) {
    return this.http.delete(`${this.suggestionUrl}/${id}`);
  }

  addSuggestion(s: Suggestion) {
    return this.http.post<Suggestion>(this.suggestionUrl, s);
  }

  updateSuggestion(id: number, s: Suggestion) {
    return this.http.put<Suggestion>(`${this.suggestionUrl}/${id}`, s);
  }
}