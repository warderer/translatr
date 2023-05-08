import { it, describe, expect } from 'vitest';
import * as constants from "./constants";

describe('[ utils / Constants ]', () => {
    it('should preserve values', () => {
        expect(constants).toMatchInlineSnapshot(`
          {
            "DEFAULT_LANGUAGE_TO_TRANSLATE": "English",
            "MAX_COUNT": 100,
          }
        `)

    });
});
