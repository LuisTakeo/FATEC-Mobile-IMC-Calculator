export const IMCModel = {
  calculate(weightKg, heightM) {
    const imc = weightKg / (heightM * heightM);
    return parseFloat(imc.toFixed(2));
  },

  classify(imc) {
    if (imc < 18.5) 
        return { label: 'Abaixo do peso', color: '#60A5FA', emoji: '🌧️' };
    if (imc < 25)   
        return { label: 'Peso normal', color: '#34D399', emoji: '✨' };
    if (imc < 30)   
        return { label: 'Sobrepeso', color: '#FBBF24', emoji: '⚡' };
    if (imc < 35)   
        return { label: 'Obesidade grau I', color: '#F97316', emoji: '🔥' };
    if (imc < 40)   
        return { label: 'Obesidade grau II',color: '#EF4444', emoji: '⚠️' };
    return { label: 'Obesidade grau III',     color: '#DC2626', emoji: '🚨' };
  },

  validate(weight, height) {
    if (!weight || !height) 
        return 'Preencha todos os campos.';
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h)) 
        return 'Use apenas números.';
    if (w <= 0 || w > 500)   
        return 'Peso inválido (1–500 kg).';
    if (h <= 0 || h > 3)     
        return 'Altura inválida (ex: 1.75).';
    return null;
  },
};