import { createContext, ReactNode, useEffect, useState } from "react";

interface WorldPropsView {
  cases?: number;
  recovered?: number;
  deaths?: number;
}

interface countryPropsView {
  country?: string;
  cases?: number;
  recovered?: number;
  deaths?: number;
  countryInfo?: { _id: number; flag: string };
}

interface GeneralCountryProps {
  generalWorldData: WorldPropsView;
  countries?: Array<countryPropsView>;
  countryName;
  countryData: countryPropsView;
  worldWideData: () => void;
  allCountriesData: () => void;
  selectedCountryData: () => void;
  changeCountryName: (name) => void;
}

export const RequestContext = createContext({} as GeneralCountryProps);

interface CountryProviderProps {
  children: ReactNode;
}

export function RequestProvider({ children }: CountryProviderProps) {
  const [generalWorldData, setGeneralWorldData] = useState({});
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("Global");
  const [countryData, setCountryData] = useState({});

  function changeCountryName(name: string) {
    setCountryName(name);
  }

  //Universal data
  async function worldWideData() {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    const data = await response.json();
    setGeneralWorldData(data);
  }

  //All countries
  async function allCountriesData() {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&sort=cases&allowNull=true"
    );
    const data = await response.json();
    setCountries(data);
  }

  //Selected country data
  async function selectedCountryData() {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/countries/${countryName}?strict=true`
    );
    const data = await response.json();
    setCountryData(data);
  }

  return (
    <RequestContext.Provider
      value={{
        generalWorldData,
        countries,
        countryName,
        countryData,
        worldWideData,
        allCountriesData,
        selectedCountryData,
        changeCountryName,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}
