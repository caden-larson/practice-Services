import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  constructor() {}

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    console.log(`A status change occured, the new status is ${status}`);
  }
}
