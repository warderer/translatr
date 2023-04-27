import React from 'react';

interface TextareaProps {
  placeholder: string;
  value: string;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ placeholder, value, readOnly, onChange }) => {
  return (
    <textarea
      className="w-full mt-4 p-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded resize-none"
      rows={10}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      onChange={onChange}
    ></textarea>
  );
};

export default Textarea;
