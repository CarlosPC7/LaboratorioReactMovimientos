export interface MovementsVm {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
};

interface MovementListVm {
  id: string;
  transaction: Date;
  realTransaction: Date;
  description: string;
  amount: number;
  balance: number;
  accountId: string;
}

// ¿Se definen los datos de la vista o los del array del localhost?