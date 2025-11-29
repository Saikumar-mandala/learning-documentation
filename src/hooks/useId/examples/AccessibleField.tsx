import { useId } from 'react';

interface FieldProps {
    label: string;
    type?: string;
}

const AccessibleField = ({ label, type = 'text' }: FieldProps) => {
    const id = useId();

    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="block text-sm font-bold mb-2 text-gray-700"
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter ${label.toLowerCase()}...`}
            />
            <p className="text-xs text-gray-500 mt-1">
                ID: <code className="bg-gray-100 px-1 rounded">{id}</code>
            </p>
        </div>
    );
};

export default AccessibleField;
