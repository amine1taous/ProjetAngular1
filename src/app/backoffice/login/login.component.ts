import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup
  message!: string
  constructor(private authService:AuthService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.nonNullable.group({
      login: ["", Validators.required],
      pwd:["",Validators.required]
    })
  }
  onSubmit() {
    this.authService.login(this.loginform.value['login'], this.loginform.value['pwd']).subscribe(user =>
    {
      if (user.id >= 0) {
        
        this.router.navigate(['admin/Dashboard']);
      
      }
      else {
        this.message = "Authentification incorrect!!!";
        this.loginform.reset();
      }
    }
    )
  }

}
