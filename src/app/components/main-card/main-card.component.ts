import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [],
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
  constructor(){}

  ngOnInit(): void {
    
  }
}
