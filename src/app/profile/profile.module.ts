import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ProfileComponent }]),
    SharedModule
  ]
})
export class ProfileModule { }
