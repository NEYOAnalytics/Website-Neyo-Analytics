'use client';

import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';
import './WhatsAppButton.scss';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20consultants%20Nearshore%20Data%20%26%20IA."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      title="Discuter directement avec un expert Nearshore"
      aria-label="Discuter sur WhatsApp"
    >
      <div className="btn-icon">
        <MessageSquare size={22} />
      </div>
      <span className="btn-label">Échanger sur WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
