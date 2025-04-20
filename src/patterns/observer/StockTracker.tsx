import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { globalEventEmitter } from './EventEmitter';

interface StockPrice {
  symbol: string;
  price: number;
  change: number;
}

const StockTracker: React.FC = () => {
  const [stocks, setStocks] = useState<StockPrice[]>([
    { symbol: 'AAPL', price: 150.0, change: 0 },
    { symbol: 'GOOGL', price: 2800.0, change: 0 },
    { symbol: 'MSFT', price: 300.0, change: 0 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => 
        prevStocks.map(stock => {
          const change = (Math.random() - 0.5) * 10;
          const newPrice = Math.max(stock.price + change, 1);
          
          globalEventEmitter.emit('stockUpdate', {
            symbol: stock.symbol,
            price: newPrice,
            change
          });

          return {
            ...stock,
            price: newPrice,
            change
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h4 className="font-semibold mb-4">Live Stock Prices</h4>
      <div className="space-y-3">
        {stocks.map(stock => (
          <div
            key={stock.symbol}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <div>
              <div className="font-medium">{stock.symbol}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                ${stock.price.toFixed(2)}
              </div>
            </div>
            <div className={`flex items-center ${
              stock.change >= 0 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              {stock.change >= 0 ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              <span>{Math.abs(stock.change).toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTracker;