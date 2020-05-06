import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { constante } from '../../../comum/constante';
import { Vender } from '../../../comum/modelo/entidade/vender';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // 'Id'
  headElements = [
    'data', 'nome', 'cpfCnpj', 'eventoProdutoList'
  ];
  elements: Vender[] = [];
  dataSource = new MatTableDataSource(this.elements);

  public SEM_IMAGEM = constante.SEM_IMAGEM;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((info) => {
      this.elements.length = 0;
      for (let i = 0; i < info.resolve.principal.length; i++) {
        this.elements.push(info.resolve.principal[i]);
      }
      this.dataSource = new MatTableDataSource(this.elements);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public maximoLinhas(l, t) {
    return l < t;
  }

}