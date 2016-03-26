import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-mailbox',
    templateUrl: 'app/pages/mailbox/mailbox.component.html'
})
export class MailboxComponent implements OnInit {

  ngOnInit() {
      console.log("NG INIT - MailboxComponent");
  }
}
