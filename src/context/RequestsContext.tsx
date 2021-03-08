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
  countryInfo?: { _id: number; flag: string, iso3: string };
}

interface LastThyrtDaysPropsView {
    cases?: {};
    deaths?: {};
    recovered?: {};
  
}


export interface GeneralCountryProps {
  generalWorldData: WorldPropsView;
  countries?: Array<countryPropsView>;
  countryName: string;
  countryData: countryPropsView;
  lastThyrtDays: LastThyrtDaysPropsView;
  lastThyrtDaysAll: WorldPropsView;
  worldWideData: () => void;
  allCountriesData: () => void;
  selectedCountryData: () => void;
  changeCountryName: (name: string) => void;
  dataLastThyrtDays: () => void;
  dataLastThyrtDaysAll: () => void;
}

export const RequestContext = createContext({} as GeneralCountryProps);

interface CountryProviderProps {
  children: ReactNode;
}

export function RequestProvider({ children }: CountryProviderProps) {
  const [generalWorldData, setGeneralWorldData] = useState({});
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState('Global');
  const [countryData, setCountryData] = useState({});
  const [lastThyrtDays, setLastThyrtDays] = useState({});
  const [lastThyrtDaysAll, setLastThyrtDaysAll] = useState({});

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

  //data from the last thirty days in the country
  async function dataLastThyrtDays() {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/historical/${countryName}?lastdays=30`
    );
    const data = await response.json();
    setLastThyrtDays(data.timeline);
  }

   //data from the last thirty days in the world
   async function dataLastThyrtDaysAll() {
    const response = await fetch(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=30'
    );
    const data = await response.json();
    setLastThyrtDaysAll(data);
  }

  return (
    <RequestContext.Provider
      value={{
        generalWorldData,
        countries,
        countryName,
        countryData,
        lastThyrtDays,
        lastThyrtDaysAll,
        worldWideData,
        allCountriesData,
        selectedCountryData,
        changeCountryName,
        dataLastThyrtDays,
        dataLastThyrtDaysAll
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}
