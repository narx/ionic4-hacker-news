import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('https://hacker-news.firebaseio.com/v0/beststories.json')
  }

  getItem(newsId) {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`);
  }
}
