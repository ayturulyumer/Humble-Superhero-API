export const validateSuperheroData = (name, superpower, humilityScore) => {
    const errors = [];
  
    if (typeof name !== "string" || name.trim() === "") {
      errors.push("Name must be a non-empty string.");
    }
    if (typeof superpower !== "string" || superpower.trim() === "") {
      errors.push("Superpower must be a non-empty string.");
    }
    if (typeof humilityScore !== "number" || humilityScore < 1 || humilityScore > 10) {
      errors.push("Humility score must be a number between 1 and 10.");
    }
  
    return errors;
  };