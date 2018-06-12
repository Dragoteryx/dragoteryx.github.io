import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  @Input() height: string;
  @Input() width: string;
  responsive: boolean = false;
  preview: boolean = true;
  text: string = "";
  headerHeight: string = "35px";
  formHeight: string = "35px";
  windowWidth: string;
  windowHeight: string;
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
  ]

  constructor() { }

  ngOnInit() {
    this.responsive = window.innerWidth <= 500;
    this.formHeight = window.innerWidth > 500 ? "35px" : "100px";
    this.headerHeight = window.innerWidth > 500 ? "35px" : "55px";
    this.windowWidth = window.innerWidth + "px";
    this.windowHeight = window.innerHeight + "px";
    if (this.responsive) {
      this.width = this.windowWidth;
      this.height = this.windowHeight;
    }
  }

  toggleChatbox() {
    this.preview = !this.preview;
    if (this.responsive)
      this.messageEvent.emit("toggleHidden");
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

  get messagesHeight() {
    let height = Number(this.height.replace("px", ""));
    let headerHeight = Number(this.headerHeight.replace("px", ""));
    let formHeight = Number(this.formHeight.replace("px", ""));
    let mh = height - headerHeight - formHeight;
    mh = this.responsive ? mh - 10 : mh;
    return mh + "px";
  }

  get getStyle() {
    if (this.responsive)
    return {
      "max-width": "100%",
      "bottom": "0",

    }
    else
    return {
      "max-width": "90%",
      "bottom": "85px",
      "border-top-left-radius": "15px",
      "border-bottom-left-radius": "15px",
      "box-shadow": "-5px 5px 10px #0003",
      "position": "fixed"
    }
  }

}
