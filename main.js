const NodejsWrapper = require('@hkube/nodejs-wrapper');
const alg = require("./hkubeApi")
const main = async () => {
    NodejsWrapper.debug("ws://test.hkube.io/hkube/debug/tamir",alg.start())
}

main()