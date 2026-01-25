"use client";

import { ExternalLink, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface BrowserFrameProps {
  url: string;
  title: string;
  screenshotSrc?: string;
}

export function BrowserFrame({
  url,
  title,
  screenshotSrc,
}: BrowserFrameProps) {
  const domain = new URL(url).hostname;

  return (
    <div className="relative group">
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 max-w-md mx-auto">
            <div className="flex items-center gap-2 bg-background rounded-lg px-3 py-1.5 text-sm text-muted-foreground">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>{domain}</span>
            </div>
          </div>
          <Link
            href={url}
            target="_blank"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Screenshot or Placeholder */}
        <div className="relative aspect-[16/9] bg-background overflow-hidden">
          {screenshotSrc ? (
            <Image
              src={screenshotSrc}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              priority
            />
          ) : (
            // Placeholder when no screenshot provided
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ImageIcon className="w-10 h-10 text-primary/50" />
              </div>
              <div className="text-center">
                <p className="text-muted-foreground font-medium">
                  Screenshot Coming Soon
                </p>
                <p className="text-sm text-muted-foreground/70 mt-1">
                  Visit the live site to see it in action
                </p>
              </div>
            </div>
          )}
          
          {/* Hover overlay with CTA */}
          <Link
            href={url}
            target="_blank"
            className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-colors cursor-pointer"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="secondary" className="gap-2 shadow-lg">
                View Live Site
                <ExternalLink className="w-4 h-4" />
              </Button>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
