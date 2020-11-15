import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiconsultService {

  constructor(
    protected http: HttpClient
  ) {}

  getCharacters() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  getCharacterbyId (charid) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + charid);
  }

  getCharactersbyFilter (status, species, type, gender){
    return this.http.get('https://rickandmortyapi.com/api/character/', 
      {params: {
        status: status,
        species: species,
        type: type,
        gender: gender
      },
      observe: 'response'
    });
  }

  // getFav (){
  //   return this.http.get('https://rickandmortyapi.com/api/character/');
  // }


  // addFavs(id: string, characterId) {

  //   let data = {
  //     //id:
  //     updatePolicy(policy: Policy){
  //       delete policy.id;
  //       this.firestore.doc('policies/' + policy.id).update(policy);
  //   }
    

  //   };

  //   return this.firestore.collection('purchases').add(data);
  // }

  // deleteFavs(name: string, email: string, game: string) {

  //   let data = {
  //     add: name,
  //     delete: email,
  //     save: game
  //   };

  //   return this.firestore.collection('purchases').add(data);
  // }

  // getFavs(name: string, email: string, game: string) {

  //   let data = {
  //     add: name,
  //     delete: email,
  //     save: game
  //   };

  //   return this.firestore.collection('purchases').add(data);
  // }

  // amountFavs(name: string, email: string, game: string) {

  //   let data = {
  //     add: name,
  //     delete: email,
  //     save: game
  //   };

  //   return this.firestore.collection('purchases').add(data);
  // }

  // getPurchases() {
  //     return this.firestore.collection('purchases').snapshotChanges();
  // }


  // export 

}

