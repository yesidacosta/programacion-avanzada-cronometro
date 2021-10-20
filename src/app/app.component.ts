import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje='';

  actualizar(t: string){
    this.mensaje = t + ' se actualiza cada 10 segundos';
  }
}
