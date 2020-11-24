# hkube-js-algorithm
to start algorithm 
```json
{"action":"startAlg","algName":"green-alg","input":[1]}
```
to start pipeline 
```json
{"action":"startStored","pipeName":"simple","input":[1]}
```
to start raw pipeline
```json
{"action":"startRaw","pipeName":"raw","pipNodes":[
    {
      "algorithmName": 'green-alg',
      "input": [
        '@flowInput.bar'
      ],
      "nodeName": 'a'
    },
    {
      "algorithmName": 'yellow-alg',
      "input": [
        '#@a'
      ],
      "nodeName": 'b'
    }
  ],"input":{"bar":{"size":"3","batch":"4"}}}

