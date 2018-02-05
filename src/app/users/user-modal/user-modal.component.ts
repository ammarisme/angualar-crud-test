import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../user';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {UserService} from "../../user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['../../app.component.css']
})

export class UserDetailComponent implements OnInit{
  @Input() user : User;
  @Input() action : string; // 'c','u','v'
  userUpdateForm: FormGroup;
  formBuilder: FormBuilder;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ){
    console.log('user modal init');
  };


  buildForm(): void {
    this.userUpdateForm = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      _id: [this.user._id]
    });
  }
  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(params['id']))
      .subscribe(user => this.user = user);
  }

  goBack(): void{
    this.location.back();
  }
}
