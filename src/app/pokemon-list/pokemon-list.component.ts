import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

const CACHE_KEY = 'httpRepoCache'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: { name: string; }) => {
          this.dataService.getMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
            })
        });
      });
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

}
