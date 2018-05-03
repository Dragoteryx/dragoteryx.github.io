import { Component, OnInit } from '@angular/core';
import { DOMAnimator } from "../DOMAnimator";

@Component({
  selector: 'app-symphogear',
  templateUrl: './symphogear.component.html',
  styleUrls: ['./symphogear.component.css']
})
export class SymphogearComponent extends DOMAnimator implements OnInit {
  gears = [
    [
      {chant: "Balwisyall nescell Gungnir tron", thumb: "../assets/hibiki.jpg"},
      {chant: "Imyuteus Ame no Habakiri tron", thumb: "../assets/tsubasa.jpg"},
      {chant: "Killter Ichaival tron", thumb: "../assets/chris.jpg"},
    ],
    [
      {chant: "Seilien coffin Airgetlám tron", thumb: "../assets/maria.jpg"},
      {chant: "Zeios Igalima raizen tron", thumb: "../assets/kirika.jpg"},
      {chant: "Various Shul Shagana tron", thumb: "../assets/shirabe.jpg"},
    ],
  ]
  constructor() {super()}

  ngOnInit() {
  }

}
