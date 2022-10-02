import { useState } from "react";
import MenuSelect from "./MenuSelect";
import MenuList from "./MenuList";
import OrderForm from "../OrderForm/OrderForm";

function Menu({ menuItems, ...props }) {
    const [filter, setFilter] = useState()
    const [order, setOrder] = useState([]);

    const updateFilter = (value) => {
        setFilter(value);
    };

    const menuList = menuItems
    .filter((item) => filter ? item.type === filter : item)
    .map((item) => <MenuList key={item.id} item={item} updateOrder={props.updateOrder} />);

    // const updateOrder = (id) => {
    //   const index = menuItems.findIndex((item) => item.id === id);
    //   const newOrderItem = menuItems[index];
    //   setOrder([...order, newOrderItem]);
    // };


  return (
    <div className="menu-order">
      <section className="main-menu">
          <MenuSelect updateFilter={updateFilter}/>
          <ul className="menu-list">{menuList}</ul>
      </section>
      <section className="order-form">
        {/* <OrderForm  /> */}
        <OrderForm order={order} />
      </section>
    </div>
  );
}

export default Menu;