import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = this.formBuilder.group(
    {
    email : ['',Validators.compose([Validators.required, Validators.email])],
    senha : ['',Validators.compose([Validators.required, Validators.minLength(6)])],
    termo : ['',Validators.required]
  }
  );

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
