import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import RegistrationModel from "../model/registration-model";
import {Observable} from "rxjs";
/**
 * Created by NM on 11/6/2016.
 */

@Injectable()

export class RegistrationServiceAPI{

  private backendUri = 'http://api.chess.ligaac.ro/';
  // private backendUri = 'http://api.chess.tdr/';
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }


  register(model: RegistrationModel): Observable<any> {
    return this.http.post(this.backendUri + 'api/Applications/Register', model, this.options);
  }

  getStatus():{closed:boolean, reason?:string} {
    return {closed: true, reason: "Înscrierile vor începe pe 28 noiembrie."}
  }
}
