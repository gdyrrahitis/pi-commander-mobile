import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuzzerService {
	// TODO: Add Heroku URL
	private buzzerServiceUrl = "https://pi-commander-microservice.herokuapp.com/buzzer";

	constructor(private http: HttpClient) { }

	postBuzzerCommand() {
		let options = this.createRequestOptions();
		return this.http.post(this.buzzerServiceUrl, { "turn_on": true, "duration": 1 }, { headers: options });
	}

    private createRequestOptions() {
        let headers = new HttpHeaders({"Content-Type": "application/json" });
        return headers;
    }
}
