// Implementar o método de empréstimo (getLoan) na classe CompanyAccount
import { DioAccount } from "./DioAccount";

// - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
// - Apenas contas com o status true podem fazer empréstimos

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan(value: number): void {
    if (!this.validateStatus()) {
      throw new Error(`Conta inválida`);
    } else {
      console.log(`Você pegou um empréstimo de: ${value}`);
      console.log(`Seu saldo atual é de: ${(this.balance += value)}`);
    }
  }
}
