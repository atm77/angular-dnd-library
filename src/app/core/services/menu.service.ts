import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private sideBarOpenedSource = new BehaviorSubject(true);
  currentSideBarOpenedStatus = this.sideBarOpenedSource.asObservable();

  constructor() {}

  handleToogleSideBar() {
    this.sideBarOpenedSource.next(!this.sideBarOpenedSource.value);
  }


}
