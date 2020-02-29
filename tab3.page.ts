import {Tab3Service} from '../tab3.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  results: Observable<any>;
  searchTerm: string = '';

  constructor(private tab3Service: Tab3Service) {}
  ngOnInit(){}

  serchChanged(){
    this.results = this.tab3Service.searchData(this.searchTerm);
    console.log(this.results);
  }

}
