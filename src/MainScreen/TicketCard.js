import React from "react";
import { updateStatus } from "../services/apiCalls";
import { cutAt, statusPicker, taxIdColour } from "../services/utility";
import "./MainScreen.css";
function TicketCard(props) {
  return (
    <div
      className="ticketCard"
      key={props.ticket.Id}
      onDoubleClick={() => {
        updateStatus(props.ticket.Id, 2, props.setChange, props.token);
      }}
    >
      <div
        className="ticketCardStatusBar"
        style={{ backgroundColor: statusPicker(props.ticket.Status).color }}
      />
      <div className="ticketCardInfo">
        <h4 style={{ color: statusPicker(props.ticket.Status).color }}>
          {props.ticket.Name}
        </h4>
        <p>id:{props.ticket.Id}</p>
        <p>Start date:{cutAt(props.ticket.StartDate, "T")}</p>
        <p>Due date:{cutAt(props.ticket.DueDate, "T")}</p>
        <p>Assignee:{props.ticket.Assignee}</p>
        <p>
          Status:
          <span style={{ color: statusPicker(props.ticket.Status).color }}>
            {statusPicker(props.ticket.Status).status}
          </span>
        </p>
        <p>
          Tax Id:
          <span style={taxIdColour(props.ticket.TaxId)}>
            {props.ticket.TaxId}
          </span>
        </p>
      </div>
    </div>
  );
}

export default TicketCard;
