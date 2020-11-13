import React, { ButtonHTMLAttributes } from "react";
import "./styles.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
    <Button type="button" {...rest}>
        {loading? 'Carregando...': children}

    </Button>
);

export default Button;