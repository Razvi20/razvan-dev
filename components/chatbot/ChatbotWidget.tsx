'use client';

import * as React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatPanel } from './ChatPanel';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export type ChatbotPosition = 'bottom-right' | 'bottom-left';

export interface ChatbotWidgetProps {
  position?: ChatbotPosition;
}

export function ChatbotWidget({
  position = 'bottom-right',
}: ChatbotWidgetProps) {
  const [open, setOpen] = React.useState(false);
  const [showLabel, setShowLabel] = React.useState(true);

  const isRight = position === 'bottom-right';

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const containerPositionClasses = isRight
    ? 'right-4 sm:right-6 items-end'
    : 'left-4 sm:left-6 items-start';

  React.useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      setShowLabel(window.scrollY < 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence initial={false}>
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={cn(
              'pointer-events-auto fixed bottom-4 z-40 sm:bottom-6',
              'flex gap-2',
              containerPositionClasses,
            )}
          >
            {showLabel && (
              <div
                className={cn(
                  'flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1.5',
                  'shadow-sm shadow-black/15 backdrop-blur-xl max-w-[260px]',
                )}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/80 animate-pulse" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium leading-tight text-foreground">
                    Portfolio assistant
                  </span>
                  <span className="text-[10px] leading-tight text-muted-foreground">
                    Ask about projects, stack, and experience.
                  </span>
                </div>
              </div>
            )}

            <Button
              size="icon-lg"
              className={cn(
                'rounded-full shadow-lg shadow-black/25',
                'bg-primary text-primary-foreground hover:bg-primary/90',
                'transition-transform hover:scale-[1.03] active:scale-[0.97]',
              )}
              onClick={handleToggle}
              aria-label="Open portfolio chat assistant"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <ChatPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
