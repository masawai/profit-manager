import { useState, useEffect } from 'react';

export default function Home() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [sum, setSum] = useState(null);

  useEffect(() => {
    const num1 = parseFloat(value1) || 0;
    const num2 = parseFloat(value2) || 0;
    setSum(num1 + num2);
  }, [value1, value2]); // value1 または value2 が変更されたときに実行

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded">
        <div className="mb-4">
          <label htmlFor="value1" className="block text-sm font-medium text-gray-700">Value 1</label>
          <input
            type="number"
            id="value1"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="value2" className="block text-sm font-medium text-gray-700">Value 2</label>
          <input
            type="number"
            id="value2"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        {sum !== null && (
          <div className="mt-4">
            <p className="text-lg">Sum: {sum}</p>
          </div>
        )}
      </div>
    </div>
  );
}
