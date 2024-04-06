import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  constructor(private fb: FormBuilder,
              private authService: AuthService){}
  
  registerForm!: FormGroup;

  ngOnInit(): void { 
  this.registerForm = this.fb.group({
    fname: ['',Validators.required],
    lname: ['',Validators.required],
    email: ['',Validators.required],
    password: ['', Validators.required]
  })

  }
  onRegister(){
    this.authService.signUp(this.registerForm.value);
    this.registerForm.reset();
    alert(`wellcome to my website`);

  }

}
