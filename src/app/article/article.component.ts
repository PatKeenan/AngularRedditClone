import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() { }
  //logic for the article function of voting is keot in the model as best practice. It belongs to the Article class.
  voteUp(): boolean{
    this.article.voteUp();
    return false
  }
  voteDown(): boolean{
    this.article.voteDown();
    return false
  }

  ngOnInit(): void {
  }

}
