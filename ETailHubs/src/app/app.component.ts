import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETailHub';
  constructor(private firestore: AngularFirestore) {
    this.firestore.collection('users').doc('userid').get().forEach(async(doc) => {
      let d=await doc.data()
      console.log(d)
    });
    const documentRef = firestore.doc(`/userid/userid`);
    documentRef.get().subscribe((doc) => {
     console.log(doc.data())
    })
  }

// getData(userId: string) {
//   return this.firestore.collection('users').doc(userId).valueChanges();
// }
}
