import { Component, Input, Output, ViewChild, ElementRef, OnInit, EventEmitter } from '@angular/core';
import { HttpService } from '../../../commons/services/http/http.service';
import { WorkerService } from '../../../commons/services/worker/worker.service';

import { MenuLinks } from '../../../commons/interfaces/menu/menu';
import { SidebarLinks, SidebarParentLinks } from '../../../commons/interfaces/sidebar/sidebar';
import { Footer } from '../../../commons/interfaces/footer/footer';

declare var gnMenu;

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @ViewChild('sidebarfixed') sidebarfixed: ElementRef;

  @ViewChild('topnav') topnav: ElementRef;

  @ViewChild('contentmain') contentmain: ElementRef;

  @ViewChild('footernav') footernav: ElementRef;

  @Input('brandname') brandname: string;

  @Input('sidebartype') sidebartype: string = 'non-blocking';

  @Input('sidebarItems') sidebarItems: (SidebarLinks | SidebarParentLinks)[] = [];

  @Input('topnavItems') topnavItems: MenuLinks[] = [];

  @Input('footer') footer: Footer = { copyright: { tag: '', text: '', link: '/home', type: 'internal' }, nav: [], social: [] };

  sidebarclosed: boolean = true;

  styleList: any[] = [];

  accordianClassList: any[] = [];

  menuclosed: boolean = true;

  @ViewChild('searchform') searchform;

  constructor(private _h: HttpService, private _wsrv: WorkerService) { }

  openNav(): boolean {
    this.sidebarclosed = false;
    this.sidebarfixed.nativeElement.style.width = '250px';
    this.topnav.nativeElement.style.left = '250px';
    this.contentmain.nativeElement.style.marginLeft = '250px';
    this.footernav.nativeElement.style.left = '250px';
    this.footernav.nativeElement.style.right = '0px';
    this.footernav.nativeElement.style.position = 'absolute';
    return false;
  }

  closeNav(): boolean {
    this.sidebarclosed = true;
    this.sidebarfixed.nativeElement.style.width = '0';
    this.topnav.nativeElement.style.left = '0';
    this.contentmain.nativeElement.style.marginLeft = '0px';
    this.footernav.nativeElement.style.left = '0';
    this.footernav.nativeElement.style.right = '0px';
    this.footernav.nativeElement.style.position = 'absolute';
    return false;
  }

  mobileAndTabletCheck(): boolean {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
    return check;
  };

  closeMobileNav(obj): void {
    let mobile = this.mobileAndTabletCheck();
    if (!!mobile) {
      this.closeNav();
      window.scroll(0, 0);
    }
  }

  routeMain(): void {
    window.location.href = '#/home';
    window.scroll(0, 0);
  }

  hashChangeFunction(url): void {
    let that = this, routeUri = '', bmarkUri = '';
    if (url) {
      console.log('DEBUG: HashChange Init', url);
      let cleaner = this._h.cleanUrl(url, window.location.host);
      routeUri = cleaner.routeUri;
      bmarkUri = cleaner.bmarkUri;

      that._h.fileUrl = routeUri;
      that._h.bmarkUri = bmarkUri;
      if (that._h.fileUrl !== window.location.host) {
        console.log('DEBUG: HashChangeURI One', routeUri, bmarkUri);
        that._h.routeme.emit({ url: routeUri, host: window.location.host });
      } else if (that._h.fileUrl === window.location.host) {
        console.log('DEBUG: HashChangeURI Two', routeUri, bmarkUri);
        that._h.fileUrl = '';
        that._h.bmarkUri = '';
        that._h.routeme.emit({ url: '', host: window.location.host });
      } else {
        console.log('DEBUG: HashChangeURI Three', routeUri, bmarkUri);
        that._h.fileUrl = '';
        that._h.bmarkUri = '';
        window.location.href = url;
      }
      window.scroll(0, 0);
    } else {
      console.log('DEBUG: HashChangeURI Four - Error occurred due to no url string', url);
    }
  }

  openItems(event: any, i: number): void {
    if (this.accordianClassList[i]['active-sidebar'] == true) {
      this.accordianClassList[i] = { 'accordion': true, 'active-sidebar': false };
    } else {
      this.accordianClassList[i] = { 'accordion': true, 'active-sidebar': true };
    }
    if (this.styleList[i]['display'] == 'block') {
      this.styleList[i] = { 'display': 'none' };
    } else {
      this.styleList[i] = { 'display': 'block' };
    }
  }

  addEventListenersAccordian(): void {
    let acc = document.getElementsByClassName('accordion');
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active-sidebar');
        let panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
          panel.style.display = 'none';
        } else {
          panel.style.display = 'block';
        }
      });
    }
  }

  searchDoc() {
    this._wsrv.postMessage({
      action: 'search',
      key: this.searchform.nativeElement.value,
      urls: ['/assets/mddocs/home.m', '/assets/mddocs/credits.md', '/assets/mddocs/intro.md']
    });
    return false;
  }

  ngOnInit(): void {
    this.addEventListenersAccordian();

    console.log('DEBUG: Menubar Host OnInit', window.location.host);
    window.onhashchange = function () {
      this.hashChangeFunction(window.location.href);
    }.bind(this);

    document.addEventListener("DOMContentLoaded", function (event) {
      if (!this.mobileAndTabletCheck()) {
        this.openNav();
      }
    }.bind(this));
  }

}
