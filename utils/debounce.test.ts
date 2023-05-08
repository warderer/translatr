import { describe, it, expect, vi, beforeEach } from 'vitest';
import debounce from './debounce';

describe('utils /debounce', () => {

    beforeEach(() => {
        vi.useFakeTimers();
    });

    describe('when the function is called multiple times', () => {
        it('should call the debounced function once', () => {
            // Arrange
            const func = vi.fn();
            const debouncedFunction = debounce(func, 500);

            // Act
            debouncedFunction();
            debouncedFunction();
            debouncedFunction();

            // vi.runAllTimers();
            vi.advanceTimersByTime(500);

            // Assert
            expect(func).toHaveBeenCalledTimes(1)
        })
    })
});