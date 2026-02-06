'use client';

import { cn } from '@/lib/utils';

export type ChatSender = 'user' | 'bot';

export interface ChatMessageProps {
  sender: ChatSender;
  text: string;
}

export function ChatMessage({ sender, text }: ChatMessageProps) {
  const isUser = sender === 'user';

  return (
    <div
      className={cn(
        'flex w-full gap-2 text-sm',
        isUser ? 'justify-end' : 'justify-start',
      )}
    >
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-3 py-2 leading-relaxed shadow-sm',
          'border border-border/60',
          isUser
            ? 'bg-primary text-primary-foreground rounded-br-sm'
            : 'bg-card/80 text-foreground rounded-bl-sm',
        )}
      >
        <p className="whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
}
