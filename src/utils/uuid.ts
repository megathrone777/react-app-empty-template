const uuid = (): string => Math.random().toString(36).slice(2) + Date.now().toString(36);

export { uuid };
