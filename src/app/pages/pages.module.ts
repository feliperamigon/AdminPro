import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { SharedModule } from './../shared/shared.module';

// 3th Party Libraries
import { ChartsModule } from 'ng2-charts';

// Routes
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DonutChartComponent } from './../components/donut-chart/donut-chart.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { IncrementComponent } from '../components/increment/increment.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';


// Pipe Module
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent,
        DonutChartComponent,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})

export class PagesModule { }
