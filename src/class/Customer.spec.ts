import { IndividualCustomer, EnterpriseCustomer } from './Customer';

const createSutIndividual = (FirstName: string, LastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(FirstName, LastName, cpf);
};

const createSutEnterprise = (Name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(Name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have methods to get lastname and idn', () => {
    let name = "Marcio"
    let lastname = "Marcos"
    let cpf = "111.111.111-11"

    const sut = createSutIndividual(name, lastname, cpf);

    expect(sut.getName).toBe(name + " " + lastname)
    expect(sut.getIDN).toBe(cpf)
  });
});

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have methods to get lastname and idn', () => {
    let name = "Marcio"
    let cnpj = "111.111.111-11"

    const sut = createSutEnterprise(name, cnpj);

    expect(sut.getName).toBe(name)
    expect(sut.getIDN).toBe(cnpj)
  });
});
