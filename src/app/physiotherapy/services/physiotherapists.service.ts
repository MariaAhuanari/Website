import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Physiotherapist} from "../model/physiotherapist";
import {Treatment} from "../model/treatment";

@Injectable({
  providedIn: 'root'
})
export class PhysiotherapistsService {
//Physiotherapists Endpoint

  basePath='http://localhost:3000/physiotherapists';

  //Common options
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };
  constructor(private http:HttpClient) {}


  handleError(error: HttpErrorResponse){
    if(error.error instanceof  ErrorEvent){
      //Default error handling
      console.log('An error occurred: ${error.error.message}');
    }else{
      console.log('Backend returned code ${error.message}, body was: ${error.error}');
    }
    //Return Observable with Error Message to Client
    return throwError(()=> new Error('Something happened with request, please try again later'));
  }

  //Create Physiotherapist
  createPhysiotherapist(item: any): Observable<Physiotherapist>{
    return this.http.post<Physiotherapist>(
      this.basePath,
      JSON.stringify(item),
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //Get Physiotherapist by id
  getPhysiotherapistById(id: any): Observable<Physiotherapist>{
    return this.http.get<Physiotherapist>(
      '${this.basePath}/${id}',
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //Get All Physiotherapist
  getAllPhysiotherapists(): Observable<Physiotherapist>{
    return this.http.get<Physiotherapist>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Get Physiotherapist by Name
  getPhysiotherapistByName(name: any): Observable<Treatment>{
    return this.http.get<Treatment>(
      `${this.basePath}?first_name=${name}`,
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }


}
