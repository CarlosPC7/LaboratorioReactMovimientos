import React from "react";
import { MovementsVm } from "./movement-list.vm";
import { AppLayout } from "@/layouts";
import classes from "./movement-list.page.module.css";
import {MovementListTableComponent} from "./components"
import {getMovements} from '@/pages/movement-list/api/movement-list.api';
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";

interface Props {
  movementIndividual: MovementsVm;
};

export const MovementListPage: React.FC<Props> = (props) => {
  const {movementIndividual} = props;

  const { id } = useParams<{ id?: string }>();
  const [movementsList, setMovementsList] = React.useState<MovementsVm[]>([]);

  React.useEffect(() => {
    if (id) {
    getMovements(id).then((result) => setMovementsList(mapMovementListFromApiToVm(result)));
  }
}, [id]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.subHeaderContainer}>
            <p className={classes.subHeaderTitle}>SALDO DISPONIBLE</p>
            <p className={classes.subHeaderBalance}>{movementIndividual.balance} </p>
          </div>
        </div>
        <MovementListTableComponent movementsList={movementsList}/>
      </div>
  </AppLayout>
  );
};
