import React from "react";

export const User = props => {
  const { id, name, surname, email } = props;
  return (
    <div>
      <p>`User id:${id}`</p>
      <p>`User name:${name}`</p>
      <p>`User surname:${surname}`</p>
      <p>`User e-mail:${email}`</p>
    </div>
  );
};
