"use client";

import Image from "next/image";

import { useShoppingCart } from "use-shopping-cart";
import { useCheckoutStore } from "@/store/useCheckoutStore";

import Checkout from "./Checkout";

import Button from "@/app/components/ui/button/Button";

import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

import React from "react";
const Cart = () => {
  const { cartDetails, removeItem, totalPrice, decrementItem, incrementItem } =
    useShoppingCart();

  const checkoutStore = useCheckoutStore();

  const items = Object.values(cartDetails ?? {});

  return (
    <div className="py-20">
      <div className="main-container">
        {checkoutStore.onCheckout === "checkout" && (
          <button
            className="text-sm font-bold mb-5"
            onClick={() => checkoutStore.setCheckout("cart")}
          >
            &#8592; Back to Cart
          </button>
        )}

        {items.length < 1 && checkoutStore.onCheckout === "cart" ? (
          <div className="h-screen flex items-center justify-center">
            <span className="text-2xl uppercase mb-20">Your cart is empty</span>
          </div>
        ) : null}
        {checkoutStore.onCheckout === "cart" && (
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex justify-center items-center overflow-hidden rounded-md border border-gray-200">
                  <Image
                    alt="product-image"
                    src={item.image as string}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <div>
                        <h3>{item.name}</h3>
                        <h3 className="text-sm">{item.size}</h3>
                      </div>
                      <p className="ml-4">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-3">
                    <button>
                      <FiMinus
                        onClick={() => decrementItem(item.id, { count: 1 })}
                      />
                    </button>
                    <button>
                      <IoMdAdd
                        onClick={() => incrementItem(item.id, { count: 1 })}
                      />
                    </button>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">QTY: {item.quantity}</p>
                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {items.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal:</p>
                  <p>{totalPrice}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6 w-full justify-center">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      checkoutStore.setCheckout("checkout");
                    }}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            )}
          </ul>
        )}
        {checkoutStore.onCheckout === "checkout" && (
          <Checkout items={items} totalPrice={totalPrice} />
        )}
      </div>
    </div>
  );
};

export default Cart;
