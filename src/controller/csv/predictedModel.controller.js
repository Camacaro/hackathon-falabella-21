import {RULES} from '../../mock/rules'

export const predictedModel = (csvJSON) => {
  csvJSON.forEach(pkg => {
    let pkgProability = 0;
    let pkgStatus = checkItinerary(pkg);        
    RULES.forEach(rule => {
      let delayedProbability = processRule(pkg, rule, pkgStatus);
      pkgProability = pkgProability + delayedProbability
    });    
    pkg[`% Delay Package Probability in NODE${pkgStatus.whereAmIHeading}`] = pkgProability;
  });
    return csvJSON;
}

const processRule = (pkg, rule, pkgStatus) => {
  const ruleWeight = rule.weight;
  let total = 0;
  let condition = 0;
  if(rule.type === 'MULTIPLE'){
    let aux = rule.conditions.filter(condition => condition.value === pkg[rule.field]);
    condition = aux[0] ? aux[0].weight : 0;
  }
  else if(rule.type === 'DELAYED_NODE'){
    let aux = rule.conditions.filter(condition => condition.value === pkg[`NODE ARRIVAL${pkgStatus.whereAmI}`]);
    condition = aux[0] ? aux[0].weight : 0;
  }
  
  return ruleWeight * condition;
}

const checkItinerary = (pkg) => {
  let whereAmIHeading = 0;
  //BUSCAR LONGITUD CAMINO
  let pkgNodes = Object.keys(pkg)
  .filter(key => key.startsWith('ESTIMATED ARRIVAL NODE'));  
  let itineraryLength = pkgNodes.length + 1;   
  pkgNodes.forEach(attr => {
    let nodeNumber = attr.slice(attr.length - 1);
    if(pkg[attr] === '-') {
      itineraryLength = nodeNumber-1;
      return
    }
  });      
  //BUSCAR DONDE ESTOY
  for(let i = 2; i <= itineraryLength; i++){
    if(pkg[`NODE ARRIVAL${i}`] === '-') {
      whereAmIHeading = i;
      break
    }
  };  
  return {
    length: itineraryLength,
    whereAmI: whereAmIHeading -1,
    whereAmIHeading: whereAmIHeading
  }
}