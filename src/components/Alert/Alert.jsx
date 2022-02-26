import React from "react";

export default function Alert(props) {

  const capatalied = (Word) => {
    const lower = Word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    props.alertMesg && (
      <div>
        <div
          className={`alert alert-${props.alertMesg.typ} alert-dismissible fade show`}
          role="alert"
        >
          <strong> {capatalied(props.alertMesg.typ)} </strong> {props.alertMesg.msg}
          
        </div>
      </div>
    )
  );
}
