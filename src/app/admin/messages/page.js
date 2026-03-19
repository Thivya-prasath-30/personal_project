"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MailOpen, Trash2, Calendar } from "lucide-react";

const MOCK_MESSAGES = [
  {
    _id: "1",
    name: "John Doe",
    email: "john@example.com",
    message: "Hi, I love your portfolio! Are you available for freelance work next month?",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
  },
  {
    _id: "2",
    name: "Jane Smith",
    email: "jane@company.com",
    message: "We are looking for a Next.js expert to join our team in New York. Please let me know if you're interested in discussing this opportunity.",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
  }
];

export default function AdminMessages() {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [selected, setSelected] = useState(null);

  const toggleRead = (id) => {
    setMessages(msgs => msgs.map(m => m._id === id ? { ...m, read: !m.read } : m));
  };

  const deleteMessage = (id) => {
    setMessages(msgs => msgs.filter(m => m._id !== id));
    if (selected?._id === id) setSelected(null);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-3xl font-bold mb-8">Inbox</h1>

      <div className="grid md:grid-cols-3 gap-6 h-[600px]">
        {/* Messages List */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full">
          <div className="p-4 border-b border-border bg-muted/30">
            <h2 className="font-semibold">All Messages ({messages.length})</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages.map((msg) => (
              <button
                key={msg._id}
                onClick={() => setSelected(msg)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selected?._id === msg._id 
                    ? "border-primary bg-primary/5" 
                    : "border-transparent hover:bg-muted"
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className={`font-semibold truncate pr-2 ${!msg.read && "text-primary"}`}>{msg.name}</h3>
                  {!msg.read && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>}
                </div>
                <p className={`text-sm line-clamp-2 ${!msg.read ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                  {msg.message}
                </p>
              </button>
            ))}
            {messages.length === 0 && (
              <p className="text-center text-muted-foreground p-4">No messages.</p>
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="md:col-span-2 bg-card border border-border rounded-2xl flex flex-col h-full">
          {selected ? (
            <>
              <div className="p-6 border-b border-border flex items-start justify-between bg-muted/10">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selected.name}</h2>
                  <a href={`mailto:${selected.email}`} className="text-blue-500 hover:underline">
                    {selected.email}
                  </a>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                    <Calendar size={14} />
                    {new Date(selected.createdAt).toLocaleString()}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleRead(selected._id)}
                    className="p-2 text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors"
                    title={selected.read ? "Mark as unread" : "Mark as read"}
                  >
                    {selected.read ? <Mail size={20} /> : <MailOpen size={20} />}
                  </button>
                  <button 
                    onClick={() => deleteMessage(selected._id)}
                    className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    title="Delete message"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="p-8 overflow-y-auto">
                <p className="text-lg leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                <div className="mt-12 pt-6 border-t border-border">
                  <a 
                    href={`mailto:${selected.email}?subject=Re: Form Submission`} 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Reply via Email
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
              <Mail size={64} className="mb-4 opacity-20" />
              <p>Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
