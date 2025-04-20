import React, { useState } from 'react';
import { CreditCard, Wallet, Bitcoin } from 'lucide-react';
import { createPaymentMethod, FormField } from './PaymentMethodFactory';

interface PaymentFormProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ selectedMethod, onMethodChange }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const paymentMethod = createPaymentMethod(selectedMethod);
  const fields = paymentMethod.getFields();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!paymentMethod.validate(formData)) {
      setError('Please fill in all required fields correctly');
      return;
    }

    setIsProcessing(true);
    try {
      await paymentMethod.process(99.99);
      setSuccess(true);
      setFormData({});
    } catch (err) {
      setError('Payment processing failed. Please try again.');
    }
    setIsProcessing(false);
  };

  const handleInputChange = (field: FormField, value: string) => {
    setFormData(prev => ({ ...prev, [field.name]: value }));
    setError(null);
    setSuccess(false);
  };

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <PaymentMethodButton
          method="credit"
          icon={<CreditCard className="w-5 h-5" />}
          label="Credit Card"
          selected={selectedMethod === 'credit'}
          onClick={() => onMethodChange('credit')}
        />
        <PaymentMethodButton
          method="paypal"
          icon={<Wallet className="w-5 h-5" />}
          label="PayPal"
          selected={selectedMethod === 'paypal'}
          onClick={() => onMethodChange('paypal')}
        />
        <PaymentMethodButton
          method="crypto"
          icon={<Bitcoin className="w-5 h-5" />}
          label="Crypto"
          selected={selectedMethod === 'crypto'}
          onClick={() => onMethodChange('crypto')}
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map(field => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {field.label}
            </label>
            <input
              type={field.type || 'text'}
              value={formData[field.name] || ''}
              onChange={e => handleInputChange(field, e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              required={field.required}
            />
          </div>
        ))}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full py-2 px-4 rounded-lg font-medium text-white ${
              isProcessing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors duration-200`}
          >
            {isProcessing ? 'Processing...' : 'Pay $99.99'}
          </button>
        </div>

        {error && (
          <div className="text-red-600 dark:text-red-400 text-sm mt-2">
            {error}
          </div>
        )}

        {success && (
          <div className="text-green-600 dark:text-green-400 text-sm mt-2">
            Payment processed successfully!
          </div>
        )}
      </form>
    </div>
  );
};

interface PaymentMethodButtonProps {
  method: string;
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}

const PaymentMethodButton: React.FC<PaymentMethodButtonProps> = ({
  icon,
  label,
  selected,
  onClick
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 ${
      selected
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default PaymentForm;