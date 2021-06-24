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

import { Observable }                                        from 'rxjs';

import { Usuario } from '../model/usuario';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AuthService {

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
     * Recibir contraseña de usuario
     * 
     * @param email Email del usuario.
     * @param oldPassword La contraseña vieja del usuario.
     * @param newPassword La contraseña nueva del usuario.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public changePassword(email: string, oldPassword: string, newPassword: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public changePassword(email: string, oldPassword: string, newPassword: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public changePassword(email: string, oldPassword: string, newPassword: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public changePassword(email: string, oldPassword: string, newPassword: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling changePassword.');
        }

        if (oldPassword === null || oldPassword === undefined) {
            throw new Error('Required parameter oldPassword was null or undefined when calling changePassword.');
        }

        if (newPassword === null || newPassword === undefined) {
            throw new Error('Required parameter newPassword was null or undefined when calling changePassword.');
        }

        let headers = this.defaultHeaders;
        if (email !== undefined && email !== null) {
            headers = headers.set('email', String(email));
        }
        if (oldPassword !== undefined && oldPassword !== null) {
            headers = headers.set('oldPassword', String(oldPassword));
        }
        if (newPassword !== undefined && newPassword !== null) {
            headers = headers.set('newPassword', String(newPassword));
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

        return this.httpClient.put<any>(`${this.basePath}/auth/changePassword`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Logs user into the system
     * 
     * @param email El email del usuario para el login
     * @param password La contraseña para el login
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public login(email: string, password: string, observe?: 'body', reportProgress?: boolean): Observable<Usuario>;
    public login(email: string, password: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Usuario>>;
    public login(email: string, password: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Usuario>>;
    public login(email: string, password: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling login.');
        }

        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling login.');
        }

        let headers = this.defaultHeaders;
        if (email !== undefined && email !== null) {
            headers = headers.set('email', String(email));
        }
        if (password !== undefined && password !== null) {
            headers = headers.set('password', String(password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Usuario>(`${this.basePath}/auth/login`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Hace log out a la sesion
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public logout(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public logout(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public logout(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public logout(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/auth/logout`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Recibir contraseña del usuario
     * 
     * @param email El correo del usuario.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public recoverPassword(email: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public recoverPassword(email: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public recoverPassword(email: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public recoverPassword(email: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling recoverPassword.');
        }

        let headers = this.defaultHeaders;
        if (email !== undefined && email !== null) {
            headers = headers.set('email', String(email));
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

        return this.httpClient.get<any>(`${this.basePath}/auth/recoverPassword`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Recibir la contraseña del usuario
     * 
     * @param token Json Web Token
     * @param newPassword La contraseña nueva.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public resetPassword(token: string, newPassword: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public resetPassword(token: string, newPassword: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public resetPassword(token: string, newPassword: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public resetPassword(token: string, newPassword: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling resetPassword.');
        }

        if (newPassword === null || newPassword === undefined) {
            throw new Error('Required parameter newPassword was null or undefined when calling resetPassword.');
        }

        let headers = this.defaultHeaders;
        if (newPassword !== undefined && newPassword !== null) {
            headers = headers.set('newPassword', String(newPassword));
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

        return this.httpClient.put<any>(`${this.basePath}/auth/resetPassword/${encodeURIComponent(String(token))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
