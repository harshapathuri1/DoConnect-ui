import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { registrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user =new User();
  private _router: any;
  

  constructor(private _service: registrationService) { }

  ngOnInit(): void {
  }


loginUser()
{
  this._service.loginUserFromRemote(this.user).subscribe(
    data => console.log("response recieved"),
    error => console.log("Excepection occured")
  )
}
  gotoregistration()
  {
    this._router.navigate(['/registration'])
  }

}