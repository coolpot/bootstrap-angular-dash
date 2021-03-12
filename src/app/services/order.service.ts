import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends RestService {
  endpoint(): string {
    return 'orders';
  }

  export() {
    return this.http.get(`${environment.api}/export`, { responseType: 'blob' });
  }

}
