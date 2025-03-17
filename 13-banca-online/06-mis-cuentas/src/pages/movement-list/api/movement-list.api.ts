import Axios from "axios";
import { AccountApi, MovementsApi } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<MovementsApi[]> =>
  Axios.get<MovementsApi[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountApi[]> =>
  Axios.get<AccountApi[]>(urlAccount).then(({ data }) => data);