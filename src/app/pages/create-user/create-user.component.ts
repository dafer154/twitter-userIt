import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {FirebaseService} from '../../firebase.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";

  formCreateUser = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    date: ['', [Validators.required]],
    description: ['', [Validators.required]],
    username: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private firebaseService : FirebaseService, private router: Router) { }


  ngOnInit(): void {
  }

  resetFields(){
    this.formCreateUser = this.fb.group({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    this.firebaseService.createUser(value)
    .then(
      res => {
        console.log("test user CREATE", res);
        //let idUser = res.user.uid;
        let idUser = '1';
        this.resetFields();
        this.router.navigate([`/profile/${idUser}`]);
      }
    )
  }
}
