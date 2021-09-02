import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TextMaskModule } from 'angular2-text-mask';

import { CreateRoomComponent } from './create-room/create-room.component';
import { DetailsRoomComponent } from './details-room/details-room.component';
import { ListRoomComponent } from './list-room/list-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
  ],
  declarations: [CreateRoomComponent, DetailsRoomComponent, ListRoomComponent, UpdateRoomComponent]
})
export class RoomsModule { }