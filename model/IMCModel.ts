enum IMCClassification {
    Underweight = 18.5,
    Normal = 25,
    Overweight = 30,
    ObeseI = 35,
    ObeseII = 40,
    ObeseIII = Infinity
}



export const IMCModel = {
  calculate(weightKg, heightM) {
    const imc = weightKg / (heightM * heightM);
    return parseFloat(imc.toFixed(2));
  },

  classify(imc) {
    if (imc < IMCClassification.Underweight) 
        return { label: 'Abaixo do peso', color: '#60A5FA', emoji: '🌧️' };
    if (imc < IMCClassification.Normal)   
        return { label: 'Peso normal', color: '#34D399', emoji: '✨' };
    if (imc < IMCClassification.Overweight)   
        return { label: 'Sobrepeso', color: '#FBBF24', emoji: '⚡' };
    if (imc < IMCClassification.ObeseI)   
        return { label: 'Obesidade grau I', color: '#F97316', emoji: '🔥' };
    if (imc < IMCClassification.ObeseII)   
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