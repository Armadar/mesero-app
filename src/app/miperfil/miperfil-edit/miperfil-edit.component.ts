import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TiendaService } from './../../_service/tienda.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tienda } from 'src/app/_model/tienda';

@Component({
  selector: 'app-miperfil-edit',
  templateUrl: './miperfil-edit.component.html',
  styleUrls: ['./miperfil-edit.component.css']
})
export class MiperfilEditComponent implements OnInit {

  form: FormGroup;

  id: string;

  constructor(private route: ActivatedRoute, private tiendaService: TiendaService) {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'name': new FormControl(''),
      'address': new FormControl(''),
      'image': new FormControl(0)
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.initForm();
    });
  }


  operar() {
    let o = new Tienda(
      this.form.value['id'],
      this.form.value['name'],
      this.form.value['address'],
      this.form.value['image']
    );
    this.tiendaService.updateStore(o);
  }

  initForm() {
    this.tiendaService.getTienda().subscribe(data => {

      let id = 0;
      let name = '';
      let address = '';
      let image = '';

      id = data._id;
      name = data.name;
      address = data.address;
      image = data.image;

      this.form = new FormGroup({
        'id': new FormControl(id),
        'name': new FormControl(name),
        'address': new FormControl(address),
        'image': new FormControl(image)
      });
    });
  }
}