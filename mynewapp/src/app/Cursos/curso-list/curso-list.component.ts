import { Component, OnInit } from '@angular/core';
import { Curso } from '../Curso';
import { CursoService } from '../cursos.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos: Array<Curso> = [];
  selected: boolean = false;
  selectedCurso!: Curso;
  certificados:string="";


  constructor(private cursoService: CursoService) { }

  getCursos() {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;

      for (let i = 0; i < this.cursos.length; i++) {
        if (this.cursos[i].offers_certificate == true) {
          this.certificados=this.certificados + (this.cursos[i].id) + ", ";
        }
      }
    });
  }

  onSelected(curso: Curso): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

  ngOnInit() {
    this.getCursos();
  }

}
