import "./nav.css";
import { Link } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
// import { DebounceInput } from "react-debounce-input";
import { useState } from "react";
export const Navbar = () => {
  const [list, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [icon, setIcon] = useState(false);
  const [value, setValue] = useState("");
  const handleMouseOver = (event) => {
    event === "over" ? setShow(true) : setShow(false);
    event === "profile-over" ? setProfile(true) : setProfile(false);
  };
  const handelClick = () => {
    setIcon(!icon);
  };
  const handelchange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="main-nav">
        <div className="nav">
          <div className="meeshoicon">
            <Link to="/">
              <img
                className="imgtag"
                src="https://static.meeshosupply.com/supplier-new/meesho_static_images/meesho-logo.webp"
                alt=""
              />
            </Link>
          </div>
          <div className="input-tag-div">
            <input
              className="inputtag"
              type="text"
              placeholder="Try Saree And kurti or Serach by product code "
              onChange={handelchange}
              value={value}
            />
            {/* <DebounceInput
              className="inputtag"
              minLength={2}
              debounceTimeout={300}
              onChange={(event) => setValue({ value: event.target.value })}
            /> */}
          </div>
          <div className="download">
            <PhoneAndroidIcon className="img1" />
            <span className="spantag">Download App</span>
          </div>
          <div className="supplier">
            <Link className="Linktag" to="/supplier">
              Become a Supplier
            </Link>
          </div>
          <div className="profile">
            <PermIdentityIcon className="profile-img1" />

            <div
              onMouseOver={() => handleMouseOver("profile-over")}
              onMouseOut={() => handleMouseOver("profile-out")}
            >
              Profile
              {profile && (
                <div className="signup">
                  <Link to="/profile">
                    <button>Sign up</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="carted">
            <ProductionQuantityLimitsIcon className="carted-img1" />
            <br></br>
            <Link className="Linktag" to="/cart">
              Cart
            </Link>
          </div>
          <div className="format-icon" onClick={handelClick}>
            <FormatListBulletedIcon />
            {icon && (
              <div className="format-icon-div">
                <ul className="format-icon-click">
                  <li>
                    <Link
                      className="format-icon-LinkTag"
                      to="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow"
                    >
                      <span className="spantag">Download App</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="format-icon-LinkTag" to="/supplier">
                      Become a Supplier
                    </Link>
                  </li>
                  <li>
                    <Link className="format-icon-LinkTag" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="format-icon-LinkTag" to="/cart">
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* <hr className="hrTag"></hr> */}
        <div className="item">
          <ul className="item-list">
            <li
              onMouseOver={() => handleMouseOver("over")}
              onMouseOut={() => handleMouseOver("out")}
              className="item-list1"
            >
              Women Ethnic
              {list && (
                <div className="showlisthover">
                  <div className="womenEthnic-list">
                    <h2>
                      All Women Ethnic
                      <p>View ALL</p>
                    </h2>
                    <h2>
                      Sarees
                      <ul className="sarees-list">
                        <li className="sarees-list-1">All Sarees</li>
                        <li className="sarees-list-1">Silk Sarees</li>
                        <li className="sarees-list-1">Cotton Silk Sarees</li>
                        <li className="sarees-list-1">Cotton Sarees</li>
                        <li className="sarees-list-1">Georgette Sarees</li>
                        <li className="sarees-list-1">Chiffon Sarees</li>
                        <li className="sarees-list-1">Satin Sarees</li>
                        <li className="sarees-list-1">Embroidered Sarees</li>
                      </ul>
                    </h2>
                    <h2>
                      Kutris
                      <ul className="sarees-list">
                        <li className="sarees-list-1">All Kurtis</li>
                        <li className="sarees-list-1">Anarkali Kurtis</li>
                        <li className="sarees-list-1">Rayon Kurtis</li>
                        <li className="sarees-list-1">Cotton Kurtis</li>
                        <li className="sarees-list-1">Embroidered Kurtis</li>
                      </ul>
                    </h2>
                    <h2>
                      Kurta Sets
                      <p>All Kurta Sets</p>
                    </h2>
                    <h2>
                      Suits & Dress Material
                      <ul className="sarees-list">
                        <li className="sarees-list-1">
                          All Suits & Dress Material
                        </li>
                        <li className="sarees-list-1">Cotton Suits</li>
                        <li className="sarees-list-1">Embroidered Suits</li>
                        <li className="sarees-list-1">Chanderi Suits</li>
                      </ul>
                    </h2>
                    <h2>
                      other Ethnic
                      <ul className="sarees-list">
                        <li className="sarees-list-1">Blouses</li>
                        <li className="sarees-list-1">Dupattas</li>
                        <li className="sarees-list-1">Lehanga</li>
                        <li className="sarees-list-1">Gown</li>
                        <li className="sarees-list-1">Ethnic Bottomwear</li>
                      </ul>
                    </h2>
                  </div>
                </div>
              )}
            </li>
            <li className="item-list1">Women Western</li>
            <li className="item-list1">Men</li>
            <li className="item-list1">Kids</li>
            <li className="item-list1">Home & Kitchen</li>
            <li className="item-list1">Beauty & Health</li>
            <li className="item-list1">Jewellery & Accessories</li>
            <li className="item-list1">Bags & Footwear</li>
            <li className="item-list1">Electronic</li>
          </ul>
          <select>
            <option>Women Western</option>
            <option>Men</option>
            <option>Kids</option>
            <option>Home & Kitchen</option>
            <option>Beauty & Health</option>
            <option>Jewellery & Accessories</option>
            <option>Bags & Footwear</option>
            <option>Electronic</option>
          </select>
        </div>
      </div>
    </>
  );
};
