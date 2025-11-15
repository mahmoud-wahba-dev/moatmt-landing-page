import React from "react";

const TermsContent = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="w-1 h-8 bg-[#00BBA7]"></div>
        <h6 className="font-normal text-24px text-[#0F172B] mb-4">1. التعريفات</h6>
      </div>
      <div className="ps-6 text-end text-[#314158] space-y-3 text-base font-normal">
        <p>
          <strong className="text-[#0F172B]">المنصة</strong>: يقصد بها "مؤتمت بوت" (Moatmt Bot)، لتقنيات الذكاء الاصطناعي،
          وهي منصة إلكترونية تقدم خدمات أتمتة الرسائل والتواصل عبر تطبيق واتساب
          باستخدام الذكاء الاصطناعي.
        </p>
        <p>
          <strong className="text-[#0F172B]">المستخدم/العميل:</strong> هو الشخص الطبيعي أو الاعتباري الذي يقوم بالتسجيل
          واستخدام خدمات المنصة.
        </p>
        <p>
          <strong className="text-[#0F172B]">الخدمة:</strong> تعني كافة الأدوات والوظائف التي تقدمها المنصة، بما في ذلك
          أتمتة الردود، إدارة المحادثات، استرجاع السلات المتروكة، تتبع الطلبات،
          وغيرها من الخصائص.
        </p>
      </div>
    </div>
  );
};

export default TermsContent;
