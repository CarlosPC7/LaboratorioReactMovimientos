import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.MovementsApi[]
): viewModel.MovementsVm[] => 
  movementList.map((movement) => ({
    id: movement.id,
    transaction: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
    description: movement.description,
    amount: movement.amount,
    balance: movement.balance,
  }));


export const mapAccountByIdFromApiToVm = (
  accountById: apiModel.AccountByIdApi[]
): viewModel.AccountByIdVm[] =>
  accountById.map((account) => ({
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: account.balance.toString(),
    lastTransaction: new Date(account.lastTransaction),
  }));
