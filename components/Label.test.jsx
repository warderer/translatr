import { it, describe, expect } from 'vitest';
import { render } from '@testing-library/react'; // Me permite renderizar componentes con un dom virtual en consola
import Label from './Label';

describe('[ components / Label ]', () => {
    describe('when Label is rendered', () => {
        it('should render a label', () => {
            // Test de Componente Visual Estructural (De Entrada y Salida)
            // Patrón de Testing AAA

            // ARRANGE: Es la parte de la preparacion de los datos
            const props = {
                count: 0,
                maxCount: 100,
            }

            // ACT: Es la accion que se va a ejecutar
            // asFragment es un snapshot de lo que se renderizo sin un contenedor
            const { asFragment } = render(<Label {...props} />);

            // ASSERT: Es la parte de la verificación de los datos
            // La primera vez que corre el test, se crea un snapshot de lo que se renderizo, la segunda vez que corre el test, se compara el snapshot con lo que se renderizo y si son iguales, el test pasa, si son diferentes, el test falla
            expect(asFragment()).toMatchSnapshot();
        });
    });
});