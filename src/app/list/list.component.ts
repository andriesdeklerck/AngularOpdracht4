import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() showNotBalSports?: boolean;
  @Output() onClicked = new EventEmitter();
  sports = [];
  constructor(private sportService: SportService) {

  }

  ngOnInit(): void {
    console.log(this.showNotBalSports);
  }

  onClick(value: any) {
    this.onClicked.emit(value);
    this.loadSports();
  }

  loadSports() {
    this.sportService.getTopRated().subscribe((result) => this.sports = result);
    console.log(this.sportService.getTopRated());
  }
}
