import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
// export class UserGuard implements CanActivate {

export class UserGuard  {

    constructor(
        private _router: Router,
        private _authService: AuthService
    ) {

    }

    // canActivate() {
    //     let identity = this._authService.getIdentity();
        
    //     if (identity && (identity.role == 'ROLE_USER' || identity.role == 'ROLE_ADMIN')) {
    //         return true;
    //     } else {
    //         this._router.navigate(['/login']);
    //         return false;
    //     }
    // }
}