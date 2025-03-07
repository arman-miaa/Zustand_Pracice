import useUser2Store from "../store/User2Store"


const MyUser = () => {
  const users2 = useUser2Store((state) => state.users2)
  return (
    <div>
      {users2.map((user) => <div key={user.id}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{ user.age}</p>
     </div>)}
    </div>
  )
}

export default MyUser