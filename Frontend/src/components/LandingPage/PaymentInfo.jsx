import React from 'react';
import { Copy, Landmark } from 'lucide-react'; // Optional: if you have lucide icons

const PaymentInfo = () => {
  return (
    <div className="max-w-md mx-auto px-4 pb-20 text-center">
      
      {/* Manual Bank Transfer Card */}
      <div className="bg-white border-2 border-[#212EA0] rounded-3xl p-8 shadow-lg relative overflow-hidden">
        {/* Visual Badge */}
        <div className="absolute top-0 right-0 bg-[#212EA0] text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase">
          Official Payment Method
        </div>

        <div className="flex justify-center mb-4">
          <div className="bg-blue-50 p-3 rounded-full">
            <Landmark className="text-[#212EA0]" size={28} />
          </div>
        </div>

        <h3 className="text-[#212EA0] text-xl font-black mb-6 uppercase tracking-tight">
          Manual Bank Transfer
        </h3>
        
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Account Name</p>
            <p className="text-lg font-bold text-gray-800">Excel Career Plus LTD</p>
          </div>

          <div className="bg-blue-50 py-4 rounded-2xl border border-blue-100 space-y-1">
            <p className="text-[10px] text-[#212EA0] uppercase font-bold tracking-widest">Account Number</p>
            <p className="text-3xl font-black tracking-tighter text-gray-900">0097864663</p>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Bank Name</p>
            <p className="text-lg font-bold text-gray-800">Sterling Bank PLC</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
  <p className="text-xs text-gray-600 font-medium leading-relaxed">
    Having trouble or need help? <br />
    Send proof of payment to:
  </p>
  <a 
    href="https://wa.me/4917662828919" 
    className="inline-flex items-center gap-2 mt-3 text-[#25D366] font-black text-lg hover:underline transition-all"
  >
    {/* Live Pulse Icon */}
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-white"></span>
    </span>
    
    +49 176 62828919
  </a>
</div>
      </div>
      
      <p className="mt-4 text-[10px] text-gray-400 uppercase font-bold">
        Secure Business Transaction
      </p>
    </div>
  );
};

export default PaymentInfo;