import './App.css';
import { nanoid } from "nanoid";
import { useState, useEffect   } from "react";
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import OrderForm from './components/OrderForm/OrderForm';
import Reviews from './components/Reviews/Reviews';


const INITIAL_MENU_LIST = [
  {
    name: "Plain Jane Pizza",
    image: "https://www.foodandwine.com/thmb/pjyWqr8h2LyFNfopzGGx1FCT24o=/1777x1333/smart/filters:no_upscale()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    description: "Our famous dough made fresh daily, rolled out thin, hand tossed & cooked to crispy perfection.",
    price: 12.99,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "BBQ Pulled Pork Pizza",
    image: "https://www.floatingkitchen.net/wp-content/uploads/2016/01/Pulled-Pork-Pizza-2.jpg",
    description: "Pulled pork smoked at Lillie’s Q over peach wood for eight hours, Hot Smokey BBQ and mozzarella. Topped with Carolina Dirt BBQ rub and slaw.",
    price: 16.00,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Korean Fried Chicken Pizza",
    image: "https://cdn.shopify.com/s/files/1/0808/5563/articles/Korean_BBQ_Pizza_Web_3000x3000_191ab50d-f099-478a-80af-dea8601623b1_600x.jpg?v=1597439876",
    description: "Red pepper sauce, garlic puree, kimchi, mozzarella, smoked gouda, Korean fried chicken, scallions, sesame seeds and cilantro.",
    price: 17.50,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Margherita Pizza",
    image: "https://cdn.vox-cdn.com/thumbor/_tECMEJI53yRw3DxLcHJUJMpdYQ=/0x0:1024x768/1200x800/filters:focal(431x303:593x465)/cdn.vox-cdn.com/uploads/chorus_image/image/61142507/3736737751_6f75425cf5_b.0.1536106994.jpg",
    description: "Roasted tomato sauce, cherry tomatoes, fresh mozzarella, fresh basil",
    price: 18.75,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Jalapeño Pineapple Pepperoni Pizza",
    image: "https://assets0.lishfood.com/app/public/spree/images/attachments/1ab3acad4637c98c3424238794e338cc924835e5/large.jpg?1572912878",
    description: "Berkshire pork pepperoni, house pickled jalapeño, fresh cut pineapples, mozzarella, smoked jalapeño powder, garlic cream, stracciatella",
    price: 21.99,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Vegan Pizza",
    image: "https://www.ajc.com/resizer/gBTqU_GjjpjEFZlGmlvUmKKsF9o=/814x458/cloudfront-us-east-1.images.arcpublishing.com/ajc/SUWJURWP7ZCKLJJWGMZQLGABVQ.jpg",
    description: "Ground seitan, smoked seitan bacon, Roots Pizza sauce, vegan mozzarella and vegan cheddar. Topped with lettuce, olives, pickles, tomatoes",
    price: 20.99,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Arugula Tomato Pizza",
    image: "https://static.onecms.io/wp-content/uploads/sites/19/2011/09/08/bacon-tomato-arugula-pizza-ck-x.jpg",
    description: "Goat cheese, marinated tomato, romaine lettuce, arugula, mozzarella, sauce, garlic, chives",
    price: 15.99,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Meat Lovers Pizza",
    image: "https://cdn11.bigcommerce.com/s-p6vajvx5jy/images/stencil/1280x1280/products/117/663/Meat_Lovers_2__84120.1556128972.jpg?c=2",
    description: "Our special-blend Italian Sausage, smoked ham, pepperoni, smoked bacon, soppressata, capicola, & mozzarella cheese.",
    price: 22.99,
    type: "pizza",
    id: nanoid(),
  },
  {
    name: "Baked Ziti Appetizer",
    image: "https://www.gogogogourmet.com/wp-content/uploads/2015/03/Baked-Ziti-1024x678.jpg",
    description: "Vodka sauce and crumbled sausage baked with mozzarella and parmesan cheese.",
    price: 12.99,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Spinach, Roasted Red Pepper & Artichoke Dip",
    image: "https://i1.wp.com/shewearsmanyhats.com/wp-content/uploads/2015/01/spinach-artichoke-dip-1.jpg",
    description: "Served with grilled or crispy pita chips or vegetables.",
    price: 10.99,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Mozzarella Sticks",
    image: "https://www.lemontreedwelling.com/wp-content/uploads/2020/11/air-fryer-mozzarella-sticks-featured.jpg",
    description: "Made completely from scratch. Housemade and hand-stretched mozzarella, herbed breadcrumbs and marinara.",
    price: 8.99,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Panza Bread Sticks",
    image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2021-11/artisan-breadsticks_1021.jpg?itok=NJZBBZJS",
    description: "Quad Cities mozzarella blend, garlic parmesan sauce and pizza sauce.",
    price: 7.99,
    type: "appetizer",
    id: nanoid(),
  },
  {
    name: "Roots Caesar Salad",
    image: "https://images.happycow.net/venues/1024/11/92/hcmp119299_562697.jpeg",
    description: "Romaine & red leaf lettuce, crispy prosciutto, garlic croutons, shaved parmesan and creamy Caesar dressing",
    price: 7.99,
    type: "salad",
    id: nanoid(),
  },
  {
    name: "Popcorn Chicken Cobb Salad",
    image: "https://summeryule.com/wp-content/uploads/2022/06/salads-with-popcorn-chicken.jpeg",
    description: "Romaine, arugula, cabbage, tomatoes, pickles, corn, scallions, dill, egg, garlic croutons and buttermilk black truffle dressing.",
    price: 8.99,
    type: "salad",
    id: nanoid(),
  },
  {
    name: "Southwest Chipotle Chicken & Avocado Salad",
    image: "https://www.mylatinatable.com/wp-content/uploads/2016/02/foto-heroe.jpg",
    description: "Arugula, cilantro, cabbage, pulled chicken, radish, avocado, crispy shallots, pickled red onions, Tajin-roasted sweet potatoes, tortilla strips, black beans, corn, queso cotija and creamy chipotle dressing.",
    price: 10.99,
    type: "salad",
    id: nanoid(),
  },
  {
    name: "Chocolate Cream Pie",
    image: "https://www.livewellbakeoften.com/wp-content/uploads/2019/06/Chocolate-Cream-Pie-7.jpg",
    description:
      "A shareable bowl of bites of our pizza dough, tossed in butter and cinnamon sugar, served with vanilla glaze for dipping",
    price: 6.99,
    type: "dessert",
    id: nanoid(),
  },
  {
    name: "Fruity Pebbles Cheesecake",
    image: "https://img.buzzfeed.com/video-api-prod/assets/2fa18b27a66f42c2a624ebd822a00a2c/FB.jpg",
    description: "Funfetti cheesecake on a graham cracker crust. Topped with whipped cream and glazed Fruity Pebbles.",
    price: 6.99,
    type: "dessert",
    id: nanoid(),
  },
  {
    name: "Brownie Sundae",
    image: "https://i.pinimg.com/originals/60/ca/f3/60caf37025864346980bdad5b50d9195.jpg",
    description: "Warm old fashioned brownie topped with either vanilla or chocolate ice cream. Finished with whipped cream and chocolate sauce.",
    price: 6.99,
    type: "dessert",
    id: nanoid(),
  },
];



