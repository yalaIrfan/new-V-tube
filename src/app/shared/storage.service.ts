import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StorageService {
  private storageSub = new Subject<boolean>();
  constructor() { }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next(true);
  }

  removeItem(key) {
    localStorage.removeItem(key);
    this.storageSub.next(false);
  }

}
