import React from "react";
import { MovementsVm } from "./movement-list.vm";
import { AppLayout } from "@/layouts";
import classes from "./movement-list.page.module.css";
import {MovementListTableComponent} from "./components"
import {getAccountById, getMovements} from '@/pages/movement-list/api/movement-list.api';
import { mapAccountByIdFromApiToVm, mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";
import {AccountByIdVm} from '@/pages/movement-list/movement-list.vm';

export const MovementListPage: React.FC = () => {
  const [movementsList, setMovementsList] = React.useState<MovementsVm[]>([]);
  const [accountById, setAccountById] = React.useState<AccountByIdVm[]>([]);


  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
    getMovements(id).then((result) => setMovementsList(mapMovementListFromApiToVm(result)));

    getAccountById(id).then((result) => setAccountById(mapAccountByIdFromApiToVm(result)))
  }
}, [id]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.subHeaderContainer}>
            <p className={classes.subHeaderTitle}>SALDO DISPONIBLE</p>
            <p className={classes.subHeaderBalance}> {accountById.length > 0 ? accountById[0].balance : "Cargando..."} </p>
          </div>
        </div>
        <MovementListTableComponent movementsList={movementsList}/>
      </div>
  </AppLayout>
  );
};
