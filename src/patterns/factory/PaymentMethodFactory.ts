export interface FormField {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

export interface PaymentMethod {
  process(amount: number): Promise<void>;
  validate(data: any): boolean;
  getFields(): FormField[];
}

class CreditCardPayment implements PaymentMethod {
  validate(data: any) {
    return Boolean(
      data.cardNumber?.length === 16 &&
      data.expiryDate?.match(/^\d{2}\/\d{2}$/) &&
      data.cvv?.length === 3
    );
  }

  async process(amount: number) {
    console.log(`Processing credit card payment for $${amount}`);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  getFields(): FormField[] {
    return [
      { name: 'cardNumber', label: 'Card Number', type: 'text', required: true },
      { name: 'expiryDate', label: 'Expiry Date (MM/YY)', type: 'text', required: true },
      { name: 'cvv', label: 'CVV', type: 'text', required: true }
    ];
  }
}

class PayPalPayment implements PaymentMethod {
  validate(data: any) {
    return Boolean(data.email?.includes('@'));
  }

  async process(amount: number) {
    console.log(`Processing PayPal payment for $${amount}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  getFields(): FormField[] {
    return [
      { name: 'email', label: 'PayPal Email', type: 'email', required: true }
    ];
  }
}

class CryptoPayment implements PaymentMethod {
  validate(data: any) {
    return Boolean(data.walletAddress?.length === 42);
  }

  async process(amount: number) {
    console.log(`Processing crypto payment for $${amount}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  getFields(): FormField[] {
    return [
      { name: 'walletAddress', label: 'Wallet Address', type: 'text', required: true }
    ];
  }
}

export function createPaymentMethod(type: string): PaymentMethod {
  switch (type) {
    case 'credit':
      return new CreditCardPayment();
    case 'paypal':
      return new PayPalPayment();
    case 'crypto':
      return new CryptoPayment();
    default:
      throw new Error('Invalid payment method');
  }
}