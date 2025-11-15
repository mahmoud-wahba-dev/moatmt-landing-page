import Image from "next/image";
import React from "react";
import TermsHeader from "./components/TermsHeader";
import TermsContent from "./components/TermsContent";

const Terms = () => {
  return (
    <section className=" mx-auto p py-8 bg-[linear-gradient(135deg,#F8FAFC_0%,rgba(239,246,255,0.3)_100%)]">
      <TermsHeader />

      <div className="sm:px-32 px-6 py-8  ">
        <div className="p-12 border border-[#E2E8F0] bg-white shadow-[0_4px_6px_0px_#0000001A] rounded-16px mt-6">
          <TermsContent />
           <hr className="my-10 text-[#E2E8F0]" />
        </div>
      </div>
     
    </section>
  );
};

export default Terms;
