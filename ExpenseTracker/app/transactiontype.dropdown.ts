import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'trans-type',
    template: '{{diagnostic}}<select class="form-control" [(ngModel)]="selectedValue" required (change)="onChange($event)"><option *ngFor="let item of types" [value]="item" > {{item}}</option></select>'
})
export class TransactionTypes implements OnInit {
    types: string[];
    @Input() selectedValue: string;
    @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        this.types = ["DEBIT", "CREDIT"];
    }

    ngOnInit() { }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.selectedValue); }
}