import React from 'react'

interface SignupButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    text?: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

function SignupButton({ onClick, text = 'Sign Up', variant = 'primary', disabled = false, type = 'button', className = '' }: SignupButtonProps) {
    const baseStyle = 'h-[45px] px-8 border border-primary flex items-center justify-center rounded-full focus:outline-none transition-all duration-300';
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-300 text-black hover:bg-gray-400',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    };

    const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonStyle}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default SignupButton