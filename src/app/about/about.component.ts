import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
import {Course} from '../model/course';
import {AngularFirestore} from '@angular/fire/firestore';

// var config = {
//   apiKey: "AIzaSyAQrqcxIZkTA-bacfvdmWZXp5EqWeUl-aM",
//   authDomain: "fir-course-d584d.firebaseapp.com",
//   databaseURL: "https://fir-course-d584d.firebaseio.com",
//   projectId: "fir-course-d584d",
//   storageBucket: "fir-course-d584d.appspot.com",
//   messagingSenderId: "998680160645",
//   appId: "1:998680160645:web:ab84627c38d01c61"
// };

// firebase.initializeApp(config);
//
// const db = firebase.firestore();
//
// const settings = {timestampsInSnapshots: true};
//
// db.settings(settings);

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private  db: AngularFirestore) { }

  ngOnInit() {

    // db.doc('courses/11HGiJNLtQKWDFfaz3XD')
    //     .get()
    //     .then(snap => console.log(snap.data()));
    // db.collection('courses').get()
    //     .then(snaps => {
    //
    //       const courses : Course[] = snaps.docs.map(snap => {
    //         return <Course>{
    //           id: snap.id,
    //           ...snap.data()
    //         }
    //       });
    //       console.log(courses);
    //     });

  }

}
