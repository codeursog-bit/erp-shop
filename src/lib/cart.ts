"use client";

// API-READY: replace store logic with a robust state manager or backend sync if needed
import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  qty: number;
  image: string;
}

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('racine_cart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse cart');
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('racine_cart', JSON.stringify(items));
      // Dispatch custom event to notify other components (like Navbar)
      window.dispatchEvent(new Event('cart-updated'));
    }
  }, [items, isLoaded]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.size === item.size && i.color === item.color
      );
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string, size: string, color: string) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size && i.color === color)));
  };

  const updateQty = (id: string, size: string, color: string, qty: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.size === size && i.color === color ? { ...i, qty: Math.max(1, qty) } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return {
    items,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    subtotal,
    isLoaded
  };
};
