import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AzureBusService {

  constructor() { }

}

export const connectionString = environment.connectionString
export const flyableQueue = environment.flyableQueue
