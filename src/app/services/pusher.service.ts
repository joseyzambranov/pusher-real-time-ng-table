import { Injectable } from '@angular/core';
//import * as Pusher from 'pusher-js';
//import Pusher from 'pusher-js/with-encryption';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private _pusher: any;

  constructor() {
    this._pusher = new Pusher("af8dd41a1569ffcd8537", {
      cluster: "us2",
      //encrypted: true
    });
   }
   getPusher() {
    return this._pusher;
  }
}
