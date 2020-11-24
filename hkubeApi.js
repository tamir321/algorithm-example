const start = async (args, api) => {
    let ret="did zero action"

    input=args['input'][0]
    if (input.hasOwnProperty("action")){
        if (input.action == "startAlg"){
             ret = await api.startAlgorithm(input.algName,input.input);
        }
        if (input.action == "startStored"){
             ret = await api.startStoredSubpipeline(input.pipeName,input.input);
        }
        if (input.action == "startRaw"){
             ret = await api.startRawSubpipeline(input.pipeName,JSON.parse(input.pipNodes),input.input);
        }
        if (input.action == "startBatch"){
             ret = await Promise.all(Array.from(Array(100)).map(i => api.startAlgorithm('green-alg', [{ size: 10, batch: 1 }])))
        }
    }
    
    
    // const ret = await api.startAlgorithm('green-alg',[{size:10, batch: 1}]);
    // const ret = await api.startStoredSubpipeline('simple',{files: {link: 3}});
    // const ret = await api.startRawSubpipeline('foo2',pipe.nodes, {bar: {size: 300000, batch: 10}});
    return ret;
  }
  module.exports = {
    start
}


