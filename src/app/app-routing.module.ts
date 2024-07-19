import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpratorComponent } from './oprator/oprator.component';
import { OfFromComponent } from './oprator/of-from/of-from.component';
import { TimeIntervalComponent } from './oprator/time-interval/time-interval.component';
import { ToArrayComponent } from './oprator/to-array/to-array.component';
import { MapComponent } from './oprator/map/map.component';
import { PluckComponent } from './oprator/pluck/pluck.component';
import { ConcatMergeComponent } from './oprator/concat-merge/concat-merge.component';
import { CatchAndThrowErrorComponent } from './oprator/catch-and-throw-error/catch-and-throw-error.component';
import { FindCountMaxComponent } from './oprator/find-count-max/find-count-max.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { DynamicObservableCompositionComponent } from './dynamic-observable-composition/dynamic-observable-composition.component';
import { SubscriptionManagnmentComponent } from './subscription-managnment/subscription-managnment.component';
import { StateManagnmentComponent } from './state-managnment/state-managnment.component';
import { AppComponent } from './app.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import path from 'path';
import { ConcurrencyManagementComponent } from './concurrency-management/concurrency-management.component';
import { ReactiveFormRxJsComponent } from './reactive-form-rx-js/reactive-form-rx-js.component';
import { RateLimitingThrottlingComponent } from './rate-limiting-throttling/rate-limiting-throttling.component';
import { BackPressureHandlingComponent } from './back-pressure-handling/back-pressure-handling.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:AppComponent
  // },
  
  {
    path:'oprator',
    component:OpratorComponent,
    children:[
      {
        path:'of-from',
        component:OfFromComponent
      },
      {
        path:'time-interval',
        component:TimeIntervalComponent
      },
      {
        path:'toArray',
        component:ToArrayComponent
      },
      {
        path:'map',
        component:MapComponent
      },
      {
        path:'pluck',
        component:PluckComponent
      },{
        path:'concat-merge',
        component:ConcatMergeComponent
      },
      {
        path:'error',
        component:CatchAndThrowErrorComponent
      },
      {
        path:'find',
        component:FindCountMaxComponent
      },
      
    ]
  },
  {
    path:'post_List',
    component:PostListComponent
  },
  {
    path:'user_post',
    component:UserPostsComponent
  },
  {
    path:'dynamic_obseravble',
    component:DynamicObservableCompositionComponent
  },
  {
    path:'subscription-managnment',
    component:SubscriptionManagnmentComponent
  },
  {
    path:'state-managnment',
    component:StateManagnmentComponent
  },
  {
    path:'sechedulers',
    component:SchedulersComponent
  },
  {
    path:'concurrency-management',
  component:ConcurrencyManagementComponent
  },
  {
    path:'reactiveForm',
    component:ReactiveFormRxJsComponent
  },
  {
    path:'rateLimitingThrottling',
    component:RateLimitingThrottlingComponent
  },{
    path:'back-pressure-handling',
    component:BackPressureHandlingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
