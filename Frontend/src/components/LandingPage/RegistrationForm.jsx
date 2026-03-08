import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast'; 

const RegistrationForm = () => {
  const initialFormState = {
    fullName: '',
    phone: '',
    email: '',
    code: '',
    referral: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  // NEW: Add a loading state to disable button during submission
  const [loading, setLoading] = useState(false);

  const BASE_PRICE = 200000;
  const validCodes = ["SAM123", "DIANA30"];
  const isDiscounted = validCodes.includes(formData.code.toUpperCase().trim());
  const finalAmount = isDiscounted ? BASE_PRICE * 0.7 : BASE_PRICE;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // NEW: Rewrote handleProceed to be 'async' for the database call
  const handleProceed = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.phone || !formData.fullName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true); // Start loading

    try {
      // NEW: Send data to your Local Backend (Port 5000)
      const response = await fetch('https://excel-career-plus-backend.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // We send formData + the final calculated price
        body: JSON.stringify({
          ...formData,
          amountPaid: finalAmount, 
          couponCode: formData.code // Mapping 'code' to 'couponCode' for the schema
        }),
      });

      if (response.ok) {
        // SUCCESS logic
        toast.success("Registration Successful!", {
          duration: 5000,
          icon: '🚀',
        });
        
        console.log("Database Response:", await response.json());
        setFormData(initialFormState); // Clear fields only on success
      } else {
        // SERVER ERROR logic
        const errorData = await response.json();
        toast.error(errorData.message || "Registration failed on server.");
      }
    } catch (error) {
      // CONNECTION ERROR logic (Server is off)
      console.error("Connection Error:", error);
      toast.error("Could not connect to server. Is the backend running?");
    } finally {
      setLoading(false); // Stop loading regardless of result
    }
  };

  return (
    <div className="flex justify-center px-4 -mt-16 pb-12">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md border border-gray-100">
        <h2 className="text-[#212EA0] text-2xl font-bold text-center mb-6">Registration Form</h2>
        
        <form onSubmit={handleProceed} className="space-y-4">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} className="w-full p-3 rounded-lg border border-gray-200" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} className="w-full p-3 rounded-lg border border-gray-200" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} className="w-full p-3 rounded-lg border border-gray-200" onChange={handleChange} required />
          
          <div className="flex gap-2">
            <input 
              type="text" 
              name="code" 
              placeholder="Coupon Code" 
              value={formData.code}
              className={`w-1/2 p-3 rounded-lg border ${isDiscounted ? 'border-green-500 bg-green-50' : 'border-gray-200'}`} 
              onChange={handleChange} 
            />
            <input type="text" name="referral" placeholder="Referral Name" value={formData.referral} className="w-1/2 p-3 rounded-lg border border-gray-200" onChange={handleChange} />
          </div>

          <div className="text-center py-3 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <p className="text-[#212EA0] font-black text-xl">
              Total: ₦{finalAmount.toLocaleString()}
            </p>
            {isDiscounted && (
              <p className="text-green-600 text-[10px] font-bold uppercase tracking-wider">
                Coupon Applied!
              </p>
            )}
          </div>

          <button 
            type="submit" 
            disabled={loading} // NEW: Disable button while sending to DB
            className={`w-full ${loading ? 'bg-gray-400' : 'bg-[#4B2C85] hover:bg-[#212EA0]'} text-white font-bold py-4 rounded-xl shadow-md transition-all uppercase`}
          >
            {loading ? 'Processing...' : 'Submit'}
          </button>

          <div className="flex flex-col items-center mt-4 opacity-50">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Paystack_Logo.png" 
              alt="Paystack" 
              className="h-5 grayscale mb-1" 
            />
            <span className="text-[9px] font-bold text-black uppercase">Online Payment Coming Soon</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;