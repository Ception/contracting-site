import React from 'react';
import Popup from 'reactjs-popup';

export const Modal = () => (
  <Popup
    overlayStyle={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)' }}
    trigger={
      <button>
        Get a Quote
      </button>
    }
    modal
    nested
  >
    {close => (
      <div className="modal p-8 bg-black text-white w-full transform transition-transform duration-300 scale-90 hover:scale-100" style={{ minWidth: '500px' }}>
        <button className="close text-white hover:text-red-700" onClick={close}>
          &times;
        </button>
        <div className="header text-2xl mb-4">Request a Quote</div>
        <div className="content">
          <form>
            <div className="mb-4">
              <label className="block text-sm">Name</label>
              <input className="w-full p-2 mt-1 bg-black border-2 border-red-700 rounded" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Email</label>
              <input className="w-full p-2 mt-1 bg-black border-2 border-red-700 rounded" type="email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Date</label>
              <input className="w-full p-2 mt-1 bg-black border-2 border-red-700 rounded" type="date" />
            </div>
            <div className="mb-4">
              <label className="block text-sm">Message</label>
              <textarea className="w-full p-2 mt-1 bg-black border-2 border-red-700 rounded h-32"></textarea>
            </div>
          </form>
        </div>
        <div className="actions flex justify-between">
          <button
            className="button p-2 bg-red-700 hover:bg-red-800 text-white rounded"
            onClick={() => {
              console.log('modal closed');
              close();
            }}
          >
            Close
          </button>
          <button className="button p-2 bg-red-700 hover:bg-red-800 text-white rounded">
            Submit
          </button>
        </div>
      </div>
    )}
  </Popup>
);
