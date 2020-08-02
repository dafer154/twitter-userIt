import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) { }


  login(value) {
    return this.afAuth.signInWithEmailAndPassword(value.email, value.password)
  }

  createUser(value){
    return this.afAuth.createUserWithEmailAndPassword(value.email, value.password).then((res)=>{
      this.afs.collection('users').add({
      uid: res.user.uid,
      email: value.email,
      lastname: value.lastname,
      name: value.name,
      date: value.date,
      description: value.description,
      username: value.username
    });
    })
  }


  getUser(userKey){
    return this.afs.collection('users', ref => ref.where("uid", "==", userKey)).snapshotChanges()
  }
}
