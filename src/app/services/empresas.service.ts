import { Injectable } from '@angular/core';
import { ReqResRespons } from '../modelo/reqres-response';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';


const AUTH_API = 'http://localhost:8080/empresas/';
const AUTH_API2 = 'http://localhost:8080/empresasact/';
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
    id: null,
    activo:'0',
  }
  listEmpresa() {
    return this.http.get<ReqResRespons>(AUTH_API, httpOptions);
  };

  editEmpresa(form): Observable<any> {
    return this.http.put(AUTH_API+form.bookId,form, httpOptions)
    .pipe(map(data => data));
    ;
  }
  
  newEmpresa(form:ReqResRespons): Observable<any> {
    return this.http.post(AUTH_API, form, httpOptions)
    .pipe(map(data => data));
    ;
  }

  listoneEmpresa(form: ReqResRespons): Observable<any> {
    return this.http.get(AUTH_API + form.id, httpOptions);
  }

  listoneEmpresaact(form: ReqResRespons): Observable<any> {
    return this.http.get(AUTH_API + form.activo, httpOptions);
  }


}
