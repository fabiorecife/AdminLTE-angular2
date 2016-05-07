import {Injector} from 'angular2/core';
import {appInjector} from './app-injector';
import {Auth} from './Auth';
import {Router, ComponentInstruction} from 'angular2/router';

export const isLoggedIn = (to: ComponentInstruction, from: ComponentInstruction, target = ['/home']) => {
	let injector: Injector = appInjector(); // Get the stored reference to the application injector
	let auth: Auth = injector.get(Auth);
	let router: Router = injector.get(Router);

  // return a promise that resolves true/false
	return new Promise((resolve) => {
	  auth.check()
				.subscribe((result) => {
					if (result) {
						resolve(true);
					} else {
						router.navigate(['/Login', {target}]);
						resolve(false);
					}
				});
	});
};
