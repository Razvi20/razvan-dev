export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply?: string;
}

const CHAT_API_URL =
  process.env.NEXT_PUBLIC_CHAT_API_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://viennamdvtransfer.com/chat-api'
    : 'http://localhost:8000');

export async function sendChatMessage(message: string): Promise<string> {
  try {
    const response = await fetch(`${CHAT_API_URL}/chat`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(
        `Chat API error: ${response.status} ${response.statusText}`,
      );
    }

    const data: ChatResponse = await response.json();

    return data.reply || 'Sorry, I could not process your request.';
  } catch (error) {
    console.error('Chat service error:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to send message. Please try again.');
  }
}
