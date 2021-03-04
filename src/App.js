import "./styles.css";
import { useState } from "react";

//#1. Counter
const SimpleCounter = () => {
  const [ctr, setCtr] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCtr(ctr + 1);
        }}
      >
        +
      </button>
      <span>{ctr}</span>
      <button
        onClick={() => {
          setCtr(ctr - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

//#2. character counter
const CharacterCounter = () => {
  const [ctr, setCtr] = useState(0);
  const handleChange = (e) => {
    setCtr(e.target.value.length);
  };

  return (
    <div>
      <div className="card">
        <textarea
          rows="5"
          cols="60"
          placeholder="What's happening?"
          onChange={handleChange}
          maxLength="100"
        ></textarea>
        <span style={{ display: "block" }}>{ctr}/100</span>
      </div>
    </div>
  );
};

//#3. Password Match
const PasswordMatch = () => {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [checkTxt, setCheckTxt] = useState("");

  const CheckFn = () => {
    if (pass1 === pass2) {
      setCheckTxt("Password Matched!");
    } else {
      setCheckTxt("Password doesn't Match!");
    }
  };

  return (
    <div className="App">
      <span>password</span>
      <input
        type="password"
        onChange={(e) => {
          setPass1(e.target.value);
          // CheckFn();
        }}
      />
      <br />
      <span>password</span>
      <input
        type="password"
        onChange={(e) => {
          setPass2(e.target.value);
          // CheckFn();
        }}
      />
      <button
        onClick={() => {
          console.log(pass1, pass2);
          CheckFn();
        }}
      >
        check
      </button>
      <h4>{checkTxt}</h4>
    </div>
  );
};

//#4. Alpha Numeric Checker
const AlphaNumericPassword = () => {
  const [pass, setPass] = useState("");
  const [res, setRes] = useState("");

  const handleChange = (e) => {
    setPass(e.target.value);
  };

  const handleClick = (e) => {
    var nos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    setRes("Password does not contains numbers");
    for (var i = 0; i < nos.length; i++) {
      if (pass.includes(nos[i])) {
        setRes("COOL");
      }
    }
  };

  return (
    <div className="App">
      <input
        placeholder="Enter password"
        type="password"
        onChange={handleChange}
      />
      <button onClick={handleClick}>CHECK</button>
      <h4>{res}</h4>
    </div>
  );
};

//#5. Disable Submit
const DisableSubmit = () => {
  const [disable, setDisable] = useState(true);
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  return (
    <div className="App">
      <input
        placeholder="Enter password"
        onChange={(e) => {
          setPass1(e.target.value);
          if (pass2 === e.target.value) {
            setDisable(false);
          } else {
            setDisable(true);
          }
        }}
        type="password"
      />
      <br />
      <input
        placeholder="Confirm password"
        onChange={(e) => {
          setPass2(e.target.value);
          if (pass1 === e.target.value) {
            setDisable(false);
          } else {
            setDisable(true);
          }
        }}
        type="password"
      />
      <br />
      <button
        disabled={disable}
        onClick={() => {
          console.log(pass1);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

//#6. Show Password
const ShowPassword = () => {
  const [type, setType] = useState("password");
  const [btnText, setBtnTxt] = useState("show password");

  return (
    <div className="App">
      <input type={type} />
      <br />
      <br />
      <input type={type} />
      <br />
      <button
        onClick={() => {
          if (type === "password") {
            setType("text");
            setBtnTxt("hide password");
          } else {
            setType("password");
            setBtnTxt("show password");
          }
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

//#7. Small Figma

const SmallFigma = () => {
  const [size, setSize] = useState(8);
  const [font, setFont] = useState("consolas, sans-serif");
  const [css, setCss] = useState(`color: "black"`);

  var b = { color: "red" };
  var a = { fontSize: `${size}px`, fontFamily: `${font}` };
  return (
    <div className="App">
      <span style={{ fontSize: `${size}px`, fontFamily: `${font}` }}>hiii</span>
      <br />
      <button
        onClick={() => {
          setSize(size + 8);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setSize(size - 8);
        }}
      >
        -
      </button>
      <br />
      <button
        onClick={() => {
          setFont("consolas, sans-serif");
        }}
      >
        consolas
      </button>
      <button
        onClick={() => {
          setFont("Times, serif");
        }}
      >
        Times
      </button>
      <h3>CSS</h3>
      <div>font-family: {font}</div>
      <div>font-size: {size}px</div>
    </div>
  );
};

//#8. Add to Cart
function CartItem({ name, qty }) {
  return (
    <div>
      <div>
        {name}
        <span> x {qty}</span>
      </div>
    </div>
  );
}
const AddToCart = () => {
  var vegetables = [
    {
      name: "carrot",
      price: 50
    },
    {
      name: "onions",
      price: 120
    },
    {
      name: "tomato",
      price: 40
    }
  ];

  const [cart, setCart] = useState([]);

  // useEffect(() => {}, [items]);

  return (
    <div className="App">
      <h1>GROCERIES</h1>
      {vegetables.map((item, index) => {
        var qty = 0;
        return (
          <div key={index} className="cartItem">
            <div>{item.name}</div>
            <button
              onClick={() => {
                let newCart = [...cart];
                if (cart.find((element) => element.name === item.name)) {
                  var indx = cart.findIndex(
                    (element) => element.name === item.name
                  );

                  newCart[indx].qty = newCart[indx].qty + 1;
                  setCart(newCart);
                } else {
                  setCart([...cart, { name: item.name, qty: qty + 1 }]);
                }
              }}
            >
              add to cart
            </button>
          </div>
        );
      })}
      <h3 style={{ margin: 0 }}>Cart</h3>
      {/* <button
        onClick={() => {
          console.log(cart);
        }}
      >
        show cart
      </button> */}
      <br />
      {cart.map((item, index) => {
        return <CartItem name={item.name} qty={item.qty} key={index} />;
      })}
    </div>
  );
};

//#9. Switch Tabs
export function Home() {
  return <div>Home</div>;
}
export function About() {
  return <div>About</div>;
}
export function Profile() {
  return <div>Profile</div>;
}

const SwitchTabs = () => {
  const [fn, setFn] = useState(() => {
    return <Home />;
  });
  return (
    <div className="App">
      <button
        onClick={() => {
          setFn(() => {
            return <Home />;
          });
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          setFn(() => {
            return <About />;
          });
          console.log(fn);
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          setFn(() => {
            return <Profile />;
          });
        }}
      >
        Profile
      </button>

      {fn}
    </div>
  );
};

//#10. Toast
export function Toast(props) {
  // setVisibility("block");
  if (!props.warn) {
    return null;
  }
  return (
    <div className={`toast-${props.name}`}>
      <span>{props.text}</span>
      <button
        className="toast-button"
        onClick={() => {
          props.toggle(false);
        }}
      >
        Hide
      </button>
    </div>
  );
}

const ToastButtons = () => {
  const [toggle, setToggle] = useState({ toggle: false, name: "success" });
  const toggleView = (toggle) => {
    setToggle(toggle);
  };
  return (
    <div className="App">
      <Toast
        warn={toggle.toggle}
        toggle={toggleView}
        name={toggle.name}
        text={toggle.text}
      />

      <button
        onClick={() => {
          // setToastName(toast.error);
          setToggle({ toggle: true, name: "error", text: "Its an error!" });
        }}
      >
        Error Toast
      </button>
      <button
        onClick={() => {
          // setToastName(toast.success);
          setToggle({ toggle: true, name: "success", text: "Wow! SUCCESS!" });
        }}
      >
        Success Toast
      </button>
    </div>
  );
};

//#11. Todo
const Todo = () => {
  const [todos, addTodo] = useState([]);
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = () => {
    addTodo([...todos, todo]);
    setTodo("");
  };
  const setStrikeThrough = (e) => {
    if (e.target.style.textDecoration === "none") {
      e.target.style.textDecoration = "line-through";
      console.log(e.target);
    } else {
      e.target.style.textDecoration = "none";
    }
  };
  return (
    <div>
      <h2>Todo List</h2>
      <input placeholder="Add todo" onChange={handleChange} value={todo} />
      <button onClick={handleSubmit}>ADD</button>
      {/* <button
        onClick={() => {
          console.log(todos);
        }}
      >
        console
      </button> */}
      {todos.map((item, index) => {
        return (
          <div
            key={index}
            style={{ textDecoration: "none" }}
            onClick={setStrikeThrough}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

//#12 Dark Mode
const DarkMode = (prop) => {
  const [mode, setMode] = useState("white");
  const [fontColor, setFontColor] = useState("black");

  return (
    <div className="App">
      <h2>Are you a fan of dark mode too</h2>
      <button
        onClick={() => {
          if (mode === "white") {
            setMode("black");
            setFontColor("#1db954");
            prop.changeMode({ mode: "black", color: "#1db954" });
          } else {
            setMode("white");
            setFontColor("black");
            prop.changeMode({ mode: "white", color: "black" });
          }
        }}
      >
        Toggle dark mode
      </button>
    </div>
  );
};

//#13. Like in a List
export function ListCard({ name }) {
  const [ctr, setCtr] = useState(0);

  return (
    <div className="listCard">
      <span className="name">{name}</span>
      <div className="btn">
        <span
          className="like"
          onClick={() => {
            setCtr(ctr + 1);
          }}
          role="img"
          aria-label="heart"
        >
          ❤️
        </span>
        <span className="ctr">{ctr}</span>
      </div>
    </div>
  );
}

const PrintList = () => {
  const list = ["Gucci", "Nike airforce1", "Adidas"];

  return (
    <div className="App">
      <h1>Like in a list</h1>
      {list.map((item, indx) => {
        return <ListCard name={item} key={indx} />;
      })}
    </div>
  );
};

export default function App() {
  const [mode, setMode] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  const changeMode = (obj) => {
    setMode(obj.mode);
    setFontColor(obj.color);
  };
  return (
    <div
      className="App"
      style={{ backgroundColor: `${mode}`, color: `${fontColor}` }}
    >
      <h1>REACT EXERCISES </h1>
      <h3>1. Simple Counter</h3>
      <SimpleCounter />
      <hr />
      <h3>2. Character Counter</h3>
      <CharacterCounter />
      <hr />
      <h3>3. Password Match</h3>
      <PasswordMatch />
      <hr />
      <h3>4. Alpha Numberic Password</h3>
      <AlphaNumericPassword />
      <hr />
      <h3>5. Disable Submit</h3>
      <DisableSubmit />
      <hr />
      <h3>6. Show Password</h3>
      <DisableSubmit />
      <hr />
      <h3>7. Small Figma</h3>
      <SmallFigma />
      <hr />
      <h3>8. Add To Cart</h3>
      <AddToCart />
      <hr />
      <h3>9. Switch Tabs</h3>
      <SwitchTabs />
      <hr />
      <h3>10. Toast Butttons</h3>
      <ToastButtons />
      <hr />
      <h3>11. Todo</h3>
      <Todo />
      <hr />
      <h3>12. Dark Mode</h3>
      <DarkMode changeMode={changeMode} />
      <hr />
      <h3>13. Like in a list</h3>
      <PrintList />
      <hr />
    </div>
  );
}
