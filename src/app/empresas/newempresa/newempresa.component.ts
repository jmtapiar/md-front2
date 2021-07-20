import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-newempresa',
  templateUrl: './newempresa.component.html',
  styleUrls: ['./newempresa.component.css']
})
export class NewempresaComponent implements OnInit {
  form: any = {};
  public listEmpre:any= []; 
  errorMessage = '';
  isSuccessful = false;
  isSignUpFailed = false;
  constructor(private EmpresasService: EmpresasService,private location:Location) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm): void {
    if (form.value.bookId == null) {
    console.log(this.form);
    this.EmpresasService.newEmpresa(form.value).subscribe(
      data => {
        console.log(this.form);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        location.reload();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        location.reload();
      }
    );
    } else {
      // update
      this.EmpresasService.editEmpresa(form.value).subscribe(
        data => {
          console.log(this.form);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          location.reload();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          location.reload();
        }
      );
    }
  }

}
