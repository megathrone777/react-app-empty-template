const splitText = (text: string, parts: number = 2): string[] => {
  if (parts <= 1) return [text];

  const splitIndices: number[] = [];

  for (let i = 1; i < parts; i++) {
    const target = Math.round((text.length * i) / parts);
    const before = text.lastIndexOf(" ", target);
    const after = text.indexOf(" ", target);

    if (before === -1 && after === -1) continue;

    let idx: number;

    if (before === -1) idx = after;
    else if (after === -1) idx = before;
    else idx = target - before <= after - target ? before : after;

    splitIndices.push(idx);
  }

  const result: string[] = [];
  let prev = 0;

  for (const idx of splitIndices.sort((a, b) => a - b)) {
    result.push(text.slice(prev, idx));
    prev = idx + 1;
  }

  result.push(text.slice(prev));

  return result;
};

export { splitText };
