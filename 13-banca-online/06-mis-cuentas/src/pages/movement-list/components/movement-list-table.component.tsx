import React from "react";
import { MovementsVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import {MovementListItemComponent} from '@/pages/movement-list/components/movement-list-item.component';

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
              <MovementListItemComponent key={movement.id} movementItem={movement}/>
              ))
            }
          </div>
      </div>
    </>
  )

}