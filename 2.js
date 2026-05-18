// Логика XOR, Импликации и Эквивалентности
function calculateAdvancedLogic(op, a, b) {
    if (op === 'XOR') return (a !== b) ? 1 : 0;
    if (op === '->')  return (!a || b) ? 1 : 0; // Импликация
    if (op === '<->') return (a === b) ? 1 : 0;  // Эквивалентность
    return 0;
}
console.log("python.2 загружен");
