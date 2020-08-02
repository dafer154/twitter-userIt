import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../firebase.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  idUser;

  showEditProfile = false;

  avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";

  posts = [
    {id: 1, image:"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg", tweet: "Prueba 1", likes: '4'},
    {id: 2, image:"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg", tweet: "Prueba 2", likes: '10'},
    {id: 3, image:"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg", tweet: "Prueba 3", likes: '20'},
    {id: 4, image:"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg", tweet: "Prueba 4", likes: '34'},
    {id: 5, image:"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg", tweet: "Prueba 5", likes: '34'},
    {id: 5, image:"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg", tweet: "Prueba 6", likes: '345'},
    {id: 5, image:"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg", tweet: "Prueba 7", likes: '344'}
  ]

  constructor(private fireBaseService : FirebaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any ) => {
      const id = param['id'];
      this.getProfile(id);
    });
  }

  closeModal($event){
    this.showEditProfile = $event
    //console.log("jajaja", $event);
  }

  getProfile(id:string){
    this.fireBaseService.getUser(id).subscribe((res)=>{
      console.log("DETAIL USER", res);
    })
  }

  editProfile(){
    this.showEditProfile = true;
    this.idUser = "1";
  }

}
