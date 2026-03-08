import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FiUser, FiMail, FiCalendar, FiTrash2, FiSearch, FiLock, FiLogOut } from 'react-icons/fi';

const AdminDashboard = () => {
  // --- STATES ---
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  
  const ADMIN_SECRET = "ECP2026"; 

  // --- EFFECTS ---
  useEffect(() => {
    const authStatus = sessionStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchUsers();
    }
  }, []);

  // --- FUNCTIONS ---
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      toast.error("Failed to load students.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_SECRET) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      fetchUsers();
      toast.success("Welcome back, Boss!");
    } else {
      toast.error("Invalid Secret Code");
    }
  };

  // NEW: Logout Function
  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth'); // Remove the "pass" from memory
    setIsAuthenticated(false); // Switch back to login screen
    setPasswordInput(""); // Clear the password field
    toast.success("Logged out successfully");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setUsers(users.filter(user => user._id !== id));
        toast.success("Record deleted");
      }
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const filteredUsers = users.filter(user => 
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- RENDER LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#1A1F4B] p-6">
        <Toaster />
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm text-center border border-white/20">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#4B2C85]">
            <FiLock size={30} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Access</h2>
          <p className="text-gray-500 text-sm mb-6">Enter the secret code to view student records.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Secret Code" 
              className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4B2C85] outline-none transition-all text-center text-lg tracking-widest"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="w-full bg-[#4B2C85] hover:bg-[#212EA0] text-white font-bold py-4 rounded-xl shadow-lg transition-all uppercase"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER MAIN DASHBOARD ---
  return (
    <div className="p-4 md:p-8 bg-[#F8F9FD] min-h-screen font-sans">
      <Toaster />
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1A1F4B]">Student Portal</h1>
            <p className="text-gray-500 text-sm">Manage your Web Business Roadmap cohort</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4B2C85] outline-none w-full md:w-64 transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* LOGOUT BUTTON */}
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-gray-600 hover:text-red-600 hover:border-red-100 hover:bg-red-50 transition-all font-medium"
            >
              <FiLogOut /> <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><FiUser size={24}/></div>
            <div>
              <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Total Students</p>
              <h3 className="text-2xl font-black text-[#1A1F4B]">{users.length}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-xl text-green-600"><FiMail size={24}/></div>
            <div>
              <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Active Cohort</p>
              <h3 className="text-2xl font-black text-[#1A1F4B]">March 2026</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 p-3 rounded-xl text-purple-600"><FiCalendar size={24}/></div>
            <div>
              <p className="text-gray-500 text-xs uppercase font-bold tracking-wider">Revenue Est.</p>
              <h3 className="text-2xl font-black text-[#1A1F4B]">₦{(users.length * 200000).toLocaleString()}</h3>
            </div>
          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#1A1F4B] text-white">
                <tr>
                  <th className="p-5 font-medium text-sm">Student</th>
                  <th className="p-5 font-medium text-sm">Contact</th>
                  <th className="p-5 font-medium text-sm">Status</th>
                  <th className="p-5 font-medium text-sm text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-all group">
                    <td className="p-5">
                      <p className="font-bold text-[#1A1F4B]">{user.fullName}</p>
                      <p className="text-xs text-gray-400">{new Date(user.registrationDate).toLocaleDateString()}</p>
                    </td>
                    <td className="p-5">
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-xs text-gray-400">{user.phone}</p>
                    </td>
                    <td className="p-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${user.couponCode ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-500'}`}>
                        {user.couponCode || 'Standard'}
                      </span>
                    </td>
                    <td className="p-5 text-center">
                      <button 
                        onClick={() => handleDelete(user._id)}
                        className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete User"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredUsers.length === 0 && !loading && (
            <div className="p-20 text-center text-gray-400 font-medium">No students found matching your search.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;