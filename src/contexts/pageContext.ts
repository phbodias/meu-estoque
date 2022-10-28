import React, { createContext, SetStateAction } from "react";

interface ActualPage {
  actualPage: string;
  setActualPage?: React.Dispatch<SetStateAction<string>>;
}

const defaultPage = { actualPage: "Home" };

const ActualPageContext = createContext<ActualPage>(defaultPage);

export default ActualPageContext;
