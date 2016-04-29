import {Component, OnInit, AfterViewInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


//PAGES
import {DashboardComponent} from './pages/dashboard.component';
import {ButtonsComponent} from './pages/UI/buttons.component';
import {FooterComponent} from './pages/footer.component';
import {SidebarComponent} from './pages/sidebar.component';
import {ControlSidebarComponent} from './pages/control-sidebar.component';
import {HeaderComponent} from './pages/header.component';
//PAGES-UI
import {GeneralComponent} from './pages/UI/general.component' ;
import {IconsComponent} from './pages/UI/icons.component';
import {SlidersComponent} from './pages/UI/sliders.component';
import {TimelineComponent} from './pages/UI/timeline.component';
import {ModalsComponent} from './pages/UI/modals.component';
//PAGES-FORMS
import {GeneralFormsComponent} from './pages/forms/general.forms.component';
import {AdvancedFormsComponent} from './pages/forms/advanced.forms.component';
import {EditorsFormsComponent} from './pages/forms/editors.forms.component';
//PAGES-TABLES
import {SimpleTablesComponent} from './pages/tables/simple.tables.component';
import {DataTablesComponent} from './pages/tables/data.tables.component';

import {CalendarComponent} from './pages/calendar.component';
import {MailboxComponent} from './pages/mailbox/mailbox.component';

//PAGES-EXAMPLES
import {InvoiceComponent} from './pages/examples/invoice.component';
import {ProfileComponent} from './pages/examples/profile.component';



declare var System;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES,
      FooterComponent,SidebarComponent,
      ControlSidebarComponent,HeaderComponent]
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
  { path: '/forms/advanced',  name: 'AdvancedForms',  component: AdvancedFormsComponent },
  { path: '/forms/editors',  name: 'EditorsForms',  component: EditorsFormsComponent },
  { path: '/tables/simple',  name: 'SimpleTables',  component: SimpleTablesComponent },
  { path: '/tables/data',  name: 'DataTables',  component: DataTablesComponent },
  { path: '/calendar',  name: 'Calendar',  component: CalendarComponent },
  { path: '/mailbox/mailbox',  name: 'Mailbox',  component: MailboxComponent },
  { path: '/examples/invoice',  name: 'Invoice',  component: InvoiceComponent },
  { path: '/examples/profile',  name: 'Profile',  component: ProfileComponent },

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
