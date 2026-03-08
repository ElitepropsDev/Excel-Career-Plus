import React from "react";
import {
  CheckCircle,
  MessageCircle,
  Video,
  Briefcase,
  Award,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdditionalInfo = () => {
  const features = [
    {
      icon: <Video className="text-purple-500" />,
      text: "Live online sessions & access to recorded classes",
    },
    {
      icon: <Briefcase className="text-blue-500" />,
      text: "Support to complete client project after training",
    },
    {
      icon: <Award className="text-green-500" />,
      text: "Certificate of completion",
    },
    {
      icon: <Users className="text-orange-500" />,
      text: "Listing on our talent pool",
    },
  ];

  return (
    <div className="max-w-md mx-auto px-4 pb-20 space-y-10">
      {/* What You'll Get Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-[#212EA0] font-black mb-6 text-center uppercase tracking-tight">
          What is included:
        </h3>
        <ul className="space-y-4">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm font-semibold text-gray-700"
            >
              <span className="mt-0.5">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Support Section */}
      <div className="text-center">
        <p className="text-gray-500 text-sm font-medium mb-4">
          Having trouble or need help?
        </p>
        
        <a
          href="https://wa.me/4917662828919"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-black shadow-xl hover:scale-105 transition-transform uppercase text-sm"
        >
          <MessageCircle size={20} fill="white" />
          WhatsApp Support
        </a>
        {/* <p className="mt-3 text-gray-400 text-xs font-bold">+4917662828919</p> */}
      </div>
      
      <div className="-mt-8 text-center border-t border-gray-100 pt-8">
        <p className="text-black text-[10px] uppercase font-bold mb-3 tracking-widest">
          New to our community?
        </p>
        <Link
          to="/"
          className="inline-block bg-white border-2 border-[#4B2C85] text-[#4B2C85] px-6 py-2 rounded-full font-bold text-xs hover:bg-[#4B2C85] hover:text-white transition-all uppercase"
        >
          Know more about ECP
        </Link>
      </div>
    </div>
  );
};

export default AdditionalInfo;
