import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToIcon',
  standalone: true
})
export class TextToIconPipe implements PipeTransform {

  transform(word:string): string {
    switch(word){
      case 'שמח':{
        return '😀'
      }
      case 'עצוב':{
        return '🙁'
      }
      case 'חושב':{
        return '🤔'
      }
      case 'ישן':{
        return '😴'
      }
      case 'צוחק':{
        return '😅'
      }
      case 'כלום':{
        return 'כלום'
      }
    }

    return 'none'
  }

}
