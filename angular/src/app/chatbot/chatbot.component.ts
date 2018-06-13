import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  messages = [
    {
      content: "You want sum h4lp? And you like MEMES? I can help you if you want to know something about Drabot (me) or the fact generator.",
      keywords: [""]
    }
  ];
  responses = [
    {
      content: "WIP (drabot)",
      keywords: ["drabot"]
    },
    {
      content: "WIP (facts)",
      keywords: ["fact"]
    },
    {
      content: "Wakannai yo.",
      keywords: [""]
    }
  ];
  @Output() messageEvent = new EventEmitter<string>();
  preview: boolean = true;
  text: string = "";
  oldScroll: number = 0;
  hidden: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  @HostListener("window:resize") resize() {
    if (!this.preview) {
      if ((this.state != 0 && !this.hidden) ||
      (this.state == 0 && this.hidden))
        this.toggleHiddenBackground();
    }
  }

  get state() {
    if (window.innerWidth > 500 && window.innerHeight > 600)
      return 0;
    else if (window.innerWidth <= 500 && window.innerHeight > 600)
      return 1;
    else if (window.innerWidth > 500 && window.innerHeight <= 600)
      return 2;
    else if (window.innerWidth <= window.innerHeight)
      return 1;
    else return 2;
  }

  get styles() {
    if (this.state == 0) { // desktop
      return {
        window: {
          height: "400px",
          width: "300px",
          position: "fixed",
          bottom: "85px",
          right: 0,
          "border-top-left-radius": "15px",
          "border-bottom-left-radius": "15px"
        },
        header: {
          height: "35px",
          "border-top-left-radius": "15px"
        },
        messages: {
          height: "325px",
          "overflow-y": "scroll"
        },
        form: {
          height: "40px",
          "border-bottom-left-radius": "15px"
        },
        text: {
          width: "70%"
        },
        submit: {}
      }
    } else { // mobile
      return this.state == 1 ? { // portrait
       window: {
         height: "100%",
         width: "100%",
       },
       header: {
         position: "fixed",
         top: 0,
         height: "60px"
       },
       messages: {
         "min-height": (window.innerHeight - 160) + "px",
         "margin-top": "60px",
         "margin-bottom": "98px"
       },
       form: {
         position: "fixed",
         bottom: 0,
         height: "98px"
       },
       text: {
         height: "48px",
         "margin-top": "5px",
         width: "90%"
       },
       submit: {
         width: "90%"
       }
     } : { // paysage
       window: {
         height: "100%",
         width: "100%",
       },
       header: {
         position: "fixed",
         top: 0,
         height: "60px"
       },
       messages: {
         "min-height": (window.innerHeight - 102) + "px",
         "margin-top": "60px",
         "margin-bottom": "40px"
       },
       form: {
         position: "fixed",
         bottom: 0,
         height: "40px"
       },
       text: {
         width: "80%"
       },
       submit: {}
     }
    }
  }

  toggleChatbox() {
    if (this.preview)
      this.oldScroll = window.scrollY;
    else window.scroll(0, this.oldScroll);
    this.preview = !this.preview;
    if (this.state != 0)
      this.toggleHiddenBackground();
  }

  toggleHiddenBackground() {
    this.messageEvent.emit();
    this.hidden = !this.hidden;
  }

  sendMessage(content = null) {
    if (content === null) {
      if (this.text.length == 0)
        return;
      content = this.text;
      this.text = "";
    }
    let text = content.toLowerCase();
    this.messages.push({
      content: content,
      keywords: []
    });
    setTimeout(() => {
      for (let response of this.responses) {
        if (response.keywords.reduce((acc, keyword) => acc = acc ? text.includes(keyword) : acc, true)) {
          this.messages.push(response);
          return;
        }
      }
    }, 500);
  }

}
