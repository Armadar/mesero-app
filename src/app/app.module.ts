import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlatoComponent } from './plato/plato.component';
import { ComboBoxDirective } from './_directive/combobox.directive';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
import { PlatoListaComponent } from './plato/plato-lista/plato-lista.component';

import { PlatoService } from './_service/plato.service';
import { ConsumoService } from './_service/consumo.service';
import { ConsultaService } from './_service/consulta.service';
import { ClienteService } from './_service/cliente.service';
import { LoginService } from './_service/login.service';
import { LoginGuard } from './_service/login-guard.service';
import { TiendaService } from './_service/tienda.service';

import { Ng2CompleterModule } from 'ng2-completer';
import { DataTableModule } from "angular2-datatable";
import { PlatoFilterPipe } from './_pipe/plato-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmModalComponent } from './componentes/modal/confirm-modal/confirm-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { DatePickerComponent } from './componentes/pickers/date-picker/date-picker.component';
import { TabsModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SimpleModalComponent } from './componentes/modal/simple-modal/simple-modal.component';
import { LoginComponent } from './login/login.component'
import { Security } from './_service/security';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { MiperfilMainComponent } from './miperfil/miperfil-main/miperfil-main.component';
import { MiperfilEditComponent } from './miperfil/miperfil-edit/miperfil-edit.component';
import { EncryptionHelper } from './_service/encryptionHelper';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ConsumoComponent,
    FooterComponent,
    HeaderComponent,
    PlatoComponent,
    ComboBoxDirective,
    PlatoDetalleComponent,
    PlatoEdicionComponent,
    PlatoInicioComponent,
    PlatoListaComponent,
    PlatoFilterPipe,
    ConfirmModalComponent,
    DatePickerComponent,
    SimpleModalComponent,
    LoginComponent,
    MiperfilComponent,
    MiperfilMainComponent,
    MiperfilEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2CompleterModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy},
    PlatoService, ConsumoService, ClienteService, ConsultaService,LoginService,LoginGuard,Security,TiendaService,EncryptionHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }