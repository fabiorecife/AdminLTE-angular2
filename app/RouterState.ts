import {Injectable} from 'angular2/core';
import {Router, RouteParams, Instruction} from 'angular2/router';

// Singleton service for storing router information
@Injectable()
export class RouterState {
  _current: Instruction;
  _last: Instruction;
  _params: RouteParams;
  
  constructor(public router: Router) {
    // subscribe to router url updates
    router.subscribe((url) => {
      // convert the current url into an instruction
      this._getInstruction(url);
    });
  }
  
  private _getInstruction(url) {
    this.router.recognize(url).then((ins) => {
      if (ins) {
        // Store the current route instruction
        this._last = this._current;
        this._current = ins;
      }
    });
  }
  
  current() {
    // return current instruction
    return this._current;
  }
  
  last() {
    // return last instruction
    return this._last;
  }
  
  setParams(params: RouteParams) {
    this._params = params;
  }
  
  getParams(): RouteParams {
    return this._params;
  }
}