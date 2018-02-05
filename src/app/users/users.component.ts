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
  edit : boolean = false;
  userUpdateForm: FormGroup;
  formBuilder: FormBuilder;
  
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
    this.showModal = true;
    this.edit = true;
  }

  remove(id: string): void {
    this.userService.remove(id)
      .then(() => {
        this.getUsers();
      });
  }

  onUserAddition(addedUser :User ){
    this.users.push(addedUser);
    console.log(this.users);
  }

  viewDetail(thisUser : User): void {
    // this.router.navigate(['/detail', id]);
   this.user = thisUser;
   this.showModal = true;
   this.edit = false;
  }

  closeModal(){
    this.showModal = false;
  }
}