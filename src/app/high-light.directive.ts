import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';
@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(el : ElementRef) { 
    // el : ElementRef
    // el.nativeElement.classList.add('alert','alert-warning');
  }

}
