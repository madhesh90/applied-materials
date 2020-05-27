
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppContainerComponent } from './app-container/app-container.component';

// App services
import { AppLoginComponent } from './app-login/app-login.component';
import { FruitsComponent } from './fruits/fruits.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavigationComponent,
    AppSidebarComponent,
    AppContainerComponent,
    AppLoginComponent,
    FruitsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
