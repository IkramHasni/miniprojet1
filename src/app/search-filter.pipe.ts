import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[] | null | undefined, filterText: string): any[] {
    if (!list) return [];
    const texte = (filterText ?? '').toLowerCase();
    return list.filter(item => item.nomFragrance.toLowerCase().includes(texte));
  }
}
