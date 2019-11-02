import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule
} from '@angular/material'; 


@NgModule ({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule
    ],
    exports:[
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule
    ]
})

export class MaterialModule{
    
}