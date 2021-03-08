import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'src/app/services/permissions.service';
import { Response } from 'src/app/interfaces/response';
import { Permission } from 'src/app/interfaces/permission';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { RoleService } from 'src/app/services/role.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {
  permissions: Permission[] = [];
  form: FormGroup;
  constructor(
    private permissionService: PermissionsService,
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      permissions: this.formBuilder.array([])
    });

    this.permissionService.all().subscribe((res: Response) => {
      this.permissions = res.data;
      this.permissions.forEach(p => {
        this.permissionArray.push(
          this.formBuilder.group({
            value: false,
            id: p.id
          })
        )
      });
    });
  }

  get permissionArray() {
    return this.form.get('permissions') as FormArray;
  }

  submit() {
    const formData = this.form.getRawValue();

    const data = {
      name: formData.name,
      permissions: formData.permissions.filter(p => p.value === true).map(p => p.id)
    };
    this.roleService.create(data).subscribe(res => {
      this.router.navigate(['/roles']);
    });
  }

}
