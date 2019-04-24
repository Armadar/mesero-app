import { Injectable } from '@angular/core';
import { Plato } from '../_model/plato';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { HOST } from './var.constant';
import { Security } from './security';

@Injectable()
export class PlatoService {

    url: string = `${HOST}/plato`;

    onChangedPlatos = new Subject<Plato[]>();

    /*
    platos: Plato[] = [
        new Plato(1, 'Hamburguesa', 'https://t2.rg.ltmcdn.com/es/images/0/8/9/img_pan_para_hamburguesa_28980_orig.jpg', 10),
        new Plato(2, 'Jugo', 'https://www.elmejornido.com/sites/default/files/mrs_import/images/138887lrg_0.jpg', 20),
    ];
    */


    constructor(private http: HttpClient, private security: Security) { }

    getPlatos() {
        return this.http.get<Plato[]>(`${this.url}/listar`,
            { headers: this.security.getHttpHeader() });
        //return this.platos;
    }

    getPlato(id: string) {
        return this.http.get<Plato>(`${this.url}/leer/${id}`,
            { headers: this.security.getHttpHeader() });
        //return this.platos;
    }

    agregarPlato(plato: Plato) {
        return this.http.post(`${this.url}/registrar`, plato,
            { headers: this.security.getHttpHeader() }).subscribe(data => {
                if (data === 1) {
                    this.getPlatos().subscribe(platos => {
                        this.onChangedPlatos.next(platos);
                    });
                }
            });
    }

    actualizarPlato(plato: Plato) {
        return this.http.put(`${this.url}/actualizar`, plato,
            { headers: this.security.getHttpHeader() }).subscribe(data => {
                if (data === 1) {
                    this.getPlatos().subscribe(platos => {
                        this.onChangedPlatos.next(platos);
                    });
                }
            });
    }

    eliminarPlato(plato: Plato) {
        return this.http.delete(`${this.url}/eliminar/${plato._id}`,
            { headers: this.security.getHttpHeader() }).subscribe(data => {
                if (data === 1) {
                    this.getPlatos().subscribe(platos => {
                        this.onChangedPlatos.next(platos);
                    });
                }
            });
    }
}