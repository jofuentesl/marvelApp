import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment.development';




@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY ='d45702845cf01407e3b75c33f05b0caa';
  HASH = 'c76dd35286306b649087d994697625a1';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor( private http: HttpClient ) { }

  getAllCharacters() : Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }
}

//public key
//d45702845cf01407e3b75c33f05b0caa

//private key
//4d2a03c29622e807247b987ac2198b2b9d368493

//https://gateway.marvel.com:443/v1/public/characters?apikey=d45702845cf01407e3b75c33f05b0caa

