import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styles: []
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  public bookTitle: string;
  public bookAuthor: string;
  public bookNoOfPages: number;

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.valid) {
      //required submit operations
      console.log(form.value);
      console.log(form.valid);
    }
  }

}
