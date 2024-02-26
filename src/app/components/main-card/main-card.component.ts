import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent implements OnInit{
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string =""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string="0"
  constructor(){}

  ngOnInit(): void {

  }
}
