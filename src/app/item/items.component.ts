import { Component, ViewContainerRef } from "@angular/core"; 
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ItemDetailComponent } from "./item-detail.component";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent {

    constructor(private modalService: ModalDialogService, private vcRef: ViewContainerRef) {
    }

    private onTap(): Promise<any> {
        const today = new Date();
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: today.toDateString(),
            fullscreen: false,
        };
    
        // showModal returns a promise with the received parameters from the modal page
        return this.modalService.showModal(ItemDetailComponent, options);
    }

}