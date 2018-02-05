import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['../app.component.css'],
  providers: [UserService]
})

export class UsersComponent implements OnInit {
  users: User[];
  user : User;
  showModal : boolean  = false;
  userUpdateForm: FormGroup;
  formBuilder: FormBuilder;
  action : string;
  constructor(private router: Router,
              private userService: UserService) {
  }

  /**
   * Gets the existing users
   */
  getUsers(): void {
    this.users = [new User('A','n','df@df.com'), new User('A','n','df@df.com'),new User('A','n','df@df.com')];
    // this.userService.getUsers()
    //   .then(users => {
    //     this.users = users;
    //   });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  update(thisUser : User): void {
    // this.router.navigate(['/update', id]);
    this.user = thisUser;
    this.action = 'u';
    this.showModal = true;
    }
  
  onUserAddition(addedUser :User ){
    this.users.push(addedUser);
  }

  onUpdateUser(addedUser :User ){
    this.users.filter(x => x._id == addedUser._id)[0]=addedUser;
    // update service need to be called from here.
  }

  viewDetail(thisUser : User): void {
    this.user = thisUser;
    this.action = 'v';
    this.showModal = true;
  }

  
  hideModal(ev){
    this.showModal = false;
  }

  addUser(){
    this.action = 'c'
    this.user = new User('','','');
    this.showModal = true;
  }

  remove(deleteUser: User){
    // this.userService.remove(id)
    // .then(() => {
    //   this.getUsers();
    // });
    this.action = 'd';
    this.user =deleteUser;
    this.showModal = true;
  }

  onDeleteUser(deleteUser : User){
  this.users = this.users.filter(x => x != deleteUser);  
  }
}