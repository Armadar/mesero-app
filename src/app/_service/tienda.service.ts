import { Injectable } from '@angular/core';
import { Tienda } from '../_model/tienda';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { HOST } from './var.constant';
import { Security } from './security';

@Injectable()
export class TiendaService {

    url: string = `${HOST}/tienda`;

    onChangedStore = new Subject<Tienda>();

    constructor(private http: HttpClient, private security: Security) { }

    getTienda() {
        return this.http.get<Tienda>(`${this.url}/getthefirst`,
            { headers: this.security.getHttpHeader() });
    }

    updateStore(store: Tienda) {
        return this.http.put(`${this.url}/actualizar`, store,
            { headers: this.security.getHttpHeader() }).subscribe(data => {
                if (data === 1) {
                    this.getTienda().subscribe(store => {
                        this.onChangedStore.next(store);
                    });
                }
            });
    }
}