import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  preview: boolean = true;
  text: string = "";
  messages = [
    {
      content: "You want sum h4lp? And you like MEMES? I can help you if you want to know something about Drabot (me) or the fact generator.",
      keywords: [""]
    }
  ]
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
  }

  toggleChatbox() {
    this.preview = !this.preview;
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
