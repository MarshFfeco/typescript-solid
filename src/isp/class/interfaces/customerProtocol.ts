export interface CustomerOrder {
  get getName(): string;
  get getIDN(): string;
}

export interface IndividualCustomerProtocol {
  FirstName: string;
  LastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  Name: string;
  cnpj: string;
}
