// Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
// - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
// - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName(name: string): void {
    this.name = name;
    console.log(`Nome alterado para: ${this.name}`);
  }

  getName(): string {
    return this.name;
  }

  deposit(value: number): void {
    if (this.validateStatus()) {
      console.log(`Você depositou: ${value}`);
      console.log(`Seu saldo atual é de: ${(this.balance += value)}`);
    }
  }

  withdraw(value: number): void {
    if (this.validateStatus()) {
      console.log(`Você sacou: ${value}`);
      console.log(`Seu saldo atual é de: ${(this.balance -= value)}`);
    } else {
      console.log(`Você não pode sacar, saldo insuficiente`);
    }
  }

  getBalance(): void {
    console.log(`Seu saldo atual é de: ${this.balance}`);
  }

  protected validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }
    throw new Error(`Conta invalida`);
  }
}
