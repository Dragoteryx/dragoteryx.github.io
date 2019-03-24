import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmodaddons',
  templateUrl: './gmodaddons.component.html',
  styleUrls: ['./gmodaddons.component.css']
})
export class GmodaddonsComponent implements OnInit {
  addons = [
    {
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1560118657",
      title: "DrGBase | Nextbot base",
      thumb: "https://steamuserimages-a.akamaihd.net/ugc/974361625901194636/7627513E9216D833BB240538EB50B73ADBD9E09C/"
    },
    {
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1458629603",
      title: "SCP-682 Nextbot",
      thumb: "https://steamuserimages-a.akamaihd.net/ugc/991240935452124591/1B0528097459C1ABF57AF9D89BE6DA7F9A5DB2D3/"
    },
    {
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1455911028",
      title: "SCP-178-1 Nextbot",
      thumb: "https://steamuserimages-a.akamaihd.net/ugc/991240935450836942/E5102DB02E3C858728563A54A22EFDA437F29B12/"
    },
    {
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1618978376",
      title: "DrGHUD for Sandbox | Modern HUD",
      thumb: "https://steamuserimages-a.akamaihd.net/ugc/959730415488077157/E7860694C3794F71288E47002C5F2922B2942E3F/"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
