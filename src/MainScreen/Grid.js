import React from "react";
import { updateStatus } from "../services/apiCalls";
import { cutAt, statusPicker, taxIdColour } from "../services/utility";
import { tableHead } from "../services/variables";

function Grid(props) {
  const TickeRows = () => {
    return props.tickets ? (
      props.tickets.map((ticket, index) => {
        var status = statusPicker(ticket.Status).status;
        var colorStyle = { color: statusPicker(ticket.Status).color };

        return (
          <tr
            key={index}
            onDoubleClick={() => {
              updateStatus(ticket.Id,2, props.setChange, props.token);
            }}
          >
            <td style={colorStyle}>{ticket.Name}</td>
            <td>{ticket.Id}</td>
            <td>{cutAt(ticket.StartDate, "T")}</td>
            <td>{cutAt(ticket.DueDate, "T")}</td>
            <td>{ticket.Assignee}</td>
            <td style={colorStyle}>{status}</td>
            <td style={taxIdColour(ticket.TaxId)}>{ticket.TaxId}</td>
          </tr>
        );
      })
    ) : (
      <></>
    );
  };
  return (
    <table>
      <thead>
        <tr>
        {tableHead.map((name)=>{
           return <th key={name}>{name}</th>
        })}
        </tr>
      </thead>
      <tbody>{TickeRows()}</tbody>
    </table>
  );
}

export default Grid;
