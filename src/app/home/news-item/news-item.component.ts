import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../news.service';
import * as moment from 'moment';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input()
  newsId: string;

  item: any;

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.news.getItem(this.newsId).subscribe((data: any) => this.item = {
      title: data['title'],
      url: data['url'],
      score: data['score'],
      by: data['by'],
      time: data['time'],
      descendants: data['descendants'],
      avatar: data['title'].substr(0, 1),
      hours: moment().diff(moment.unix(data['time']), 'hours'),
    });
  }

  open(url) {
    window.open(url, '_blank');
  }

}
