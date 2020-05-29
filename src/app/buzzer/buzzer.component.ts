import { Component, OnInit } from '@angular/core';
import { BuzzerService } from './buzzer.service';
import * as Toast from "nativescript-toast";

@Component({
  selector: 'ns-buzzer',
  templateUrl: './buzzer.component.html',
  styleUrls: ['./buzzer.component.css']
})
export class BuzzerComponent implements OnInit {

  private states: { [key: string]: string } = {
    "idle": "Buzz",
    "active": "Wait..."
  };

  private error = false;
  private enabled = true;
  private text: string;

  constructor(private service: BuzzerService) { }

  ngOnInit(): void {
    // TODO: security - oauth
    this.text = this.states["idle"];
  }

  onTap() {
    this.text = this.states["active"];
    this.enabled = false;
  	this.service.postBuzzerCommand().subscribe(response => {
      Toast.makeText("Buzzer's gonna buzz...").show();
      this.text = this.states["idle"];
      this.enabled = true;
  	}, error => {
      this.error = true;
      setTimeout(() => {
        this.error = false;
        this.text = this.states["idle"];
        this.enabled = true;
      }, 1500);
  		Toast.makeText("Something's wrong, try later :/", "long").show();
  	});
  }
}
