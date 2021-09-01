import styled from 'styled-components';


const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Tamil",
  "Hindi",
  "Chinese",
  "Russian",
  "Japanese",
  "Arabic",
];
const currency = ["$ - USD", "₹ - INR", "£ - GBP", "€ - EUR", "¥ - JPY"];
const footerLinks = [
  {
    title: "Get to Know Us",
    list: ["About MarketPlace", "Connect with Us", "MarketPlace Cares", "Gift a Smile"],
  },
  {
    title: "Make Money with Us",
    list: [
      "Sell products on MarketPlace",
      "Sell apps on MarketPlace",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an MarketPlace Hub",
      "› See More",
    ],
  },
  {
    title: "MarketPlace Payment",
    list: [
      "MarketPlace Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "MarketPlace Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    list: [
      "MarketPlace and COVID-19",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Devices",
      "MarketPlace Assistant",
    ],
  },
];

function Footer() {
  return (
    <StyledFooter>
      <div className="footer__inner">
        <div className="footer__disclaimer">
          <strong>Disclaimer:</strong> This is not the official MarketPlace Store. It
          is a redesign, built purely for educational purpose.
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__row">
              <h6>{link.title}</h6>
              <ul>
                {link.list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
        
          <span className="footer__copy">
            &copy; 2021 | Developed by{" "}
            <a href="https://olowosusikoseemani.com">Olowosusi Koseemani</a>
          </span>
          <span className="footer__dropDownSpan">
            <select className="footer__dropDownSpan-lang">
             {languages.map((lang) => (
               <option value={lang}>{lang}</option>
             ))}
            </select>
            <select className="footer__dropDownSpan-cur">
            {currency.map((cur) => (
               <option value={cur}>{cur}</option>
             ))}
            </select>
          </span>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  margin-top: 5rem;
  background: #eaeaea;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

.footer__inner {
  /* padding-left: clamp(8rem, 10vw, 10rem); */
  max-width: 130rem;
  margin: 0 auto;
  width: 100%;
}
.footer__disclaimer {
  font-size: 1.6rem;
  background: #1a1a2c;
  color: #fff;
  padding: 1rem 3rem;
  width:100%;
  text-align:center;
}
.footer__links {
  display: flex;
  padding: 3rem;
  align-items: flex-start;
  justify-content: space-between;
}
.footer__row {
  margin-right: 3rem;
  width: calc(25% - 3rem);
}
.footer__row ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer__row h6 {
  margin-bottom: 0.5rem;
  white-space: nowrap;
  font-size: 1.3rem
}
.footer__row ul li {
  padding: 0;
  margin-bottom: 0.4rem;
  font-size: 1.1rem;
  opacity: 0.6;
  color: #1a1a2c;
  transition: all 0.2s;
  white-space: nowrap;
  cursor: pointer;
}
.footer__row ul li:hover {
  opacity: 1;
}
.footer__bottom {
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  background: #eaeaea;
  border-top: 1px solid rgba(26, 26, 44, 0.05);
}
.footer__logo {
  width: 5rem;
  height:5rem;
  margin-right: 1rem;
}
.footer__copy {
  font-size: 14px;
  white-space: nowrap;
  opacity: 0.75;
  
}
.footer__copy a {
  color: #f90;
  line-height: 1.2;
  transition: all 0.2s;
  border-bottom: 1px dotted #f90;
}
.footer__copy a:hover {
  color: #dc143c;
  border-bottom: 1px dotted #dc143c;
}
.footer__dropDownSpan {
  margin-left: auto;
  display: flex;
  align-items: center;

  .footer__dropDownSpan-lang,
  .footer__dropDownSpan-cur{
    outline: none;
  border:none;
  background-color: #ffffff;
  margin-left: 1rem;
  padding: .5rem
  }
}
.footer__currDropDown {
  margin-right: 0;
}
.footer__dropDown .dropDown__menu {
  top: auto;
  bottom: calc(100% + 0.5rem);
}

@media (max-width: 550px) {
  .footer__inner {
    padding: 0;
  }
  .footer__links {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
    flex-flow: column nowrap;
  }
  .footer__row {
    margin: 0;
    margin-bottom: 1.5rem;
  }
  .footer__disclaimer {
    padding: 1.5rem;
  }
  .footer__copy {
    padding: 0.5rem 0 1rem 0;
  }
  .footer__dropDownSpan {
    margin: 0;
  }
  .footer__bottom {
    padding: 1.5rem;
    flex-flow: column nowrap;
    justify-content: center;
  }
  .footer__langDropDown,
  .footer__currDropDown {
    margin: 0.5rem;
  }
}

`

export default Footer;
