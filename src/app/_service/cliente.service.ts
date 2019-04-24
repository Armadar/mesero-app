import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../_model/cliente';
import { Security } from './security';
import { HOST } from './var.constant';

@Injectable()
export class ClienteService {

    url: string = `${HOST}/cliente`;

    constructor(private http: HttpClient, private security: Security) { }

    getClientes() {
        return this.http.get<Cliente[]>(`${this.url}/listar`,
            { headers: this.security.getHttpHeader() });
    }

    registrar(nombreCliente: string) {
        let cliente: Cliente = new Cliente();
        cliente.nombreCompleto = nombreCliente;
        cliente.dni = '00000000';
        return this.http.post<Cliente>(`${this.url}/registrar`, cliente,
            { headers: this.security.getHttpHeader() });
    }
}