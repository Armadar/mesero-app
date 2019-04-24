import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tienda } from 'src/app/_model/tienda';
import { TiendaService } from '../../_service/tienda.service';

@Component({
  selector: 'app-miperfil-main',
  templateUrl: './miperfil-main.component.html',
  styleUrls: ['./miperfil-main.component.css']
})
export class MiperfilMainComponent implements OnInit {

  tienda: Tienda;
  constructor(private tiendaService: TiendaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tiendaService.onChangedStore.subscribe(data => {
      console.log("...reloading tienda");
      this.tienda = data;
      this.router.navigate(['miperfil'])
    });

    this.tiendaService.getTienda().subscribe(data => {
      console.log("...getting tienda");
      this.tienda = data;
    }, (err) => {
      console.log(err);
    });
  }

  editarPerfil() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  cancelar() {
    this.router.navigate(['plato'])
  }
}