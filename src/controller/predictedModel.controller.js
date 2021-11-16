import {RULES} from '../mock/rules'

export const predictedModel = (csvJSON) => {
  csvJSON.forEach(pkg => {
    let pkgProability = 0;    
    RULES.forEach(rule => {
      let delayedProbability = processRule(pkg, rule);
      pkgProability = pkgProability + delayedProbability
    });    
    console.log('PKG SE RETRASA CON PROB', pkgProability);
  });
    return csvJSON
}

const processRule = (pkg, rule) => {
  const ruleWeight = rule.weight;
  let total = 0;
  let condition = 0;
  if(rule.type === 'MULTIPLE'){
    let aux = rule.conditions.filter(condition => condition.value === pkg[rule.field]);
    condition = aux[0] ? aux[0].weight : 0;
  }
  return ruleWeight * condition;
}