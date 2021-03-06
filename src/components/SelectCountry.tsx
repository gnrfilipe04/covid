import { useContext, useState } from "react";
import { RequestContext, countryPropsView } from "../context/RequestsContext";
import styles from "../styles/components/SelectCountry.module.css";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export function SelectCountry() {
  const { countries, changeCountryName, countryName } = useContext(RequestContext);
  const [buttonValue, setButtonValue] = useState({
    buttonTextValue: countryName,
    buttonImgValue: "global.png",
  });
  const [isShowList, setIsShowList] = useState(false);

  function selectOptionCountry(name, flag) {
    changeCountryName(name);
    setButtonValue({
      buttonTextValue: name,
      buttonImgValue: flag,
    });

    setIsShowList(false);
  }

  const handleClickAway = () => {
    setIsShowList(false);
  };

  const sortByCountry = (a: countryPropsView, b: countryPropsView): number => {
    return a.country < b.country ? -1 : 1
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.container} style={{ position: "relative" }}>
        <button onClick={() => setIsShowList(!isShowList)}>
          <img
            src={buttonValue.buttonImgValue}
            style={{
              width: "20px",
              height: "auto",
              marginRight: "5px",
            }}
          />
          {buttonValue.buttonTextValue}
          {!isShowList ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </button>

        <div className={styles.listCountries}>
          <ul
            className={`${isShowList ? styles.show : styles.hide}`}
          >
            <div>
              <li onClick={() => selectOptionCountry("Global", "global.png")}>
                <img
                  src="global.png"
                  style={{
                    width: "20px",
                    height: "auto",
                    marginRight: "5px",
                  }}
                />
                Global
              </li>
              {countries
                .sort(sortByCountry)
                .map((country) => (
                <li
                  onClick={() =>
                    selectOptionCountry(country.country, country.countryInfo.flag)
                  }
                  key={country.country}
                >
                  <img
                    style={{
                      width: "20px",
                      height: "auto",
                      marginRight: "5px",
                    }}
                    src={country.countryInfo.flag}
                  />
                  {country.country}
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </ClickAwayListener>
  );
}
