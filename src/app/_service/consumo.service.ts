import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Security } from './security';
import { HOST } from './var.constant';

@Injectable()
export class ConsumoService {

    url: string = `${HOST}/consumo`;

    constructor(private http: HttpClient, private security: Security) { }

    registrar(pedido: any) {
        return this.http.post(`${this.url}/registrar`, pedido,
            { headers: this.security.getHttpHeader() });
    }
}