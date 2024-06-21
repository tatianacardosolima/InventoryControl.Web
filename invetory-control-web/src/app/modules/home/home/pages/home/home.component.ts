import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginCard = true;
  }


  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmitLoginForm(): void {
    console.log('DADOS DO FORMULÁRIO DE LOGIN', this.loginForm.value);
  }

  onSubmitSignupForm(): void {
    console.log(
      'DADOS DO FORMULÁRIO DE Criação de conta',
      this.signupForm.value
    );
  }
}
