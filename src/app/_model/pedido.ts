import { Cliente } from './cliente';
import { Detalle } from './detalle';

export class Pedido {
    _id: number;
    cliente: Cliente;
    public fechaPedido: Date;
    public total: number;
    public detalle: Detalle[];
}