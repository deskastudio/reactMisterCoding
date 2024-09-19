import { FC, ReactNode, createContext, useState } from "react";
import { Biodata } from "../model/biodata";

interface BiodataContextType {
  biodata: Biodata[];
  setBiodata: (biodata: Biodata[]) => void;
}

const defaultContext = {
  biodata: [], // Ganti biodatas menjadi biodata
  setBiodata: () => {},
};

export const BiodataContext = createContext<BiodataContextType>(defaultContext);

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const [biodata, setBiodata] = useState<Biodata[]>([]);

  return (
    <BiodataContext.Provider
      value={{
        biodata: biodata, // Ganti biodatas menjadi biodata
        setBiodata: setBiodata,
      }}
    >
      {children}
    </BiodataContext.Provider>
  );
};

export default Provider;
