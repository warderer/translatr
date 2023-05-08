import { it, describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import Translator from '@/pages/index';

describe('[ pages / Translator ]', () => {
    describe('when Translator is rendered', () => {
        it('should render', () => {
            const { asFragment } = render(<Translator />);
            expect(asFragment()).toMatchSnapshot();
        });
    });
});


