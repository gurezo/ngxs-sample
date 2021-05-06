import { Component } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { AddAnimal } from './animal.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-sample';

  // @Select(state => state.animals) animals$: Observable<any>;

  constructor(private store: Store) {
    this.addAnimal('test')
  }

  addAnimal(name: string) {
    // this.store.dispatch(new AddAnimal(name));
    this.store.dispatch([new AddAnimal('Panda'), new AddAnimal('Zebra')]);
    // this.store
    //   .dispatch(new AddAnimal(name))
    //   .pipe(withLatestFrom(this.animals$))
    //   .subscribe(([_, animals]) => {
    //     // do something with animals
    //     console.log('_', _);

    //   });

  }
}
