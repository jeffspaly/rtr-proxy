function cors(res){res.setHeader('Access-Control-Allow-Origin','*');res.setHeader('Access-Control-Allow-Methods','GET,OPTIONS');res.setHeader('Access-Control-Allow-Headers','Content-Type');}
function rnd(n=6){const b=100+Math.random()*100;return Array.from({length:n},()=>Math.round((b+(Math.random()-0.5)*60)*100)/100);}
module.exports=(req,res)=>{if(req.method==='OPTIONS'){cors(res);return res.status(200).end();}
  cors(res);
  const q=(req.query&&(req.query.q||req.query.query))?String(req.query.q||req.query.query):'test';
  const site=(req.query&&req.query.site)?String(req.query.site):'US';
  const prices=rnd(6);
  res.status(200).json({ok:true,site,query:q,prices,avg:Number((prices.reduce((a,b)=>a+b,0)/prices.length).toFixed(2))});
};
