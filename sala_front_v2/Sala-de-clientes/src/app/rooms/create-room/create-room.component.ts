import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../../shared/models/room';
import { RoomService } from '../../core/room.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room();
  submitted = false;
  registration: FormGroup;
  
  constructor(
              private roomService: RoomService,
              private router: Router) { }

  ngOnInit(){

  }

  newRoom(): void{
    this.submitted = false;
    this.room = new Room();
  }

  save(){
    this.roomService.createRoom(this.room)
    .subscribe(data => console.log(data), error => console.log(error));
    this.room = new Room();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/rooms']);
  }
}
