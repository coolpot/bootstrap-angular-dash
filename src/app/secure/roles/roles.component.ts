import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/role.service';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.all().subscribe((res: Response) => {
      this.roles = res.data;
    });
  }


  delete(id: number) {
    if(confirm('Are you sure you want to delete this record?')) {
      this.roleService.delete(id).subscribe(res => {
        this.roles = this.roles.filter(u => u.id !== id);
      });
    }
  }

}
