import { z } from 'zod';

// Validation schema for environment variables
const envSchema = z.object({
  DEV: z.boolean(),
  PROD: z.boolean(),
  MODE: z.enum(['development', 'production']),
  API_URL: z.string(),
});

const createEnv = () => {
  // Retrieve all env variable, remove VITE_APP_ from their name and build a new env object
  const envVars = Object.entries(import.meta.env).reduce<
    Record<string, string>
  >((acc, curr) => {
    const [key, value] = curr;
    if (key.startsWith('VITE_APP_')) acc[key.replace('VITE_APP_', '')] = value;
    else acc[key] = value;
    return acc;
  }, {});

  // Parse newly created env object against the schema
  const parsedEnv = envSchema.safeParse(envVars);

  // If not successful build a user-friendly error and throw it
  if (!parsedEnv.success) {
    const inError = Object.entries(parsedEnv.error.flatten().fieldErrors)
      .map(([k, v]) => `- ${k}: ${v}`)
      .join('\n');

    throw new Error(
      `Invalid env provided. The following variables are missing or invalid: ${inError}`
    );
  }

  // If successful return parsed data. end data is now validated and typed!
  return parsedEnv.data;
};

export const env = createEnv();
