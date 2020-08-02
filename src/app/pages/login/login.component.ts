import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private router: Router, private fireBaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  login() {
    this.fireBaseService.login(this.formLogin.value)
      .then((res) => {
        let id = res.user.uid;
        this.router.navigate([`/profile/${id}`])
      })

  }

  sign_up() {
    this.router.navigate(['/sign-up']);
  }


}
