import React from "react";

export function Input(props) {
  return (

    <form action="/action_page.php" >
      <select name="cars" style={{ width: 500, marginLeft: 500 }}>
        <option value="volvo">Volvo</option><br></br>
        <option value="saab">Saab</option><br></br>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      <br></br>

    </form>
  );
}