import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/_model/plato';
import { PlatoService } from './../../_service/plato.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plato-lista',
  templateUrl: './plato-lista.component.html',
  styleUrls: ['./plato-lista.component.css']
})
export class PlatoListaComponent implements OnInit {

  platos: Plato[];
  filterQuery = "";

  constructor(private platoService: PlatoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.platoService.onChangedPlatos.subscribe(data => {
      this.platos = data;
    });
    //this.platos = this.platoService.getPlatos()
    this.platoService.getPlatos().subscribe(data => {
      this.platos = data;
    }, (err) => {
      /*
this.platos=[];
this.mensaje enviar por stringInterpolation
*/
    });
  }

  crearNuevoPlato() {
    this.router.navigate(['nuevo'], { relativeTo: this.route })
  }
}