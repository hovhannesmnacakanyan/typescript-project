import React, { useState } from "react";
import { User } from "./User";

export interface IUser {
  id: number;
  name: string;
  age: number;
  isVisible?: boolean;
}

const users: IUser[] = [
  { id: 1, name: "user1", age: 9 },
  { id: 2, name: "user2", age: 9 },
  { id: 3, name: "user3", age: 9, isVisible: true },
  { id: 4, name: "user4", age: 9 },
  { id: 5, name: "user5", age: 9 },
  { id: 6, name: "user6", age: 9, isVisible: true },
];

const App = () => {
  const [value, setValue] = useState(0);

  const handleClick = (value: number) => {
    setValue(value);
  };

  return (
    <>
      {users.map((user) => {
        return (
          <User
            user={user}
            key={user.id}
            value={value}
            isVisible={user.isVisible}
            onChange={handleClick}
          >
            <div>dhjfshdjfh</div>
          </User>
        );
      })}
    </>
  );
};

export default App;
