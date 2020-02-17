import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor (private firebaseX: FirebaseX) {}

    logEvent(name: string, properties: object) {
      this.firebaseX.logEvent(name, properties); // "select_content", {content_type: "page_view", item_id: "home"}
    }

    setUserProperty(key: string, value: string) {
      this.firebaseX.setUserProperty(key, value);
    }

    trackScreen(name: string) {
      this.firebaseX.setScreenName(name);
    }

    setUserId(uid: string) {
      this.firebaseX.setUserId(uid);
    }
}
