import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../Curso';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {
  @Input() curso!: Curso;

  certificado: string = "";
  


  constructor() { }

  ngOnInit() {
  }

}
