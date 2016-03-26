import {Component, OnInit, AfterViewInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardComponent} from './pages/dashboard.component';
import {ButtonsComponent} from './pages/UI/buttons.component';
import {FooterComponent} from './pages/footer.component';
import {SidebarComponent} from './pages/sidebar.component';
import {ControlSidebarComponent} from './pages/control-sidebar.component';
import {HeaderComponent} from './pages/header.component';
import {GeneralComponent} from './pages/UI/general.component';
import {IconsComponent} from './pages/UI/icons.component';
import {SlidersComponent} from './pages/UI/sliders.component';
import {TimelineComponent} from './pages/UI/timeline.component';
import {ModalsComponent} from './pages/UI/modals.component';
import {GeneralFormsComponent} from './pages/forms/general.forms.component';

declare var System;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES,
      FooterComponent,SidebarComponent,
      ControlSidebarComponent,HeaderComponent],
    providers: [
      ROUTER_PROVIDERS
    ]
})
@RouteConfig([

  //PAGES
  { path: '/ui/buttons',  name: 'Buttons',  component: ButtonsComponent },
  { path: '/ui/general',  name: 'General',  component: GeneralComponent },
  { path: '/ui/icons',  name: 'Icons',  component: IconsComponent },
  { path: '/ui/sliders',  name: 'Sliders',  component: SlidersComponent },
  { path: '/ui/timeline',  name: 'Timeline',  component: TimelineComponent },
  { path: '/ui/modals',  name: 'Modals',  component: ModalsComponent },
  { path: '/forms/general',  name: 'GeneralForms',  component: GeneralFormsComponent },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])
export class AppComponent implements OnInit, AfterViewInit {


  ngOnInit() {
    console.log("NG INIT - AppComponent");
    //<!-- Bootstrap 3.3.5 -->
    System.import('bootstrap/js/bootstrap.min');
    //<!-- Morris.js charts -->
    System.import('plugins/outros/raphael-min');
    System.import('plugins/morris/morris.min');
    //<!-- Sparkline -->
    System.import('plugins/sparkline/jquery.sparkline.min');
    //<!-- jQuery Knob Chart -->
    System.import('plugins/knob/jquery.knob');
    //<!-- daterangepicker -->
    System.import('plugins/outros/moment.min');
    System.import('plugins/daterangepicker/daterangepicker');
    //<!-- datepicker -->
    System.import('plugins/datepicker/bootstrap-datepicker');
    //<!-- Bootstrap WYSIHTML5 -->
    System.import('plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min');
    //<!-- Slimscroll -->
    System.import('plugins/slimScroll/jquery.slimscroll.min');
    //<!-- FastClick -->
    System.import('plugins/fastclick/fastclick');
    //<!-- AdminLTE App -->
    System.import('dist/js/app.min');
    //<!-- AdminLTE for demo purposes -->
    System.import('dist/js/demo');

  }
  ngAfterViewInit() {
    console.log("AFTER VIEW INIT - AppComponent");
  }

}
