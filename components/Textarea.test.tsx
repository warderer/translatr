import { it, describe, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Textarea, { TextareaProps } from './Textarea';

// Al ser un test estructural de entrada y salida no importa realmente los valores que se le pasen, solo que estos se muestren correctamente
const defaultProps: TextareaProps = {
    placeholder: 'placeholder',
    value: 'value',
    onChange: () => {}, // Función vacia: Se conoce como noop (no operation)
    readOnly: true
}

describe('[ components / Textarea ]', () => {

    describe('when Textarea is rendered', () => {
        it('should render a textarea', () => {
            const { asFragment } = render(<Textarea {...defaultProps} />);
            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe('when the value is changed', () => {
        it('should call onChange', () => {
            // Arrange
            const props = {
                ...defaultProps,
                onChange: vi.fn(), // stub: Función que no hace nada pero que registra si se ha llamado o no y con que argumentos. Reemplaza a la función original.
                placeholder: 'placeholder to change'
            }
            // Act
            render(<Textarea {...props}/>) // cargamos el componente

            // React Testing Library no permite cambiar el valor de un input directamente con selectores, por lo que tenemos que hacerlo a través de fireEvent
            fireEvent.change(screen.getByPlaceholderText('placeholder to change'), { target: { value: 'new value' } });

            // Assert
            expect(props.onChange).toHaveBeenCalled();
        });
    });

});