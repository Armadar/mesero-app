import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.loginService.cerrarSesion();
  }
}
