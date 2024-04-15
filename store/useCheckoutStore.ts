import { create } from "zustand";
import { persist } from "zustand/middleware";

type CheckOutState = {
  paymentIntent: string;
  onCheckout: string;
  setPaymentIntent: (val: string) => void;
  setCheckout: (val: string) => void;
};

export const useCheckoutStore = create<CheckOutState>()(
  persist(
    (set) => ({
      paymentIntent: "",
      onCheckout: "cart",

      setPaymentIntent: (val) =>
        set((set) => ({
          paymentIntent: val,
        })),
      setCheckout: (val) => set((set) => ({ onCheckout: val })),
    }),
    {
      name: "checkout-store",
    }
  )
);
