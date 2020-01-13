const redis = require('redis');

const sub_client = redis.createClient('//redis-19856.c80.us-east-1-2.ec2.cloud.redislabs.com:19856', {password: 'cIaveBVJtCvePEH8BTyyc28i8ySlx6mf'});

sub_client.on('subscribe', (channel, count)=>{console.log('subscribe: ', 'channel = ', channel, 'count = ', count);});
sub_client.on('message', (channel, message)=>{console.log('sub channel: ' + channel + ': ' + message);});

sub_client.subscribe('channel-01');

setTimeout(() => {
    sub_client.unsubscribe();
    sub_client.quit();
}, 60000);