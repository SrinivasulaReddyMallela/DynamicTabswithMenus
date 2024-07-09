import { Type } from '@angular/core';

export class Tab {
    public id: number = 0;
    public title: string = "";
    public tabData: any;
    public active: boolean = false;
    public component: Type<any>;

    constructor(component: Type<any>, title: string, tabData: any) {
        this.tabData = tabData;
        this.component = component;
        this.title = title;
    }
}
