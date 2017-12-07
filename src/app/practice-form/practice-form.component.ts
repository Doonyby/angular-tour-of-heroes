import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './signup.interface';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css']
})
export class PracticeFormComponent implements OnInit {

  constructor(private location: Location,
              private fb: FormBuilder) { }
  user: FormGroup;

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value.account.email, valid, this.user.value.account.email);
  }

  // ngOnInit() {
  //   this.user = new FormGroup({
  //     name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //     account: new FormGroup({
  //       email: new FormControl('', Validators.required),
  //       confirm: new FormControl('', Validators.required)
  //     })
  //   })
  // }

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      }),
    });
  }

  goBack(): void {
    this.location.back();
  }

}
