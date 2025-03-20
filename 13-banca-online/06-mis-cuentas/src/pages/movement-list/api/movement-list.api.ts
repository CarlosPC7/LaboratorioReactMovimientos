import Axios from "axios";
import { AccountByIdApi, MovementsApi } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<MovementsApi[]> =>
  Axios.get<MovementsApi[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data);

const urlAccountById = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountById = (id: string): Promise<AccountByIdApi> =>
  Axios.get<AccountByIdApi>(`${urlAccountById}/${id}`).then(
    ({data}) => data);