import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { TreatmentsService } from "./physiotherapy/services/treatments.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatCheckboxModule} from "@angular/material/checkbox";

import { TreatmentsComponent } from './physiotherapy/pages/treatments/treatments.component';
import { PhysiotherapistsComponent } from './physiotherapy/pages/physiotherapists/physiotherapists.component';
import { TreatmentsInfoComponent } from './physiotherapy/pages/treatments-info/treatments-info.component';
import { SessionsComponent } from './physiotherapy/pages/sessions/sessions.component';
import { ProfessionalProfileComponent } from './physiotherapy/pages/professional-profile/professional-profile.component';
import { PaymentsComponent } from './physiotherapy/pages/payments/payments.component';


@NgModule({
  declarations: [
    AppComponent,
    TreatmentsComponent,
    PhysiotherapistsComponent,
    TreatmentsInfoComponent,
    SessionsComponent,
    ProfessionalProfileComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatCheckboxModule
  ],
  providers: [TreatmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
