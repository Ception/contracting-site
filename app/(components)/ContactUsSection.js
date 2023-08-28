
import { useState } from 'react';

export const ContactUsSection = () => {
    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      workType: '',
      startDate: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // We can add the logic here
      console.log(formValues);
    };
  
    return (
      <div className="bg-new-gray py-16">
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-8">Request a Quote</h2>
        <form className="container mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
  
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-lg font-bold mb-2">Phone Number (Optional):</label>
            <input type="text" id="phoneNumber" name="phoneNumber" onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
  
          <div className="mb-4">
            <label htmlFor="workType" className="block text-lg font-bold mb-2">Type of Work:</label>
            <select id="workType" name="workType" onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Select a Service</option>
              <option value="Kitchens">Kitchens</option>
              <option value="Bathrooms">Bathrooms</option>
              {/* Add more services here */}
              <option value="other">Other</option>
            </select>
          </div>
  
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-lg font-bold mb-2">Preferred Start Date:</label>
            <input type="date" id="startDate" name="startDate" onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
  
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-bold mb-2">Optional Message:</label>
            <textarea id="message" name="message" onChange={handleChange} className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
  
          <div className="text-center">
            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500 transition-colors duration-300">Submit</button>
          </div>
        </form>
      </div>
    );
  }
  