import firebase from 'firebase/app';
import config from 'firebase_config'
import 'firebase/firestore';
import { question_banks } from 'rxfire/firestore';
import { tap } from 'rxjs/operators';

// dummy data 
const app = firebase.initializeApp({  config });
const citiesRef = app.firestore().collection('cities');
citiesRef.where('state', '==', 'CO');

collectionData(citiesRef, 'id')
  .pipe(
    tap(cities => console.log('This is just an observable!'))
  )
  .subscribe(cities => { /* update UI */ })