function App() {
  const [selection, setSelection] = useState("a");
  const [menuItems, setMenuItems] = useState(INITIAL_MENU_LIST);
  const [order, setOrder] = useState([]);
  // const [menuItems, setMenuItems] = useState(INITIAL_MENU_ITEMS);
  // const [order, setOrder] = useState([]);
  const [submittedOrders, setSubmittedOrders] = useState([]);

  const updateOrder = (id) => {
    const index = menuItems.findIndex((item) => item.id === id);
    const newOrderItem = menuItems[index];
    setOrder([...order, newOrderItem]);
  };  

  const addOrder = (order, customer, phone) => {
    let finalOrder = {order, customer, phone};
    alert("Your order has been submitted, thank you for your business!")
    console.log(finalOrder);
    setSubmittedOrders([...submittedOrders, finalOrder]);
}

useEffect(() => {
  localStorage.setItem('submittedOrders', JSON.stringify(submittedOrders))
}, [submittedOrders]);

const resetOrder = () => {
  setOrder([]);
}

  return (
    <div className="App"> 
    <div className='logo'></div>
    <h1>Bello's Pizzeria</h1>
      <section className="app-container">
        <nav>
          <ul className='nav-bar'>
            <li>
              <button className='hover' value="a" onClick={(e) => setSelection(e.target.value)}>
                Home
              </button>
            </li>
            <li>
              <button className='hover' value="b" onClick={(e) => setSelection(e.target.value)}>
                Menu / Order
              </button>
            </li>
            <li>
              <button className='hover' value="c" onClick={(e) => setSelection(e.target.value)}>
                Reviews
              </button>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className='social-bar'>
            <li href="#" className='fb'><i className="fa-brands fa-facebook-f"></i></li>
            <li className='ig'><i className="fa-brands fa-instagram"></i></li>
            <li className='tw'><i className="fa-brands fa-twitter"></i></li>
          </ul>
        </nav>
      </section>
        {selection === "a" && <Home />}
        <section className='menu-order'>
          {selection === "b" && <Menu menuItems={menuItems} updateOrder={updateOrder} />}
          {selection === "b" && <OrderForm order={order} addOrder={addOrder} resetOrder={resetOrder} />}
        </section>
        {selection === "c" && <Reviews />}
    </div>
  );
}

export default App;
