import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  messages = [
    {
      content: "You want sum h4lp? And you like MEMES? I can help you if you want to know something about Drabot (me) or the Fact Generator.",
      keywords: [""],
      id: "msg-0",
      then: [
        "Drabot",
        "The Facts Generator"
      ]
    }
  ];
  responses = [
    {
      content: "The <strike>best</strike> good Discord Bot !",
      keywords: ["drabot"],
      then: []
    },
    {
      content: `Make GET requests to
      <a target='_blank' href='https://factgenerator.herokuapp.com/generate'>https://factgenerator.herokuapp.com/generate</a>.<br>
      <br>
      Alternatively you can use
      <a target='_blank' href='https://factgenerator.herokuapp.com/bulk/1000'>https://factgenerator.herokuapp.com/bulk/[number]</a>
      to generate more facts at the same time.<br>
      <br>
      Finally, you can use
      <a target='_blank' href='https://factgenerator.herokuapp.com/generate/stalin_hitler'>https://factgenerator.herokuapp.com/generate/[query]</a>
      to fetch a fact including specific words. (words must be separated by _)`,
      keywords: ["use", "fact"],
      then: []
    },
    {
      content: `Why don't you just take a look at it yourself ?
       <a target='_blank' href='https://factgenerator.herokuapp.com/database'>(not that big)</a>`,
      keywords: ["fact", "database"],
      then: []
    },
    {
      content: `It's quite simple honestly. There is a database of words and sentences.
      One sentence is chosen randomly then the gaps are filled until the sentence is complete.`,
      keywords: ["how", "fact"],
      then: [
        "How big is the Fact Generator database ?"
      ]
    },
    {
      content: `The Facts Generator was initially created to have my Discord bot say random stupid things.
      At some point I also implemented a Twitter Bot that did a similar thing.<br>
      <br>
      So I decided to separate it from my Discord bot and make it standalone.
      It is now available <a target='_blank' href='https://factgenerator.herokuapp.com'>here</a>.`,
      keywords: ["fact"],
      then: [
        "How does the Fact Generator work ?",
        "How big is the Fact Generator database ?",
        "How can I use the Fact Generator ?"
      ]
    },
    {
      content: "Wakannai yo.",
      keywords: [""],
      then: []
    }
  ];
  @Output() messageEvent = new EventEmitter<string>();
  preview: boolean = true;
  text: string = "";
  oldScroll: number = 0;
  hidden: boolean = false;
  last: number = 0;

  constructor(private sanitizer: DomSanitizer) { }

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
    this.preview = !this.preview;
    if (this.state != 0)
      this.toggleHiddenBackground();
  }

  toggleHiddenBackground() {
    this.messageEvent.emit();
    this.hidden = !this.hidden;
  }

  get lastID() {
    return "msg-" + this.last;
  }

  addMessage(message) {
    message = Object.assign({}, message);
    this.last++;
    message.id = "msg-" + this.last;
    this.messages.push(message);
    if (this.state != 0) {
      setTimeout(() => {
        document.getElementById(this.lastID).scrollIntoView();
      }, 1);
    }
  }

  sendMessage(content = null) {
    if (content === null) {
      if (this.text.length == 0)
        return;
      content = this.text;
      this.text = "";
    }
    let text = content.toLowerCase();
    this.addMessage({
      content: content,
      keywords: [],
      then: []
    });
    setTimeout(() => {
      for (let response of this.responses) {
        if (response.keywords.reduce((acc, keyword) => acc = acc ? text.includes(keyword) : acc, true)) {
          this.addMessage(response);
          return;
        }
      }
    }, 500);
  }

}
