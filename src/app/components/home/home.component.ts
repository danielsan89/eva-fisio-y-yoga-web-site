import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/models/summary.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  biography: Summary[] = [{title: 'About me', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices tincidunt arcu non sodales. Purus non enim praesent elementum facilisis leo vel. Risus ultricies tristique nulla aliquet enim tortor at. Egestas tellus rutrum tellus pellentesque eu. In pellentesque massa placerat duis ultricies. Massa massa ultricies mi quis hendrerit. Ultricies tristique nulla aliquet enim tortor at auctor urna. Velit euismod in pellentesque massa placerat duis. A lacus vestibulum sed arcu non odio euismod. Maecenas accumsan lacus vel facilisis volutpat est velit. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus.'}];

  constructor() { }

  ngOnInit(): void {
  }

}
