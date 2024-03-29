import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  // ngFor
  partnersList: string[] = ['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5']
  
  // ngIf
  ngIfBoolean: boolean = false

  // ngClass
  ngClassBoolean: boolean = false

  //ngStyle
  boldBoolean: boolean = true
  italicBoolean: boolean = false

  currentStyles = {
    'font-style': this.italicBoolean ? 'italic' : 'normal',
    'font-weight': this.boldBoolean ? 'bold' : 'normal'
  }

  theId: string = 'myID'
  //@ViewChild
  @ViewChild('tab1Button') tab1Button!: ElementRef

  // ngIf else (using ng-template)
  showButtons: boolean = false


  ngAfterViewInit() {
  }
 
}
