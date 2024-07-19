import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { DynamicObservableCompositionComponent } from './dynamic-observable-composition/dynamic-observable-composition.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { OpratorComponent } from './oprator/oprator.component';
import { OfFromComponent } from './oprator/of-from/of-from.component';
import { RouterEvent, RouterLink, RouterModule } from '@angular/router';
import { TimeIntervalComponent } from './oprator/time-interval/time-interval.component';
import { ToArrayComponent } from './oprator/to-array/to-array.component';
import { MapComponent } from './oprator/map/map.component';
import { PluckComponent } from './oprator/pluck/pluck.component';
import { ConcatMergeComponent } from './oprator/concat-merge/concat-merge.component';
import { CatchAndThrowErrorComponent } from './oprator/catch-and-throw-error/catch-and-throw-error.component';
import { FindCountMaxComponent } from './oprator/find-count-max/find-count-max.component';
import { SubscriptionManagnmentComponent } from './subscription-managnment/subscription-managnment.component';
import { StateManagnmentComponent } from './state-managnment/state-managnment.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { ConcurrencyManagementComponent } from './concurrency-management/concurrency-management.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { ReactiveFormRxJsComponent } from './reactive-form-rx-js/reactive-form-rx-js.component';
import { WebSocketRealTimeDataComponent } from './web-socket-real-time-data/web-socket-real-time-data.component';
import { RateLimitingThrottlingComponent } from './rate-limiting-throttling/rate-limiting-throttling.component';
import { BackPressureHandlingComponent } from './back-pressure-handling/back-pressure-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    UserPostsComponent,
    DynamicObservableCompositionComponent,
    Comp1Component,
    Comp2Component,
    ReplaySubjectComponent,
    OpratorComponent,
    OfFromComponent,
    TimeIntervalComponent,
    ToArrayComponent,
    MapComponent,
    PluckComponent,
    ConcatMergeComponent,
    CatchAndThrowErrorComponent,
    FindCountMaxComponent,
    SubscriptionManagnmentComponent,
    StateManagnmentComponent,
    ConcurrencyManagementComponent,
    SchedulersComponent,
    ReactiveFormRxJsComponent,
    WebSocketRealTimeDataComponent,
    RateLimitingThrottlingComponent,
    BackPressureHandlingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,RouterLink,RouterModule, StoreModule.forRoot({counter: counterReducer }, {})
    , ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
