import { Component, OnInit } from '@angular/core';
import { BuzzerService } from './buzzer.service';
import * as Toast from "nativescript-toast";

@Component({
  selector: 'ns-buzzer',
  templateUrl: './buzzer.component.html',
  styleUrls: ['./buzzer.component.css']
})
export class BuzzerComponent implements OnInit {

  constructor(private service: BuzzerService) { }

  ngOnInit(): void {
  	// TODO: security - oauth
  }


  onTap() {
  	this.service.postBuzzerCommand().subscribe(response => {
  		console.log(response);
  		Toast.makeText("Buzzer's gonna buzz...", "long").show();
  	}, error => {
  		console.log(error);
  		Toast.makeText("Something's wrong, try later :/", "long").show();
  	});
  }
}
