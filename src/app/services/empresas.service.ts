import { Injectable } from '@angular/core';
import { ReqResRespons } from '../modelo/reqres-response';
import { HttpClient,HttpHeaders} from '@angular/common/http';
const AUTH_API = 'http://localhost:8080/empresas/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ 
  providedIn: 'root'
})
export class EmpresasService {
  public selData:any= []; 
  constructor(private http:HttpClient) { }

  public selectedEmpre :ReqResRespons=
  {
    data: this.selData,
    id: null
  
  }
  listEmpresa() {
    return this.http.get<ReqResRespons>(AUTH_API, httpOptions);
  }



}
