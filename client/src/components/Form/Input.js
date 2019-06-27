import React from "react";

export function Input(props) {
  return (

    <form action="/action_page.php" >
      <select name="cars" style={{ width: 500, marginLeft: 500 }}>
        <option value="volvo">Volvo</option><br></br>
        <option value="saab">Saab</option><br></br>
        <option value="fiat">Fiat</option>
        <option value="audi">Toyota</option>
        <option value="audi">Honda</option>
        <option value="audi">Mercedes</option>
        <option value="audi">Audi</option>
        <option value="audi">Nissan</option>

      </select>
      <br></br>

    </form>
  );
}