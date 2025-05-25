// src/utils/emailHelpers.js
import emailjs from "emailjs-com";

export function sendProposalEmail({ to_email, to_name, from_name, day, date, time, location, message }) {
  emailjs
    .send(
      'service_l5q2047',      // <-- Replace with your EmailJS service ID
      'template_xu0tl3i',     // <-- Replace with your EmailJS template ID
      {
        to_email,
        to_name,
        from_name,           // <-- Corrected line!
        day,
        date,
        time,
        location,
        message,
      },
      'g6vqrOs_Jb6LL1VCZ'    // <-- Replace with your EmailJS public key
    )
    .then(
      () => {
        alert('Proposal email sent!');
      },
      () => {
        alert('Failed to send proposal email.');
      }
    );
}
