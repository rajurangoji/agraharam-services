import AddUser from "./AddUser";
import UserList from "./UserList";

function Users() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Firebase with React + TypeScript</h1>
      <AddUser />
      <hr />
      <UserList />
    </div>
  );
}

export default Users;
