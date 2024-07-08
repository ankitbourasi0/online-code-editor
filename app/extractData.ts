import languagesData from "../runtimes.json";

const LANGUAGE_VERSION: { [key: string]: string } = {};

languagesData.forEach((lang) => {
  // Use the primary language name (lowercase) as the key
  const key = lang.language.toLowerCase();

  // If there are multiple versions for the same language, use the latest one
  if (!LANGUAGE_VERSION[key] || lang.version > LANGUAGE_VERSION[key]) {
    LANGUAGE_VERSION[key] = lang.version;
  }
});

export { LANGUAGE_VERSION };
