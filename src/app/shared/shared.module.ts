import { NgModule } from "../../../node_modules/@angular/core";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";
import { NopagesfoundComponent } from "./nopagesfound/nopagesfound.component";
import { SidebarComponent } from "./sidebar/sidebar.component";


@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        NopagesfoundComponent,
        SidebarComponent
    ],
    exports:[
        BreadcrumbsComponent,
        HeaderComponent,
        NopagesfoundComponent,
        SidebarComponent
    ]
})

export class SharedModule{}