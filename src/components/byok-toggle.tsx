"use client";

import { useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "lenny-for-you-api-key";

function getStoredKey() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY);
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function useApiKey() {
  return useSyncExternalStore(subscribeToStorage, getStoredKey, () => null);
}

export function BYOKToggle() {
  const [open, setOpen] = useState(false);
  const storedKey = useApiKey();
  const [key, setKey] = useState("");
  const [initialized, setInitialized] = useState(false);

  // Initialize input value from stored key on first render (client only)
  if (!initialized && typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && key === "") {
      setKey(stored);
    }
    setInitialized(true);
  }

  const hasKey = !!storedKey;

  function handleChange(value: string) {
    setKey(value);
    if (value) {
      localStorage.setItem(STORAGE_KEY, value);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    // Trigger storage listeners for useSyncExternalStore
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(!open)}
        className="text-muted-foreground"
      >
        {hasKey ? "API Key Set" : "Bring Your Own Key"}
      </Button>
      {open && (
        <input
          type="password"
          placeholder="Paste your Gemini API key"
          value={key}
          onChange={(e) => handleChange(e.target.value)}
          className="h-7 rounded-md border border-input bg-transparent px-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      )}
    </div>
  );
}
