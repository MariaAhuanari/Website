import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentsComponent } from "./physiotherapy/pages/treatments/treatments.component";
import { PhysiotherapistsComponent } from "./physiotherapy/pages/physiotherapists/physiotherapists.component";


const routes: Routes = [
  { path: 'treatments', component: TreatmentsComponent },
  { path: 'physiotherapists', component: PhysiotherapistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
