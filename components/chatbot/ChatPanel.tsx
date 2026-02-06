'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send } from 'lucide-react';
import { ChatMessage, ChatMessageProps, ChatSender } from './ChatMessage';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export interface ChatPanelMessage extends ChatMessageProps {
  id: string;
}

export interface ChatPanelProps {
  open: boolean;
  onClose: () => void;
}

export function ChatPanel({ open, onClose }: ChatPanelProps) {
  const [messages, setMessages] = React.useState<ChatPanelMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi, I'm your portfolio assistant.\nAsk me about my projects, tech stack, or experience.",
    },
  ]);

  const [input, setInput] = React.useState('');
  const [isSending, setIsSending] = React.useState(false);

  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const el = messagesEndRef.current;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [open, messages.length]);

  const addMessage = (sender: ChatSender, text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${prev.length}`,
        sender,
        text,
      },
    ]);
  };

  const handleSend = () => {
    if (!input.trim() || isSending) return;

    const content = input.trim();
    setInput('');
    addMessage('user', content);

    // Mock sending state + placeholder bot reply
    setIsSending(true);
    setTimeout(() => {
      addMessage(
        'bot',
        "This is a preview of how your portfolio chatbot will respond.\n\nLater, you'll connect this UI to a real backend or AI agent so it can answer questions about your work, stack, and experience.",
      );
      setIsSending(false);
    }, 900);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className={cn(
            'pointer-events-auto fixed inset-x-4 bottom-4 z-40',
            'sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[360px] sm:max-w-sm',
          )}
          aria-label="Portfolio assistant chat"
        >
          <div
            className={cn(
              'flex h-[440px] flex-col overflow-hidden rounded-3xl border border-border/80',
              'bg-background/90 shadow-xl shadow-black/30 backdrop-blur-xl',
            )}
          >
            <header className="flex items-start gap-3 border-b border-border/70 px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-medium leading-tight">
                      Ask Razvan&apos;s AI
                    </h2>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Chat about projects, tech stack, and experience.
                    </p>
                  </div>
                  <Button
                    type="button"
                    size="icon"
                    onClick={onClose}
                    variant="ghost"
                    className="rounded-full"
                    aria-label="Close chat"
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </header>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  sender={message.sender}
                  text={message.text}
                />
              ))}

              {isSending && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/60" />
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/60 delay-75" />
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/60 delay-150" />
                  <span className="ml-1">Thinking…</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <footer className="border-t border-border/70 bg-background/80 px-4 py-3">
              <div className="flex items-end gap-2">
                <Textarea
                  rows={1}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask something about my portfolio…"
                  className={cn(
                    'max-h-24 flex-1 resize-none text-base sm:text-sm',
                  )}
                  aria-label="Type your message"
                />
                <Button
                  type="button"
                  size="icon"
                  variant="default"
                  onClick={handleSend}
                  disabled={!input.trim() || isSending}
                  className="rounded-full shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.97]"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-1.5 text-[10px] leading-snug text-muted-foreground">
                This is a design-only preview. Responses are static until you
                connect your backend or AI agent.
              </p>
            </footer>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
