import { ConsultaService } from './../_service/consulta.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../_model/pedido';
import * as moment from 'moment';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  pedidos: Pedido[];

  constructor(private consultaService: ConsultaService) {
    //(console.log('Testing moment',moment().format());
  }

  ngOnInit() {
  }

  obtenerFecha(event) {
    this.buscar(event);
  }

  buscar(fechas: Date[]) {
    let cantidad = fechas.length;
    let tipoRango = "M";

    //gte 13/03/2018 00 lt 14/03/2018 
    if (cantidad === 1) {
      tipoRango = "U";
      fechas[1] = new Date(); //instancia      
      fechas[1].setDate(fechas[0].getDate() + 1); //dia siguiente      
    }

    let fecha1 = this.applyDateISOFormat(fechas[0], false);
    let fecha2 = this.applyDateISOFormat(fechas[1], true);

    console.log(fecha1);
    console.log(fecha2);

    console.log(fecha1.substring(0, fecha1.indexOf('T')));
    console.log(fecha2.substring(0, fecha2.indexOf('T')));

    if (tipoRango === "U") {
      let obs = this.consultaService.getPedidos(tipoRango, fecha1.substring(0, fecha1.indexOf('T')), fecha2.substring(0, fecha2.indexOf('T')));
      obs.subscribe(data => {
        //console.log(data);
        this.pedidos = data;
      });
    } else {
      let obs = this.consultaService.getPedidos(tipoRango, fecha1.substring(0, fecha1.indexOf('T')), fecha2);
      obs.subscribe(data => {
        //console.log(data);
        this.pedidos = data;
      });
    }

  }

  cambio(event) {
    this.pedidos = [];
  }

   addFullDayTime(date: Date) {
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
  }
  applyDateISOFormat(x: Date, applyFullTime: boolean) {
    if (applyFullTime === true) { this.addFullDayTime(x); }
    let r = new Date(x.getTime() - (x.getTimezoneOffset() * 60000));   
    return r.toISOString();
  }
}