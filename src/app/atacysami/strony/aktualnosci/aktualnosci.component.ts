import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AKTUALNOSCI, Aktualnosc } from '../../core/aktualnosci-data';

@Component({
  selector: 'app-aktualnosci',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aktualnosci.component.html',
  styleUrls: ['./aktualnosci.component.scss']
})
export class AktualnosciComponent {
  wszystkie: Aktualnosc[] = AKTUALNOSCI;

  lata: number[] = [...new Set(this.wszystkie.map(w => w.rok))].sort((a, b) => b - a);

  rokWybrany: number = this.lata[0];
  animujKarte = true;

  wybierzRok(rok: number): void {
    if (rok === this.rokWybrany) return;
    this.animujKarte = false;
    setTimeout(() => {
      this.rokWybrany = rok;
      this.animujKarte = true;
    }, 0);
  }

  get wpisyRoku(): Aktualnosc[] {
    return this.wszystkie
      .filter(w => w.rok === this.rokWybrany)
      .sort((a, b) => b.dataISO.localeCompare(a.dataISO));
  }
}

