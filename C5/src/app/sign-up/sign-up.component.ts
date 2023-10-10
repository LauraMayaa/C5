import { Component } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  isSend = false

  user: User = new User("", "", "", "");

  constructor() { }

  public onSubmit(): void {
    console.log(this.user)
    this.isSend = true
  }

}



export class User {
  constructor(
    public email: string,
    public firstname: string,
    public lastname: string,
    public password: string
  ) { }

}


