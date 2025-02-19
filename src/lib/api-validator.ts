import { env } from '@/lib/env';
import type { z } from 'zod';

type ApiValidationError = {
  dto: unknown;
  error: string;
  issues: z.ZodIssue[];
};

export function validateAPISchema<T extends z.ZodTypeAny>(
  dto: unknown,
  schema: T,
  description: string
): z.infer<T> {
  const { data, success, error } = schema.safeParse(dto);

  if (success) return data;

  captureError(`API Validation Error: ${description}`, {
    dto,
    error: error.message,
    issues: error.issues,
  });

  throw error;
}

function captureError(message: string, extra: ApiValidationError) {
  if (env.DEV) console.error(message, extra);
  // TODO: Add some kind of logging system
}
