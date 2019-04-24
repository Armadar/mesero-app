import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../_model/pedido';
import { Security } from './security';
import { HOST } from './var.constant';

@Injectable()
export class ConsultaService {

    url: string = `${HOST}/consumo`;

    pedidos: Pedido[] = [];

    constructor(private http: HttpClient, private security: Security) { }

    getPedidos(tipoRango: string, fecha1: string, fecha2: string) {
        return this.http.get<Pedido[]>(`${this.url}/listar/${tipoRango}/${fecha1}/${fecha2}`,
         { headers: this.security.getHttpHeader() });
    }
}