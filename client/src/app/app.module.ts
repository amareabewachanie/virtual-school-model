import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import {TabViewModule} from 'primeng/tabview';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {StepsModule} from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import {SlideMenuModule} from 'primeng/slidemenu';
import {CardModule} from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DropdownModule } from 'primeng/dropdown';
import { DragDropModule } from 'primeng/dragdrop';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SpinnerModule } from 'primeng/spinner';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {VirtualScrollerModule} from 'primeng/virtualscroller';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { ManagmentComponent } from './components/managment/managment.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/managment/user/user.component';
import { GradeComponent } from './components/managment/grade/grade.component';
import { SubjectComponent } from './components/managment/subject/subject.component';
import { TopicComponent } from './components/managment/topic/topic.component';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    ManagmentComponent,
    UserComponent,
    GradeComponent,
    SubjectComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    VirtualScrollerModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    SplitButtonModule,
    TabViewModule,
    BreadcrumbModule,
    StepsModule,
    ToastModule,
    MessageModule,
    SlideMenuModule,
    CardModule,
    ScrollPanelModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    DragDropModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    SpinnerModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
