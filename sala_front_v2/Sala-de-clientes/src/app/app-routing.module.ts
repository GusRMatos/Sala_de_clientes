import { DetailsRoomComponent } from './rooms/details-room/details-room.component';
import { CreateRoomComponent } from './rooms/create-room/create-room.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRoomComponent } from './rooms/list-room/list-room.component';
import { UpdateRoomComponent } from './rooms/update-room/update-room.component';

const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
  { path: 'rooms', component: ListRoomComponent },
  { path: 'add', component: CreateRoomComponent },
  { path: 'update/:id', component: UpdateRoomComponent },
  { path: 'details/:id', component: DetailsRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
