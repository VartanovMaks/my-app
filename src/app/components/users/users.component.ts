import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
// export class UsersComponent implements OnInit {
//   private httpClient:HttpClient;
//   constructor(http:HttpClient) { 
//     this.httpClient = http;
//   }
export class UsersComponent implements OnInit {
  users:User[]=[];
  constructor(private httpClient:HttpClient) { 

  }
  ngOnInit(): void {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(value=>{
    this.users=value;
  })
  }

}
