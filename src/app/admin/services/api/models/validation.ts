// angular
import { Injectable } from '@angular/core';

import { IValidation } from './validation-interface';


export class Validation implements IValidation {

  // keys
  id: number;

  // properties
  afterDate: string;
  age: number;
  beforeDate: string;
  containsDPT: string;
  createdBy: number;
  createdDate: string;
  creditCard: string;
  date: string;
  email: string;
  integer: number;
  isActive: boolean;
  phone: string;
  startsWithDPT: string;
  string: string;
  uid: string;
  updatedBy: number;
  updatedDate: string;
  url: string;
  zip: string;


}
