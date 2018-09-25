import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { ContextMenuModule } from 'ngx-contextmenu';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChartAreaComponent } from './chart-area/chart-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChartAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxEchartsModule,
    ContextMenuModule.forRoot()
  ],
  providers: [],
  entryComponents: [ChartAreaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
