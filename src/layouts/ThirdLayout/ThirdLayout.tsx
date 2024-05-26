import React, { ReactNode } from "react";

interface ThirdWidthLayoutProps {
  children: ReactNode;
}
const ThirdWidthLayout: React.FC<ThirdWidthLayoutProps> = ({ children }) => {
  return (
    <div className="w-full md:w-1/3 lg:w-280px box-border flex h-full  ">
      {children}
    </div>
  );
};

export default ThirdWidthLayout;
