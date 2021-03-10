import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  currentPage = 1;
  @Input('lastPage') lastPage;
  @Output('pageChanged') pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  prev() {
    if (this.currentPage === 1) return;
    this.currentPage--;
    this.pageChanged.emit(this.currentPage);
  }

  next() {
    if (this.currentPage === this.lastPage) return;
    this.currentPage++;
    this.pageChanged.emit(this.currentPage);
  }
}
