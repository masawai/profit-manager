import React from 'react';

interface ProductInputProps {
  id: number;
  value: string;
  field: 'sales' | 'cost';
  onInputChange: (id: number, field: string, value: string) => void;
}

const ProductInput: React.FC<ProductInputProps> = ({ id, value, field, onInputChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onInputChange(id, field, e.target.value)}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
    />
  );
};

export default ProductInput;
