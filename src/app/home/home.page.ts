import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items;

  constructor(private news: NewsService) {
    this.showNews();
  }

  showNews() {
    this.news.getItems().subscribe((data: Array<any>) => this.items = data.slice(0, 30).map(o => o));
  }


}
