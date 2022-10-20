import { useState } from "react";
import MenuSelect from "./MenuSelect";
import MenuList from "./MenuList";

function Menu({ menuItems, ...props }) {
    const [select, setSelect] = useState()

    const updateSelect = (value) => {
      setSelect(value);
    };

    const menuList = menuItems
    .filter((item) => select ? item.type === select : item)
    .map((item) => <MenuList key={item.id} item={item} updateOrder={props.updateOrder} />);

  return (
    <div>
      <section className="main-menu">
          <MenuSelect updateSelect={updateSelect}/>
          <ul className="menu-list">{menuList}</ul>
      </section>
    </div>
  );
}

export default Menu;