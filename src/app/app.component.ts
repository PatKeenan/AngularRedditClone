import { Component } from '@angular/core';
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redditClone';
  articles: Article[];
  
  constructor() { 
    this.articles = [
    new Article('Angular', 'http://angular.io', 3),
    new Article('Fullstack', 'http://fullstack.io', 2),
    new Article('Angular Homepage', 'http://angular.io', 1),
    ]; 
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    if (title.value == "" || link.value ==""){
      return true
    }else{
      this.articles.push(new Article(title.value, link.value));
      title.value = "";
      link.value = "";
      return false
    }
  }
}
