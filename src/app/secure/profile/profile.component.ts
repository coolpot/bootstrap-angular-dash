import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  infoForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: ''
    });

    this.passwordForm = this.formBuilder.group({
      password: '',
      password_confirm: ''
    });
  }

}
