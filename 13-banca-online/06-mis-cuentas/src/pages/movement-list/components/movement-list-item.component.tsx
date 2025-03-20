import React from "react";
import { MovementsVm } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
  movementItem: MovementsVm;
};

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const {movementItem} = props;

  return (
    <>
      <div className={classes.row}>
        <span className={classes.dataCell}>{movementItem.transaction.toLocaleDateString()}</span>
        <span className={classes.dataCell}>{movementItem.realTransaction.toLocaleString()}</span>
        <span className={classes.dataCell}>{movementItem.description}</span>
        <span className={`${classes.dataCell} ${classes.alignRight} ${movementItem.amount < 0 ? classes.negativeNumber : ""}`}>{movementItem.amount} €</span>
        <span className={`${classes.dataCell} ${classes.alignRight}`}>{movementItem.balance} €</span>
      </div>
    </>
  )
}