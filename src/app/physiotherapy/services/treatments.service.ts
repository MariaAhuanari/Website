import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Treatment} from "../model/treatment";

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {
//Treatments Endpoint

  basePath='http://localhost:3000/treatments';

  //Common options
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  };

  constructor(private http:HttpClient) { }

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

  //Create Treatment
  create(item: any): Observable<Treatment>{
    return this.http.post<Treatment>(
      this.basePath,
      JSON.stringify(item),
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //Get Treatment by id
  getById(id: any): Observable<Treatment>{
    return this.http.get<Treatment>(
      '${this.basePath}/${id}',
    this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  //Get All Treatments
  getAll(): Observable<Treatment>{
  return this.http.get<Treatment>(this.basePath, this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

  //Get Treatment by Title
  getTreatmentByTitle(title: any): Observable<Treatment>{
    return this.http.get<Treatment>(
      `${this.basePath}?title=${title}`,
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

}
