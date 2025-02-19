import type { ZodObject, ZodRawShape, ZodTypeAny } from 'zod';
import { z } from 'zod';

export const listResponseSchema = <T extends ZodTypeAny>(
  itemSchema: T
) => {
  return z.object({
    result: z.array(itemSchema),
    total: z.number().nonnegative(),
  });
};

export const paginatedRequestSchema = <T extends ZodRawShape>(
  itemSchema: ZodObject<T>
) => {
  return itemSchema.extend({
    offset: z.number().nonnegative(),
    limit: z.number().positive(),
  });
};
