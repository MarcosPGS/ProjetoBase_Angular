import {BehaviorSubject, Observable} from 'rxjs';

export class Store<T> {

  private $state: any;
  private state$$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this.state$$ = new BehaviorSubject(initialState);
    this.state$ = this.state$$.asObservable();
  }

  get state$(): Observable<T> {
    return this.$state;
  }

  set state$(state: Observable<T>) {
    this.$state = state;
  }

  get state(): T {
    return this.state$$.getValue();
  }

  setState(nextState: T): void {
    this.state$$.next(nextState);
  }
}
