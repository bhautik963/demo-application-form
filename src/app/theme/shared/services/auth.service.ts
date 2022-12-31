
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    token: string |any;
    private url: string | any;
    protected loggedIn = false;
    private baseUrl: string = environment.apiUrl + environment.version;
    private agentUrl:string = environment.apiUrl + environment.aVersion;
    constructor(private http: HttpClient, private router: Router) { }

    isAuthenticated(): boolean {
        const storageValues = JSON.parse(localStorage.getItem('accessToken') || 'null');
        if (storageValues !== null && storageValues !== '') {
            return true;
        }
        else {
            return false;
        }

        // return moment().isBefore(moment.unix(this.storageValues.exp));
    }


    isLoggedIn(url: string): boolean {
        const storageValues = JSON.parse(localStorage.getItem('accessToken') || 'null');
        if (storageValues !== null && storageValues !== '') {
            if (url === '/' || url === '/auth/sign-in' || url === '/auth/forgot-password' || url === '/auth/reset-password') {
                this.router.navigate(['/components/crm/dashboard']);

                return false;
            } else {
                return true;
            }
        } else {
            if (url !== '/auth/sign-in' && url !== '/auth/forgot-password') {
                if (url === '/auth/forgot-password') {
                    this.router.navigate(['/auth/forgot-password']);
                } else {
                    this.router.navigate(['/auth/sign-in']);
                }
                return false;
            } else {
                return true;
            }
        }

    }
    isAgentLoggedIn(url: string): boolean {
        const storageValues = JSON.parse(localStorage.getItem('agentToken') || 'null');
        if (storageValues !== null && storageValues !== '') {
            if (url === '/agent' || url === '/agent/login') {
                this.router.navigate(['/agent/agentauth']);

                return false;
            } else {
                return true;
            }
        } 
        else {
            if (url !== '/agent/login') {
                if (url === '/auth/forgot-password') {
                    this.router.navigate(['/auth/forgot-password']);
                } else {
                    this.router.navigate(['/agent/login']);
                }
                return false;
            } else {
                return true;
            }
        }
        
    }

    login(data:any) {
        return this.http.post<any>(`${this.baseUrl}auth/login`, data, { observe: 'response' as 'body' })
    }
    agentLogin(data:any){
        console.log(data);
        return this.http.post<any>(`${this.agentUrl }agent/auth/login`, data, { observe: 'response' as 'body' })
    }

    forgotPassword(data:any) {
        return this.http.post<any>(`${this.baseUrl}auth/password/forgot`, data).pipe(
            map(user => user)
        );
    }

    resetPassword(data:any, token:any) {
        return this.http.post<any>(`${this.baseUrl}auth/password/reset/${token}`, data).pipe(
            map(user => user)

        );
    }

    logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('admintype');
        this.router.navigate(['/auth/sign-in']);
    }
    
    logoutAgent() {
        localStorage.removeItem('agentToken');
        localStorage.removeItem('admintype');
        this.router.navigate(['/agent/login']);
    }


}
