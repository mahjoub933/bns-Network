import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { MyBooksComponent } from './pages/my-books/my-books.component';
import { ManageBookComponent } from './pages/manage-book/manage-book.component';
import { BorrowedBooksComponent } from './pages/borrowed-books/borrowed-books.component';
import { ReturnedBooksComponent } from './pages/returned-books/returned-books.component';
import { MyWaitingBookComponent } from './pages/my-waiting-book/my-waiting-book.component';
import { authGuard } from 'src/app/services/guard/auth.guard';


const routes: Routes = [{
  path: '',
  component: MainComponent,
  canActivate:[authGuard],
  children : [
    {
  path:'',
  component : HomeComponent,
  canActivate:[authGuard]
},
{
  path:'my-books',
  component:MyBooksComponent,
  canActivate:[authGuard]
},
{
  path:'manage',
  component:ManageBookComponent,
  canActivate:[authGuard]
},
{
  path:'manage/:bookId',
  component:ManageBookComponent,
  canActivate:[authGuard]
},
{
  path:'my-borrowed-books',
  component:BorrowedBooksComponent,
  canActivate:[authGuard]
},
{
  path:'my-returned-books',
  component: ReturnedBooksComponent,
  canActivate:[authGuard]
},
{
  path:'my-waiting-list',
  component: MyWaitingBookComponent,
  canActivate:[authGuard]
}



  ]
  
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
