import { useState } from "react";
import "./App.css";
import { users as persons } from "./data/dummyData";
import { UserFunction, UserClass } from "./user";
import { UserChildren } from "./user";

function App() {
  const [users, setUsers] = useState(persons);
  const [childrenText, setChildrenText] = useState("A hobi mi je plivanje");

  // constructor() {
  //   super();

  //   this.state = {
  //     users: users,
  //     childrenText: "A hobi mi je plivanje",
  //   };
  // }

  const btnClickHandler = () => {
    const newUsers = users.map((user) => {
      return { ...user, years: user.years + 1 };
    });

    setUsers(newUsers);
  };

  // const { users, childrenText } = this.state;

  return (
    <div className="App">
      <h1>React aplikacija</h1>
      <p>Ovo zaista radi</p>
      <UserFunction ime={users[0].name} years={users[0].years} />
      <UserClass ime={users[1].name} years={users[1].years} />
      <UserChildren ime={users[2].name} years={users[2].years}>
        {childrenText}
      </UserChildren>
      <button onClick={this.btnClickHandler}>Uvecaj godine</button>
    </div>
  );
}

export default App;
