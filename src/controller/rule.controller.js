const RULES = require('../mock/rules');
const Rule = require('../schemas/ruleSchema');

export const ruleController = (rule) => {
   return RULES;
}

export const addController = (req) => {
   console.log('agregando regla');
   const rule = new Rule();
   rule.id = 'rule002';
   rule.name = 'OPERATOR_TYPE';
   rule.type = 'MULTIPLE';
   rule.status = 'ACTIVE';
   rule.field = 'operatorType';
   rule.weight = '0.5';
   rule.conditions = 'array';

   rule.save();

   /*return new Promise(((resolve, reject) => {
      rule.save((err) => {
        if (err) {
          const error = `Error ${err}`;
          reject({ status: true, message: error });
        } else {
          resolve({ status: true, message: 'successfully' });
        }
      });
    }));*/
}
