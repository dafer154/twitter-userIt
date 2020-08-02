import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  @Input() idUser: any;

  @Output() close: EventEmitter<any> = new EventEmitter();

  avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";

  formEditUser = this.fb.group({
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    date: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(value){
    console.log(value);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("CHANGES", changes)
    if(changes){
      console.log("TRUUU")
    }
  }

  closeModal(){
    this.close.emit(false);
  }

}
