const redis = require('redis');

const client = redis.createClient('//redis-19856.c80.us-east-1-2.ec2.cloud.redislabs.com:19856', {password: 'cIaveBVJtCvePEH8BTyyc28i8ySlx6mf'});

client.on('ready', ()=>{console.log('ready');});
client.on('error', (err)=>{console.log('error: ' + err);});
client.on('connect', ()=>{console.log('connect');});
client.on('end', ()=>{console.log('end');});

console.time('FirstWay');
for(let n = 1; n<=10000; n++) {
    client.set(n, 'set' + n);
}
console.timeEnd('FirstWay');

console.time('SecondWay');
for(let n = 1; n<=10000; n++) {
    client.get(n);
}
console.timeEnd('SecondWay');


console.time('ThirdWay');
for(let n = 1; n<=10000; n++) {
    client.del(n);
}
console.timeEnd('ThirdWay');

client.quit();