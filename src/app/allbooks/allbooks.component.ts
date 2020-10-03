import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

  submit(): void {
    this.router.navigate(['../books/1002'], {relativeTo: this.route});
  }
}
