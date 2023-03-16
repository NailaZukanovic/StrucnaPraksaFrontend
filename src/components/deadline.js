import { Project } from "../database";
import taskovi from "../taskovi";
import { useState } from "react";

function deadline() {
  function isGreaterThanFive(task) {
    return taskovi.indexOf(task) === d.idTaska;
}

const [data, setData] = useState(taskovi);
const [status, setStatus] = useState(null);
const updateState = (promenljiva) => {
  const newState = data.map(obj => {
    // 👇️ if id equals 2, update country property
    if (obj.id === 2) {
      return {...obj, status: promenljiva};
    }

    // 👇️ otherwise return the object as is
    return obj;
  });

  setData(newState);
};
  const listItems = Project.map((d) => <li key={d.name}>{d.name} {taskovi.filter(isGreaterThanFive).length} </li>);
  return (
    <div>
    {listItems }
    <input type={Text} name="status" value={status}/>
    <button onClick={updateState(status)}>Update state</button>

      {data.map(obj => {
        return (
          <div key={obj.name}>
            <h2>id: {obj.name}</h2>
            <h2>status: {obj.status}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );


}

export default deadline;