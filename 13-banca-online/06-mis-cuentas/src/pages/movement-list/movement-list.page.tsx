import React from "react";
import { MovementsVm } from "./movement-list.vm";
import { AppLayout } from "@/layouts";
import classes from "./movement-list.page.module.css";
import {MovementListTableComponent} from "./components"

const mockMovementsData: MovementsVm[] = [
  {
    id: "1",
    description: "Nómina noviembre",
    amount: 900,
    balance: 1490,
    transaction: new Date("2019-12-09T21:30:00"),
    realTransaction: new Date("2019-12-09T21:30:00"),
    accountId: "1"
  },
  {
    id: "2",
    description: "Alquiler noviembre",
    amount: -400,
    balance: 590,
    transaction: new Date("2019-12-07T11:30:00"),
    realTransaction: new Date("2019-12-08T20:00:10"),
    accountId: "1"
  },
  {
    id: "3",
    description: "Gastos móvil",
    amount: -24,
    balance: 990,
    transaction: new Date("2019-12-01T07:01:00"),
    realTransaction: new Date("2019-12-02T12:00:10"),
    accountId: "1"
  },
]

export const MovementListPage: React.FC = () => {

  const [movementsList] = React.useState<MovementsVm[]>(mockMovementsData);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.subHeaderContainer}>
            <p className={classes.subHeaderTitle}>Saldo disponible</p>
            <p className={classes.subHeaderBalance}>1490 €</p>
          </div>
        </div>
        <MovementListTableComponent movementsList={movementsList}/>
      </div>
  </AppLayout>
  );
};
