import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {User} from "./user";
import {Headers, Http} from '@angular/http';

@Injectable()
export class UserService {

  private host = window.location.hostname;
  private headers = new Headers({'Content-Type': 'application/json',"api-key": "2BAAFD2BE944AAA5B21BCBDF99F6E","api-secret": "CA41A12EA2828DBC49CDBDA88D521"});
  private usersURL = `http://34.234.36.234:8086/v1/mock-user`;

  constructor(private http: Http) {
  };

  /**
   * Return all users
   * @returns {Promise<User[]>}
   */
  getUsers(): Promise<User[]> {
    return this.http.get(this.usersURL,{headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json() as User[];
      })
      .catch(this.handleError);
  }

  /**
   * Returns user based on id
   * @param id:string
   * @returns {Promise<User>}
   */
  getUser(id: string): Promise<User> {
    const url = `${this.usersURL}/${id}`;
    return this.http.get(url,{headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  /**
   * Adds new user
   * @param user:User
   * @returns {Promise<User>}
   */
  add(user: User): Promise<User>{
    return this.http.post('http://34.234.36.234:8086/v1/mock-user', JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError)
  }

  /**
   * Updates user that matches to id
   * @param user:User
   * @returns {Promise<User>}
   */
  update(user: User): Promise<User>{
    return this.http.put(`${this.usersURL}/${user._id}`, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError)
  }

  /**
   * Removes user
   * @param id:string
   * @returns {Promise<User>}
   */
  remove(id: string): Promise<any>{
    return this.http.delete(`${this.usersURL}/${id}`,{headers: this.headers})
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError)
  }

  /**
   * Handles error thrown during HTTP call
   * @param error:any
   * @returns {Promise<never>}
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
