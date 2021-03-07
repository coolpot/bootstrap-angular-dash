import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../classes/auth';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.user().subscribe((res: Response) => {
      this.user = res.data;
      Auth.user = this.user;
    },
      error => {
        this.router.navigate(['/login']);
      }
    )
  }

}
