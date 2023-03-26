import { createContext, type ReactNode, useState } from "react";

export const IsWorkContext = createContext({
  isWork: false,
  setIsWork: (_arg0: boolean) => console.log(`IsWorkContext`),
});

export const IsWorkProvider = ({ children }: { children: ReactNode }) => {
  const [isWork, setIsWork] = useState<boolean>(false);

  return (
    <IsWorkContext.Provider value={{ isWork, setIsWork }}>
      {children}
    </IsWorkContext.Provider>
  );
};
