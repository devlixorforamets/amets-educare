"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Replace with actual number
  const message = encodeURIComponent("Hello Reena Ma'am, I am looking for admission guidance. Please help me out.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-in fade-in slide-in-from-bottom-4 group">
      {/* Tooltip */}
      <div className="absolute bottom-full left-0 mb-3 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white text-slate-700 text-xs font-bold px-3 py-2 rounded-lg shadow-lg border border-slate-100 flex items-center relative">
          Chat with Reena Thakur
          <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-b border-r border-slate-100 transform rotate-45"></div>
        </div>
      </div>
      
      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-50"></span>
      </a>
    </div>
  );
}
