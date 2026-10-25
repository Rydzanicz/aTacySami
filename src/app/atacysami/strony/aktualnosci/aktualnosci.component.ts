import { Component, HostListener } from '@angular/core';
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

  // Numer aktualnie wyświetlanego zdjęcia w galerii każdego posta
  private aktywne: { [klucz: string]: number } = {};

  // Powiększenie (lightbox) — null gdy zamknięte
  lightbox: { wpis: Aktualnosc; indeks: number } | null = null;

  wybierzRok(rok: number): void {
    if (rok === this.rokWybrany) return;
    this.animujKarte = false;
    this.lightbox = null;
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

  // ---------- Galeria w poście ----------

  zdjecia(w: Aktualnosc): string[] {
    return w.zdjecia ?? [];
  }

  private klucz(w: Aktualnosc): string {
    return w.dataISO + '|' + w.tytul;
  }

  indeks(w: Aktualnosc): number {
    return this.aktywne[this.klucz(w)] ?? 0;
  }

  wybierz(w: Aktualnosc, i: number): void {
    this.aktywne[this.klucz(w)] = i;
  }
trackByZdjecie(index: number, zdjecie: string): string {
  return zdjecie;
}
  nastepne(w: Aktualnosc): void {
    const n = this.zdjecia(w).length;
    this.wybierz(w, (this.indeks(w) + 1) % n);
  }

  poprzednie(w: Aktualnosc): void {
    const n = this.zdjecia(w).length;
    this.wybierz(w, (this.indeks(w) - 1 + n) % n);
  }

  // ---------- Powiększenie (lightbox) ----------

  otworzLightbox(w: Aktualnosc, i: number): void {
    this.lightbox = { wpis: w, indeks: i };
  }

  zamknijLightbox(): void {
    if (this.lightbox) {
      // po zamknięciu galeria w poście pokazuje to samo zdjęcie, które oglądano
      this.wybierz(this.lightbox.wpis, this.lightbox.indeks);
    }
    this.lightbox = null;
  }

  lbZdjecie(): string {
    return this.lightbox ? this.zdjecia(this.lightbox.wpis)[this.lightbox.indeks] : '';
  }

  lbLiczba(): number {
    return this.lightbox ? this.zdjecia(this.lightbox.wpis).length : 0;
  }

  lbNastepne(): void {
    if (!this.lightbox) return;
    const n = this.lbLiczba();
    this.lightbox = { ...this.lightbox, indeks: (this.lightbox.indeks + 1) % n };
  }

  lbPoprzednie(): void {
    if (!this.lightbox) return;
    const n = this.lbLiczba();
    this.lightbox = { ...this.lightbox, indeks: (this.lightbox.indeks - 1 + n) % n };
  }

  // Klawiatura: Esc zamyka, strzałki przełączają zdjęcia
  @HostListener('document:keydown', ['$event'])
  obsluzKlawisz(e: KeyboardEvent): void {
    if (!this.lightbox) return;
    if (e.key === 'Escape') {
      this.zamknijLightbox();
    } else if (e.key === 'ArrowRight') {
      this.lbNastepne();
    } else if (e.key === 'ArrowLeft') {
      this.lbPoprzednie();
    }
  }
}
