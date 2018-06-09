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
      auto: true
    }
  ]
  reponses = {
    drabot: {
      content: "WIP (drabot)",
      auto: true
    },
    facts: {
      content: "WIP (facts)",
      auto: true
    },
    else: {
      content: "Wakannai yo.",
      auto: true
    }
  }

  constructor() { }

  ngOnInit() {
  }

  toggleChatbox() {
    this.preview = !this.preview;
  }

  sendMessage() {
    if (this.text.length == 0) return;
    this.messages.push({
      content: this.text,
      auto: false
    });
    let text = this.text.toLowerCase();
    this.text = "";
    setTimeout(() => {
      let wakaru = false;
      if (text.includes("drabot")) {
        wakaru = true;
        this.messages.push(this.reponses.drabot);
      }
      if (text.includes("fact")) {
        wakaru = true;
        this.messages.push(this.reponses.facts);
      }
      if (!wakaru) {
        this.messages.push(this.reponses.else);
      }
    }, 1000);
  }

}
