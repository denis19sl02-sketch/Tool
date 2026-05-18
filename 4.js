// Логика AND, OR, NOT
function calculateBasicLogic(op, a, b) {
    if (op === 'NOT') return !a ? 1 : 0;
    if (op === 'AND') return (a && b) ? 1 : 0;
    if (op === 'OR')  return (a || b) ? 1 : 0;
    return 0;
}
console.log("python.1 загружен");
