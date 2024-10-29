import { ButtonHTMLAttributes, forwardRef, memo } from 'react';

import { ExampleButtonElement } from './ExampleButton.styled';

export interface ExampleButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ExampleButton = memo(
    forwardRef<HTMLButtonElement, ExampleButtonProps>(
        ({ disabled, type = 'button', ...props }, ref) => {
            return (
                <ExampleButtonElement
                    {...props}
                    disabled={disabled}
                    ref={ref}
                    type={type}
                >
                    styled-components
                </ExampleButtonElement>
            );
        },
    ),
);
