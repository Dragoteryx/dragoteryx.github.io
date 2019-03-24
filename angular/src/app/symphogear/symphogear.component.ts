import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symphogear',
  templateUrl: './symphogear.component.html',
  styleUrls: ['./symphogear.component.css']
})
export class SymphogearComponent implements OnInit {
  gears = [
    {chant: "Balwisyall nescell Gungnir tron", thumb: "./assets/hibiki.jpg", link: "https://symphogear.fandom.com/wiki/Hibiki_Tachibana"},
    {chant: "Imyuteus Ame no Habakiri tron", thumb: "./assets/tsubasa.jpg", link: "https://symphogear.fandom.com/wiki/Tsubasa_Kazanari"},
    {chant: "Killter Ichaival tron", thumb: "./assets/chris.jpg", link: "https://symphogear.fandom.com/wiki/Chris_Yukine"},
    {chant: "Seilien coffin Airgetlám tron", thumb: "./assets/maria.jpg", link: "https://symphogear.fandom.com/wiki/Maria_Cadenzavna_Eve"},
    {chant: "Zeios Igalima raizen tron", thumb: "./assets/kirika.jpg", link: "https://symphogear.fandom.com/wiki/Kirika_Akatsuki"},
    {chant: "Various Shul Shagana tron", thumb: "./assets/shirabe.jpg", link: "https://symphogear.fandom.com/wiki/Shirabe_Tsukuyomi"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
