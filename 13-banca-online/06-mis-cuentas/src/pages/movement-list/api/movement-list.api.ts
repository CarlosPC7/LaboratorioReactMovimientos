import Axios from "axios";
import { MovementsApi } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<MovementsApi[]> =>
  Axios.get<MovementsApi[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data);