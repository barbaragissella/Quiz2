import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }
  loginWithGoogle(){
    return this.AuthLogin(new auth.GoogleAuthProvider());
}

async logout(){
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['/']);
}

get isLoggedIn(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user'));
  return  user  !==  null;
}
AuthLogin(provider) {
  return this.afAuth.signInWithPopup(provider)
  .then((result) => {
      console.log('You have been successfully logged in!')
      this.router.navigate(['/']);
  }).catch((error) => {
      console.log(error)
  })
}

}
