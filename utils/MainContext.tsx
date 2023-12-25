import { createContext, useState } from "react";

export const PrimaryContext = createContext({
  adminToken: {},
  setAdminToken: (adminToken: string | null) => {},
});

export default function MainContext({ children }: any) {
  const [adminToken, setAdminToken] = useState<string | any>();

  return (
    <PrimaryContext.Provider
      value={{
        adminToken,
        setAdminToken,
      }}
    >
      {children}
    </PrimaryContext.Provider>
  );
}
