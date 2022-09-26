import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  pokemons: any;

  constructor(private http: HttpClient) {}

  // Get Pokemons
  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`);
  }

  // Get more Pokemons Data
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
