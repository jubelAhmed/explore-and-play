import React from 'react';
import { FadeIn } from '../../components/animations/Fade';
import CodeBlock from '../../components/CodeBlock';
import Button from './Button';
import Card from './Card';
import Form from './Form';
import Input from './Input';

const CompositionalExample: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Component Composition</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Component composition is a fundamental pattern in React that allows you to build complex UIs
        by combining smaller, reusable components. This promotes code reuse, maintainability, and separation of concerns.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Example 1: Product Card</h3>
          <FadeIn>
            <Card 
              title="Product Card" 
              image="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600"
              imageAlt="Product Image"
              footer={
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$99.99</span>
                  <Button>Add to Cart</Button>
                </div>
              }
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A beautiful product with amazing features that you'll absolutely love.
              </p>
              <div className="flex space-x-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">New</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">In Stock</span>
              </div>
            </Card>
          </FadeIn>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Example 2: Form Composition</h3>
          <FadeIn delay={200}>
            <Form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <Input
                  label="Message"
                  name="message"
                  type="textarea"
                  placeholder="Enter your message"
                  required
                />
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit Form
                </Button>
              </div>
            </Form>
          </FadeIn>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Product Card Code</h3>
          <CodeBlock
            code={`// Using composition to build a product card
<Card 
  title="Product Card" 
  image="/product-image.jpg"
  imageAlt="Product Image"
  footer={
    <div className="flex justify-between items-center">
      <span className="font-bold text-lg">$99.99</span>
      <Button>Add to Cart</Button>
    </div>
  }
>
  <p className="text-gray-600 mb-4">
    A beautiful product with amazing features.
  </p>
  <div className="flex space-x-2 mb-4">
    <span className="px-2 py-1 bg-blue-100 text-xs rounded-full">
      New
    </span>
    <span className="px-2 py-1 bg-green-100 text-xs rounded-full">
      In Stock
    </span>
  </div>
</Card>`}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Form Composition Code</h3>
          <CodeBlock
            code={`// Form composition example
<Form onSubmit={handleSubmit}>
  <div className="space-y-4">
    <Input
      label="Full Name"
      name="fullName"
      placeholder="Enter your full name"
      required
    />
    <Input
      label="Email"
      name="email"
      type="email"
      placeholder="Enter your email"
      required
    />
    <Input
      label="Message"
      name="message"
      type="textarea"
      placeholder="Enter your message"
      required
    />
    <Button type="submit" variant="primary" size="lg">
      Submit Form
    </Button>
  </div>
</Form>`}
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Benefits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Promotes code reuse and modularity</li>
          <li>Makes components more flexible and adaptable</li>
          <li>Improves maintainability by breaking UI into small, focused pieces</li>
          <li>Makes testing easier with isolated components</li>
          <li>Enables building complex UIs from simple building blocks</li>
          <li>Follows the single responsibility principle</li>
        </ul>
      </div>
    </div>
  );
};

export default CompositionalExample;