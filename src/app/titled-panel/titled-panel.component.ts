import { Component, Input, OnInit, HostListener, Inject } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Title, DOCUMENT } from '@angular/platform-browser';
// import {INbpProgressConfiguration} from 'cjlib';




let nextId = 0;

@Component({
  selector: 'app-titled-panel',
  templateUrl: './titled-panel.component.html',
  styleUrls: ['./titled-panel.component.less']
})
export class TitledPanelComponent implements OnInit {
  @Input() id: String = `app-titled-panel-${++nextId}`;
  @Input() nbpTitle: String;

  /**
  * Testo da associare al link pagina precedente. 
  *
  * textPrevLink = stringa  valore di default "Pagina Precedente | translate"
  *
  */
  @Input() textPrevLink: String = "Pagina Precedente";

  subtitle;
  sticky = false;

  constructor(private titleService: Title,
    private router: Router,
    @Inject(DOCUMENT) private document: Document) {
    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild;
        this.subtitle = route.data.subtitle;
        // console.log('Page', this.page);
      }
    });
  }

  getTitle() {
    return this.titleService.getTitle();
  }

  getSubtitle() {
    return this.subtitle
  }

  prevPageFn() {
    this.router.navigate(['home']);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(number)
    if (number > 70) {
      this.sticky = true
    } else {
      this.sticky = false
    }

    //we'll do some stuff here when the window is scrolled
  }

  noBorder() {
    if (this.titleService.getTitle() == "Sequenziale con Sottostep" || this.titleService.getTitle() == "Sequenziale senza Sottostep") {
      return true
    } else {
      return false
    }
  }

  ngOnInit() {
  }



}

