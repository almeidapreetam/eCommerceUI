import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  private dataObject = {
    key1: 'value1',
    key2: 'value2'
  };

  setObject(object: any): void {
    this.dataObject = object;
  }

  getObject(): any {
    return this.dataObject;
  }
}
