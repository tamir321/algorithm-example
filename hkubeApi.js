const start = async (args, api) => {
    const ret="did zero action"

    input=args['input'][0]
    if (input.action == "startAlg"){
        const ret = await api.startAlgorithm(input.algName,input.input);
    }
    if (input.action == "startStored"){
        const ret = await api.startStored(input.pipeName,input.input);
    }
    if (input.action == "startRaw"){
        const ret = await api.startRawSubpipeline(input.pipeName,pipNodes,input.input);
    }
    if (input.action == "startBatch"){
        const ret = await Promise.all(Array.from(Array(100)).map(i => api.startAlgorithm('green-alg', [{ size: 10, batch: 1 }])))
    }
    
    // const ret = await api.startAlgorithm('green-alg',[{size:10, batch: 1}]);
    // const ret = await api.startStoredSubpipeline('simple',{files: {link: 3}});
    // const ret = await api.startRawSubpipeline('foo2',pipe.nodes, {bar: {size: 300000, batch: 10}});
    return ret;
  }