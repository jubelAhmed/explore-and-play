import React, { useState } from 'react';
import { FadeIn } from '../../components/animations/Fade';
import CodeBlock from '../../components/CodeBlock';
import { createPaymentMethod } from './PaymentMethodFactory';
import PaymentForm from './PaymentForm';

const FactoryExample: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('credit');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Factory Pattern</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        The Factory pattern provides an interface for creating objects but lets subclasses decide
        which class to instantiate. It's useful when you need to create different variations of
        objects without exposing the creation logic.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Example: Payment Method Factory</h3>
          <FadeIn>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <PaymentForm
                selectedMethod={selectedMethod}
                onMethodChange={setSelectedMethod}
              />
            </div>
          </FadeIn>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Factory Implementation</h3>
          <CodeBlock
            code={`// Payment method factory
interface PaymentMethod {
  process(amount: number): Promise<void>;
  validate(data: any): boolean;
  getFields(): FormField[];
}

class CreditCardPayment implements PaymentMethod {
  validate(data: any) {
    return data.cardNumber && 
           data.expiryDate && 
           data.cvv;
  }

  async process(amount: number) {
    // Process credit card payment
  }

  getFields() {
    return [
      { name: 'cardNumber', label: 'Card Number' },
      { name: 'expiryDate', label: 'Expiry Date' },
      { name: 'cvv', label: 'CVV' }
    ];
  }
}

// Factory function
function createPaymentMethod(type: string): PaymentMethod {
  switch (type) {
    case 'credit':
      return new CreditCardPayment();
    case 'paypal':
      return new PayPalPayment();
    default:
      throw new Error('Invalid payment method');
  }
}`}
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Benefits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Encapsulates object creation logic</li>
          <li>Provides a consistent interface for object creation</li>
          <li>Makes the system more flexible and extensible</li>
          <li>Reduces coupling between creator and concrete products</li>
          <li>Simplifies adding new product types</li>
        </ul>
      </div>
    </div>
  );
};

export default FactoryExample;