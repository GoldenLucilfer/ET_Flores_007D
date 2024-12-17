import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users, User} from '../interfaces/users';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Eventos } from '../interfaces/eventos';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

  getUsuarios():Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }

  postUsuario(newUser: User):Observable<User>{
    return this.httpclient.post<User>(`${environment.apiUrl}/usuarios`, newUser);
  }

  getEventos():Observable<Eventos[]>{
    return this.httpclient.get<Eventos[]>(`${environment.apiUrl}/eventos`);
  }


}
