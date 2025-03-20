export interface MovementsVm {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: Date;
  realTransaction: Date;
};

export interface AccountByIdVm {
  id: string;
  iban: string;
  name: string;
  balance: string;
  lastTransaction: Date;
}

export const createEmptyAccountById = (): AccountByIdVm => ({
  id: "",
  iban: "",
  name: "",
  balance: "",
  lastTransaction: new Date(),
});