import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, User, Send } from 'lucide-react';

interface CallbackFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const CallbackForm: React.FC<CallbackFormProps> = ({ 
  title = "Request a Callback",
  subtitle = "Share your details and our team will reach out to assist you.",
  className = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Prepare form data for Web3Forms
      const formDataWeb3 = new FormData();
      formDataWeb3.append("access_key", "f35ff6dd-1f0a-4bc3-acd9-7cf97496599d");
      formDataWeb3.append("name", formData.name);
      formDataWeb3.append("phone", formData.phone);
      formDataWeb3.append("subject", "New Callback Request");
      formDataWeb3.append("from_name", "Anshu Safety Nets Callback Form");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataWeb3,
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setError("Failed to submit form. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-green-50 border border-green-200 rounded-xl p-6 text-center ${className}`}
      >
        <div className="text-green-600 text-lg font-semibold mb-2">Thank You!</div>
        <p className="text-green-700">We've received your details and will call you back soon.</p>
      </motion.div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center py-2">{error}</div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
          }`}
        >
          {isSubmitting ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Request Callback</span>
            </>
          )}
        </motion.button>
      </form>

      <div className="mt-4 pt-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          Or call us directly at{' '}
          <a href="tel:+919900077665" className="text-blue-600 hover:text-blue-700 font-semibold">
            +91 99000 77665
          </a>
        </p>
      </div>
    </div>
  );
};

export default CallbackForm;