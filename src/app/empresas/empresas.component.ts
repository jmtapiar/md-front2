import { Component, OnInit } from '@angular/core';
import { ReqResRespons } from '../modelo/reqres-response';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { EmpresasService } from '../services/empresas.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  public listEmpre: any = [];
  dataSource=null;
  displayedColumns= ['id','empresa','direccione','ruc','emaile','createdAt','fsalida','actionsColumn'];
  public DelEmpre: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  value = 'Clear me';
  activo=0;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private EmpresasService:EmpresasService, private location: Location ) { }

  ngOnInit(): void {
   this.listEmpresas(this.activo);   
  }
  
  public listEmpresas(activo) {
    this.EmpresasService.listEmpresa().subscribe(
      (data) => {
        this.listEmpre = data.data;
        this.dataSource = new MatTableDataSource(data.data);
      }
    )
  };

  DelEmpresa(id: number): void {
    console.log(id);
    if (confirm('¿Estás seguro de eliminar?')) {
      this.EmpresasService.editEmpresa(id).subscribe(
        (data) => {
          this.listEmpre = data.data;
          location.reload();
        }
      )
    }
  };



  public selectedEmpre(id: ReqResRespons): void {
    this.EmpresasService.selData = Object.assign({}, id);
  };

  resetForm(reset?: NgForm): void {
    this.EmpresasService.selData = {
      id: null,
      representantelegal: '',
      cirepresentante: '',
      empresa: '',
      direccione: '',
      ruc: '',
      emaile: '',
      activo:''
    }
  };

}
