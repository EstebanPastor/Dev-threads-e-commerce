import Stripe from "stripe";

export interface ProductType {
  id: string;
  name: string;
  image: string;
  description: string | null;
  price_id?: string;
  metadata?: Stripe.Metadata;
  unit_amount: any;
  currency?: any;
  quantity: number
}
