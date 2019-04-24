import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlatoService } from './../../_service/plato.service';
import { Plato } from './../../_model/plato';

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent implements OnInit {

  plato: Plato;
  id: string;
  constructor(private platoService: PlatoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.plato = new Plato(1, 'Hamburguesa', 'https://t2.rg.ltmcdn.com/es/images/0/8/9/img_pan_para_hamburguesa_28980_orig.jpg', 10);
    this.plato = new Plato(0, '', '', 0);

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      //this.plato = this.platoService.getPlatos()[this.id];
      this.platoService.getPlato(this.id).subscribe(data => {
        this.plato = data;
        console.log(data);
      });
      //console.log(this.plato);
    });

  }

  editarPlato() {
    this.router.navigate(['editar'], { relativeTo: this.route });
  }

  eliminarPlato(event: boolean, plato: Plato) {
    if (event) {
      this.platoService.eliminarPlato(plato);
      this.router.navigate(['plato']);
    }
  }
}