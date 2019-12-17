import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CatalogItem } from '../../models/CatalogItem';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private fs: AngularFirestore) {
  }

  async getCatalog(): Promise<CatalogItem[]> {
    const catalogData: CatalogItem[] = [];
    const snapshot = await this.fs.collection('store-items').get().toPromise();
    snapshot.forEach(doc => {
      // TODO: error handling for when data doesn't exist
      const data = doc.data();
      catalogData.push({
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        price: data.price
      });
    });
    return catalogData;
  }
}
