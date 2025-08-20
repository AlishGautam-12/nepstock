// // InputField.tsx
// import React from "react";

// type InputFieldProps = {
//   label: string;
//   type?: string;
//   placeholder?: string;
// };

// const InputField: React.FC<InputFieldProps> = ({ label, type = "text", placeholder }) => {
//   return (
//     <div className="flex flex-col">
//       <label className="mb-1 text-sm font-medium">{label}</label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   );
// };

// export default InputField; // 👈 make sure this is here


import React from "react";

interface InputFieldProps {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  placeholder?: string;
}

export default function InputField({ name, value, onChange, label, placeholder }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border rounded-md p-2 text-sm"
      />
    </div>
  );
}
