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

// Temp
import { IncrementComponent } from '../components/increment/increment.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent,
        DonutChartComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}
