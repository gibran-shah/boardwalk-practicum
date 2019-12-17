import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  imageUrlArray: string[] = [];

  constructor(private fs: AngularFirestore) {

  }

  ngOnInit() {
    console.log('init');
    this.fs.collection('store-items').get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        console.log('doc.data() =', doc.data());
        this.imageUrlArray.push(doc.data().imageUrl);
      });
    });
  }
}
