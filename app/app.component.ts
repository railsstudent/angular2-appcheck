import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";

@Component({
    selector: 'main-nav',
    directives: [MATERIAL_DIRECTIVES],
    providers: [SidenavService],
    templateUrl: 'app/templates/app.html'
})
export class AppComponent {

  // dependency injection
  constructor(public sidenav: SidenavService,
    public media: Media) {

  }

  hasMedia(breakSize: string): boolean {
    return this.media.hasMedia(breakSize);
  }

  open(name: string) {
    this.sidenav.show(name);
  }

  close(name: string) {
    this.sidenav.hide(name);
  }
}
