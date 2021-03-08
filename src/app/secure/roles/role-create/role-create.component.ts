import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'src/app/services/permissions.service';
import { Response } from 'src/app/interfaces/response';
import { Permission } from 'src/app/interfaces/permission';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {
  permissions: Permission[] = [];
  constructor(
    private permissionService: PermissionsService
  ) { }

  ngOnInit(): void {
    this.permissionService.all().subscribe((res: Response) => {
      this.permissions = res.data;
    });
  }

}
