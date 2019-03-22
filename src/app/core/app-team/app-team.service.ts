import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AppTeamMember } from '../../interfaces/app-team';
import { CollectionWrapper } from '../../angular-fire/collection-wrapper';

@Injectable({
  providedIn: 'root',
})
export class AppTeamService extends CollectionWrapper<AppTeamMember> {
  constructor(
    angularFirestore: AngularFirestore,
  ) {
    super('team', angularFirestore);
  }
}