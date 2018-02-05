import 'rxjs/add/operator/switchMap';
import { Component, EventEmitter, Output } from '@angular/core';
import {User} from '../../user';
import {Router} from '@angular/router';
import {UserService} from "../../user.service";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";

@Component({
  selector: 'add-user',
  templateUrl: './user-add.component.html',
  styleUrls: ['../../app.component.css']
})

export class UserAddComponent {
  userAddForm: FormGroup;
  user = new User('sdf','fixed','sdfd');
  @Output() userAdded : EventEmitter<User> = new EventEmitter<User>() 

  constructor(private userService: UserService,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder) {
    this.buildForm();
  };

  buildForm(): void {
    this.userAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
    });
  }

  add(): void {
    let user = this.userAddForm.value as User;
    this.userService.add(user)
      .then(response => {
        this.userAdded.emit(this.user);
      });
  }
}
