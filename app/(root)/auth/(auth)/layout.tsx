import React from "react";
import AnimatedTabs from '../../../components/auth/AnimatedTabs';

const tabs = [
    { id: "register", label: "ثبت نام" },
    { id: "login", label: "ورود" },

  ];

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-y-5 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-md pb-12">
        <div className="mb-8">
          <AnimatedTabs tabs={tabs} />
        </div>
        <div className="w-full h-[700px] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
