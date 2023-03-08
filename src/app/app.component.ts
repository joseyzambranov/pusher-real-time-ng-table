import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMessage, MessageType, CloseType, NgAlertService } from '@theo4u/ng-alert';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'realtimeNgTable';
  message: IMessage = {
    type: MessageType.success,
    message: ''
};

      closeTypes = CloseType;
      private _alertSub: Subscription | undefined;
    
      constructor(private _ngAlert: NgAlertService) {
      }
    
      ngOnInit () {
         this._alertSub = this._ngAlert.getSource().subscribe(message => {
          this.message = message;
        });
      }
    
      ngOnDestroy () {
        this._alertSub?.unsubscribe();
      }
}
