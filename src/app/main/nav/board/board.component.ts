import { Component, OnInit } from '@angular/core';

import { TuiService } from 'ngx-tui-editor';

import { BoardService } from '../../../service/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private editorOptions = {
    initialValue: ``,
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    height: 'auto',
    minHeight: '500px',
    codeBlockLanguages: ['Java', 'JavaScript', 'Ruby', 'Node']
  }

  constructor(
    private editorService: TuiService,
    private boardService: BoardService
  ) { }

  ngOnInit() {
  }

  boardInsert(input: any) {
    const content = this.editorService.getMarkdown();
    this.boardService.boardInsert({
      title: input.title,
      content
    }).subscribe(
      res => console.log(res),
      err => console.error(err),
      () => console.log('success')
    );
  }

}
