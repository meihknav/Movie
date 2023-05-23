import { useState } from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
// import AddUser from "./components/Users/AddUser";
// import UsersList from "./components/Users/UsersList";
function App() {
  // const [userList , setUserList] = useState([]);

  // const addUserHandler = (uName, uAge) => {
  //   setUserList ((prevUsersList) => {
  //     return [...prevUsersList,{
  //       name: uName,
  //       age: uAge,
  //       id: Math.random.toString(),
  //     }]
  //   })
  // }

  //ModalState

  const [modalShow,setModalShow] = useState(false)

  const showModal = () => {
    setModalShow(true)
  }

  const hideModal = () => {
    setModalShow(false)
  }

  return (
    <div className="App">
      <CartProvider>
      {modalShow && <Cart onClose = {hideModal} /> }
      <Header onShow={showModal} />
      <main>
        <Meal />
      </main>
      </CartProvider>
      {/* <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} /> */}
    </div>
  );
}

export default App;
