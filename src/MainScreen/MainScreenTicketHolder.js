import React, { useEffect, useState } from "react";
import { getTickets } from "../services/apiCalls";
import Grid from "./Grid";
import "./MainScreen.css";
import TicketCard from "./TicketCard";

function MainScreenTicketHolder(props) {
  const [tickets, setTickets] = useState(null);
  const [change, setChange] = useState(false);

  useEffect(() => {
    getTickets(props.token, setTickets);
  }, [change]);

  const viewHandler = () => {
    return props.isGrid ? (
      <Grid tickets={tickets} setChange={()=>setChange(!change)} token={props.token} />
    ) : (
      <div className="ticketCardsContainer">
        {tickets ? (
          tickets.map((ticket, index) => (
            <TicketCard
              ticket={ticket}
              setChange={setChange}
              token={props.token}
              key={index}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    );
  };

  return <div className="mainScreenTicketHolder">{viewHandler()}</div>;
}

export default MainScreenTicketHolder;
