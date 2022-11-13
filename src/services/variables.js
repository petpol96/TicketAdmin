export const api = {
  BaseUrl: " https://frontendtest.unixfor.gr",
  Login: "/api/Tickets/login ",
  GetTickets: "/api/Tickets/GetTickets",
  UpdateStatus: "/api/Tickets/UpdateStatus",
};
export const statusvars = {
  Open: { status: "Open", color: "#FF0000" },
  InProgress: { status: "In Progress", color: "#0000FF" },
  Finished: { status: "Finished", color: "#00FF00" },
  Err: { status: "Error", color: "#000000" },
};
export const imgUrl = {
  Blue: "https://img.icons8.com/ios-glyphs/30/0000FF/grid-3.png",
  Black: "https://img.icons8.com/ios-glyphs/30/null/grid-3.png",
};
export const tableHead = [
  "Name",
  "Id",
  "Start date",
  "Due Date",
  "Assignee",
  "Status",
  "Tax Id",
];
