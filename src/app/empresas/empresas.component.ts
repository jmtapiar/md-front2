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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private EmpresasService:EmpresasService, private location: Location ) { }

  ngOnInit(): void {
    this.listEmpresas();   
  }
  
  public listEmpresas() {
    this.EmpresasService.listEmpresa().subscribe(
      (data) => {
        this.listEmpre = data.data;
        this.dataSource = new MatTableDataSource(data.data);
      }
    )
  };

  public selectedEmpre(id: ReqResRespons): void {
    this.EmpresasService.selData = Object.assign({}, id);
  };

  resetForm(reset?: NgForm): void {
    this.EmpresasService.selData = {
      id: null,
      nombre1e: '',
      nombre2e: '',
      apellido1e: '',
      apellido2e: '',
      empresa: '',
      direccione: '',
      ruc: '',
      emaile: '',
    }
  };

}
