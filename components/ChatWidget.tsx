'use client';

import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const suggestions = ['Book a consultation', 'Ask about laser therapy', 'Get skincare routine'];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      <div
        className={`w-80 overflow-hidden rounded-3xl border border-[#83C5BE]/80 bg-white/95 shadow-2xl shadow-[#CDBBA7]/60 ring-1 ring-white/40 transition-all duration-300 ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-[#2A3D45] via-[#83C5BE] to-[#E9F5F3] px-4 py-3 text-[#E9F5F3]">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#E9F5F3]/80">Dermacharm Concierge</p>
            <p className="text-lg font-semibold">Chat with us</p>
          </div>
          <button type="button" onClick={() => setOpen(false)} className="rounded-full bg-white/20 p-1">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex max-h-64 flex-col gap-4 overflow-y-auto px-4 py-4 text-sm text-[#2A3D45]">
          <div className="self-start rounded-2xl bg-[#E9F5F3] px-4 py-3 text-[#2A3D45]">
            Hi there! I can help you choose the right treatment or schedule a visit.
          </div>
          {suggestions.map((item) => (
            <button
              key={item}
              type="button"
              className="self-start rounded-full border border-[#83C5BE]/60 px-4 py-2 text-left text-xs font-medium text-[#2A3D45]/80 transition hover:border-[#83C5BE] hover:text-[#2A3D45]"
              onClick={() => setMessage(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <form
          className="flex items-center gap-2 border-t border-[#83C5BE]/30 bg-white px-4 py-3"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage('');
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type your question..."
            className="flex-1 rounded-full border border-[#83C5BE]/50 px-4 py-2 text-sm outline-none focus:border-[#83C5BE]"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[#83C5BE] p-2 text-white shadow hover:bg-[#2A3D45]"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative inline-flex items-center gap-3 rounded-full bg-[#2A3D45] px-6 py-3 text-[#E9F5F3] shadow-xl shadow-[#CDBBA7]/70 transition hover:-translate-y-0.5"
      >
        {!open && (
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#83C5BE] opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#83C5BE]" />
          </span>
        )}
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-5 w-5" />
        </span>
        <span className="text-left text-sm">
          {open ? 'Close chat' : 'Need skincare help?'}
          <span className="block text-xs text-[#E9F5F3]/70">Chat with Dermacharm</span>
        </span>
      </button>
    </div>
  );
}
