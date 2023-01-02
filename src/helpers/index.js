export const clearKey = displayValue =>
    displayValue.length === 1 ? '0' : displayValue.slice(0, -1);

export const updateDisplayValue = (displayValue, value) =>
    displayValue === '0' ? '' + value : displayValue + value;
