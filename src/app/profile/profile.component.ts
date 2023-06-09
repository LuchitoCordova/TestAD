import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
const hola = ['user.read'];
console.log(hola);
type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string,
  userId?: string,
  jobTitle?: string,
  name?: string,
  token?: string,
  roles?: string,
  permissions?: string
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: ProfileType;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
      });
  }
}