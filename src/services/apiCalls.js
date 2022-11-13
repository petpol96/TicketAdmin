import { api } from "./variables";


export const loginValidation = (data, func) => {
  if (data.Username !== "" && data.Password !== "") {
    fetch(api.BaseUrl + api.Login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) response.json().then((json) => func(json));
      else response.json().then((json) => alert(json.ErrorDescription));
    });
  } else alert("Please fill all the fields required");
};

export const getTickets = (token, func) => {
  fetch(api.BaseUrl + api.GetTickets, {
    headers: { Authorization: "Bearer " + token },
  })
    .then((res) => res.json())
    .then((json) => func(json));
};

export const updateStatus =(id,status,func,token)=>{
  fetch(api.BaseUrl+api.UpdateStatus,{
    method:'POST',
    body:JSON.stringify({Id:id,Status:status}),
    headers: { 
      'Authorization': "Bearer " + token,
      'Content-Type': "application/json",
   },}
  )
  .then(response=>{
    if (response.ok) func();
    else response.json().then((json) => alert(json.ErrorDescription));
  })
}
