import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
} from "./interfaces/customerProtocol";

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder {
  FirstName: string;
  LastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.cpf = cpf;
  }
  get getName(): string {
    return this.FirstName + " " + this.LastName;
  }
  get getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder {
  Name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.Name = name;
    this.cnpj = cnpj;
  }

  get getName(): string {
    return this.Name;
  }

  get getIDN(): string {
    return this.cnpj;
  }
}
