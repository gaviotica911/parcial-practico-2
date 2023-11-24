import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './Cursos.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursoListComponent, CursoDetailComponent],
  exports: [CursosComponent, CursoListComponent, CursoDetailComponent]
})
export class CursosModule { }
