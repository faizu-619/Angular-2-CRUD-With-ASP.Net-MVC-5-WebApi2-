import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: "app-config",
    templateUrl: "./app/config/config.component.html",
    styleUrls:[]
})
export class ConfigComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {

    }

}