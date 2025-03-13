import React from "react";
import { MovementsVm } from "../movement-list-vm";
import classes from "./movement-list-table.component.module.css";

interface Props {
  movementsList: MovementsVm[];
};

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const {movementsList} = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>FECHA</span>
            <span className={classes.headerCell}>FECHA VALOR</span>
            <span className={classes.headerCell}>DESCRIPCIÓN</span>
            <span className={classes.headerCell}>IMPORTE</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
          </div>
            {movementsList.map((movement) => (
                <div key={movement.id}>
                  {movement.balance} {movement.description}
                </div>
              ))
            }
          </div>
      </div>
    </>
  )

}