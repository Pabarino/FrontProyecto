/**
 * Next Up Games API
 * API de proyecto final Desarrollo de Aplicaciones Web.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/';

import { Juego } from '../model/juego';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class JuegoService {

    protected basePath = 'http://localhost:8080/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Create employee
     * 
     * @param body Objeto juego creado
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createGame(body: Juego, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createGame(body: Juego, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createGame(body: Juego, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createGame(body: Juego, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createGame.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/juego/create`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Borrar juego
     * 
     * @param idJuego Id del usuario que tiene que ser eliminado
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteGame(idJuego: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteGame(idJuego: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteGame(idJuego: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteGame(idJuego: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idJuego === null || idJuego === undefined) {
            throw new Error('Required parameter idJuego was null or undefined when calling deleteGame.');
        }

        let headers = this.defaultHeaders;
        if (idJuego !== undefined && idJuego !== null) {
            headers = headers.set('idJuego', String(idJuego));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/juego/delete`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Recibir todos los juegos
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllGames(observe?: 'body', reportProgress?: boolean): Observable<Array<Juego>>;
    public getAllGames(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Juego>>>;
    public getAllGames(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Juego>>>;
    public getAllGames(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Juego>>(`${this.basePath}/juego/getAll`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Recibir juego por id
     * 
     * @param idJuego El id del juego que se quiere recibir.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGameById(idJuego: number, observe?: 'body', reportProgress?: boolean): Observable<Juego>;
    public getGameById(idJuego: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Juego>>;
    public getGameById(idJuego: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Juego>>;
    public getGameById(idJuego: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idJuego === null || idJuego === undefined) {
            throw new Error('Required parameter idJuego was null or undefined when calling getGameById.');
        }

        let headers = this.defaultHeaders;
        if (idJuego !== undefined && idJuego !== null) {
            headers = headers.set('idJuego', String(idJuego));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Juego>(`${this.basePath}/juego/getOneById`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Actualizar juego
     * 
     * @param idJuego id del juego que tiene que ser actualizado
     * @param body Objeto juego actualizado
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateGame(idJuego: number, body: Juego, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateGame(idJuego: number, body: Juego, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateGame(idJuego: number, body: Juego, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateGame(idJuego: number, body: Juego, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idJuego === null || idJuego === undefined) {
            throw new Error('Required parameter idJuego was null or undefined when calling updateGame.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateGame.');
        }

        let headers = this.defaultHeaders;
        if (idJuego !== undefined && idJuego !== null) {
            headers = headers.set('idJuego', String(idJuego));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/juego/update`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
