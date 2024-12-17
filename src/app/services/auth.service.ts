import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users, User} from '../interfaces/users';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Eventos } from '../interfaces/eventos';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient, private router: Router) { }

  getUsuarios():Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }

  GetUserByUsername(usuario:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?username=${usuario}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  postUsuario(newUser: User):Observable<User>{
    return this.httpclient.post<User>(`${environment.apiUrl}/usuarios`, newUser);
  }

  putUsuario(usuario:any):Observable<Users>{
    return this.httpclient.put<Users>(`${environment.apiUrl}/mascotas/${usuario.id}`, usuario);
  }
  GetUsuarioId(id:string):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?id=${id}`);
  }

  getEvents(): Observable<Eventos[]> {
    return this.httpclient.get<Eventos[]>(`${environment.apiUrl}/eventos`)
  }

  logout() {
    sessionStorage.clear(); 
    this.router.navigate(['/login']); 
  }
}