'use client'

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// 環境変数を安全に取得する関数（フォールバック値付き）
const getEnvVariable = (key: string, fallback: string): string => {
  if (typeof window !== 'undefined') {
    return process.env[key] || fallback;
  }
  return fallback;
};

// 環境変数を取得（フォールバック値を設定）
const EMAILJS_SERVICE_ID = getEnvVariable('NEXT_PUBLIC_EMAILJS_SERVICE_ID', 'default_service_id');
const EMAILJS_TEMPLATE_ID = getEnvVariable('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 'default_template_id');
const EMAILJS_PUBLIC_KEY = getEnvVariable('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', 'default_public_key');

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // 環境変数のチェック
    if (EMAILJS_SERVICE_ID === 'default_service_id' || 
        EMAILJS_TEMPLATE_ID === 'default_template_id' || 
        EMAILJS_PUBLIC_KEY === 'default_public_key') {
      console.warn('EmailJS configuration is using default values. Please check your environment variables.');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    if (EMAILJS_SERVICE_ID === 'default_service_id' || 
        EMAILJS_TEMPLATE_ID === 'default_template_id' || 
        EMAILJS_PUBLIC_KEY === 'default_public_key') {
      setStatus('Error: EmailJS configuration is missing. Please contact the administrator.');
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'Tisk.address@gmail.com',
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="mb-6">
        I'm always open to new opportunities and collaborations. Feel free to reach out to me using the form below or through my social media profiles.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}