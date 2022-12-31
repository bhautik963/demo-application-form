import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, AfterViewInit {
  data = false  
  addForm:FormGroup|any
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
      this.addForm  = this.fb.group({
        name:['',Validators.required],
        email:['',Validators.required],
        address:['',Validators.required],
        contact:['',Validators.required],
        ssc:this.fb.group({
          board:['',Validators.required],
          year:['',Validators.required],
          percentage:['',Validators.required],
        }),
        hsc:this.fb.group({
          board:['',Validators.required],
          year:['',Validators.required],
          percentage:['',Validators.required],
        }),
        graduation:this.fb.group({
          collage:['',Validators.required],
          year:['',Validators.required],
          percentage:['',Validators.required],
        }),
        master:this.fb.group({
          collage:['',Validators.required],
          year:['',Validators.required],
          percentage:['',Validators.required],
        }),
        experience:this.fb.array([
          this.fb.group({
            company:['',Validators.required],
            designation:['',Validators.required],
            fDate:['',Validators.required],
            tDate:['',Validators.required]
          })
        ]),
        language:this.fb.array([
            this.fb.group({
              english:['',Validators.required],
              read:[false,Validators.requiredTrue],
              write:[false,Validators.requiredTrue],
              speak:[false,Validators.requiredTrue],
            })
        ])
        // :['',Validators.required],
        // name:['',Validators.required]
      })
  }
  ngAfterViewInit(): void {
      
  }
}