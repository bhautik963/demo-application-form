import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  sessionData: { Authorization: any; } | undefined;
  loginForm: FormGroup | any;
  showLoader: boolean | undefined;

  constructor(private fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      sUserName: ['', Validators.compose([Validators.required])],
      sPassword: ['', Validators.compose([Validators.required])]
    });
  }

  isValidInput(fieldName:any): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  goTodashboard() {
    this.router.navigate(['/components/crm/dashboard']);
  }

  public submit() {
    this.showLoader = true;
    // this.authService.login(this.loginForm.value).subscribe((data: HttpResponse<any>) => {
    //   this.showLoader = false;
    //   this.util.notifySuccess(data.body.message);
    //   this.sessionData = {
    //     Authorization: data.headers.get('authorization'),
    //   };
    //   this.router.navigate(['components/dashboard']);
    //   localStorage.setItem('accessToken', JSON.stringify(this.sessionData));
    //   localStorage.setItem('admintype', btoa(data.body.data.eUserType));
    //   localStorage.removeItem('agentToken');

    // }, (error:any) => {
    //   console.log(error.error.message)
    //   this.util.notifyError(error.error.message)
    //   this.showLoader = false;
    // });
  }


}
