import { Component, OnInit } from '@angular/core';
import { BookResponse, BorrowedBookResponse, FeedbackRequest, PageResponseBorrowedBookResponse } from 'src/app/services/models';
import { BookService, FeedbackService } from 'src/app/services/services';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.scss']
})
export class BorrowedBooksComponent implements OnInit {

borrowedBooks: PageResponseBorrowedBookResponse ={};
page =0;
size = 5;
pages: any = [];
selectedBook: BookResponse | undefined = undefined;
  feedbackRequest: FeedbackRequest = {bookId: 0, comment: '', note: 0};
constructor(
  private bookService:BookService ,
  private feedbackService: FeedbackService
){

}
ngOnInit(): void {
 this.findAllBorrowedBooks();
}
  findAllBorrowedBooks() {
    this.bookService.findAllBorrowedBook({
      page : this.page,
      size : this.size
    }).subscribe(
      {
        next : (resp)=> {
          this.borrowedBooks = resp ;
        }
      }
    )
  }




  returnBorrowedBook(book: BorrowedBookResponse) {
    this.selectedBook = book;
    this.feedbackRequest.bookId = book.id as number;
  }

  returnBook(withFeedback: boolean) {
    this.bookService.borrowReturnBook({
      'book-id': this.selectedBook?.id as number
    }).subscribe({
      next: () => {
        if (withFeedback) {
          this.giveFeedback();
        }
        this.selectedBook = undefined;
        this.findAllBorrowedBooks();
      }
    });
  }

  private giveFeedback() {
    this.feedbackService.saveFeedback({
      body: this.feedbackRequest
    }).subscribe({
      next: () => {
      }
    });
  }
gotToPage(page: number) {
  this.page = page;
  this.findAllBorrowedBooks();
}

goToFirstPage() {
  this.page = 0;
  this.findAllBorrowedBooks();
}

goToPreviousPage() {
  this.page --;
  this.findAllBorrowedBooks();
}

goToLastPage() {
  this.page = this.borrowedBooks.totalPages as number - 1;
  this.findAllBorrowedBooks();
}

goToNextPage() {
  this.page++;
  this.findAllBorrowedBooks();
}

get isLastPage() {
  return this.page === this.borrowedBooks.totalPages as number - 1;
}


}
