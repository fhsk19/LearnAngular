import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Login } from '../login';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  stdlogin: Login;

  constructor(private formBuilder: FormBuilder,
    private ls: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      uName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
//convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    //stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    //console.log(this.loginForm);
    console.log(this.loginForm.value);
    this.stdlogin = this.loginForm.value;
    if (this.validateLogin()) {
    alert('SUCCESS!!' + this.stdlogin.uName + " " +
    this.stdlogin.password);
    let key = 'userName';
    localStorage.setItem(key, this.stdlogin.uName);
    } else {
      alert('FAILURE!!');
      localStorage.removeItem('userName');
    }
  }
  validateLogin(): boolean {
    let c: Login;
    c = this.ls.validateLogin(this.stdlogin);
    if (c == null) {
    return false;
    }
    return true;
  }
}
