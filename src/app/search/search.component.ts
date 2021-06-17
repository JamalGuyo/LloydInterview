import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  template: `
    <div class="cover">
      <div class="container">
        <h1 class="heading">
          Search unlimited number of movies, TV shows and more. {{ searchTerm }}
        </h1>
        <h2>Ready to search? Type in the movie title and search</h2>
        <form #form="ngForm" (ngSubmit)="onSubmit(form)">
          <input
            type="text"
            name="search"
            class="form-control"
            placeholder="search movie..."
            #searchInput="ngModel"
            ngModel
            required
          />
          <input
            type="submit"
            class="button btn btn-danger"
            [disabled]="form.invalid"
            value="search"
          />
        </form>
        <div class="err" [hidden]="searchInput.untouched || searchInput.valid">
          Movie title is required to search!
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .cover {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100vh;
        background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/a9ee8a26-8708-44bc-8492-d5c11e6222e7/KE-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
      }
      .container {
        height: 100vh;
        width: 100%;
        max-width: 100% !important;
        margin: 0px;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .heading {
        max-width: 50rem;
        color: white;
        text-align: center;
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
      h2 {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
        margin: 1.5rem 0;
      }
      form {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
      }
      input {
        width: 30rem;
        height: 3.7rem;
        border-radius: 0px;
      }
      .button {
        border-radius: 0px;
        width: 7rem;
      }
      .err {
        color: rgb(220, 52, 68);
      }
    `,
  ],
})
export class SearchComponent implements OnInit {
  // get input data
  searchTerm = '';
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.searchTerm = form.value.search;
  }
}
