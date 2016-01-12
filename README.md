##  React Todo Redux with Metrics


Sample Todo application using React and Redux, forked from []().

Features:

* React and Redux
* Statsd metrics using [Bucky](http://github.hubspot.com/bucky/), implemented as a [functional middleware](app/lib/createStore.js#L21-L26) and leveraging the [redux-analytics](https://github.com/markdalgleish/redux-analytics) package.
* [Dockerised](https://github.com/mefellows/docker-tick) [TICK](http://influxdata.com) stack to store and visualise metrics.

Created for a demo at the [MelbJS January 2016](lanyrd.com/2016/melbjs-january/sdxfpc/) meetup.

## Getting Started

### Prerequisites

* [Docker Toolbox](https://www.docker.com/docker-toolbox)
  * At least Docker and Docker-Machine is required to run the Metrics stack
* Node (4.5.2+)

### Running

```
git clone git@github.com:mefellows/react-redux-universal-metrics-demo.git && cd react-redux-universal-metrics-demo
npm i
npm start
```

## Sending and Viewing Metrics

Once the application is running, it will start sending metrics to Bucky, which in turn will act as a broker between your front-end client (React) and back-end metrics store (TICK).

If you open up Developer Tools in your browser, you will see period `POST` requests to `docker:5000/v1/send` with a payload something like:

```
helloapp.constructor:2432.434|g
myawesomemetrics.page.navigationStart:0|ms
myawesomemetrics.page.unloadEventStart:16|ms
myawesomemetrics.page.unloadEventEnd:16|ms
myawesomemetrics.page.redirectStart:-1452633871296|ms
myawesomemetrics.page.redirectEnd:-1452633871296|ms
myawesomemetrics.page.fetchStart:0|ms
myawesomemetrics.page.domainLookupStart:0|ms
myawesomemetrics.page.domainLookupEnd:0|ms
myawesomemetrics.page.connectStart:0|ms
myawesomemetrics.page.connectEnd:0|ms
myawesomemetrics.page.secureConnectionStart:-1452633871296|ms
myawesomemetrics.page.requestStart:13|ms
myawesomemetrics.page.responseStart:14|ms
myawesomemetrics.page.responseEnd:15|ms
myawesomemetrics.page.domLoading:31|ms
myawesomemetrics.page.domInteractive:601|ms
myawesomemetrics.page.domContentLoadedEventStart:601|ms
myawesomemetrics.page.domContentLoadedEventEnd:604|ms
myawesomemetrics.page.domComplete:617|ms
myawesomemetrics.page.loadEventStart:617|ms
myawesomemetrics.page.loadEventEnd:617|ms
mymetricnamespace.actions.ADD_TODO:3|c
mymetricnamespace.actions.REMOVE_TODO:3|c
```

These are [Statsd](https://github.com/etsy/statsd/) messages

### Manually Send Metrics

To manually send metrics, On Mac OSX, using `netcat`:

```
echo "somemetric:1000|c" | nc -c -u docker 8125
``

### Viewing Metrics in the Browser

Visit [http://docker:10000](http://docker:10000) to view your sweet sweet metrics.

### Querying InfluxDB directly

If you prefer the more esoteric interface of InfluxDB:

```
docker exec -i -t tick influx
> help
> SELECT "value" FROM "telegraf"."default"."statsd_mymetricnamespace_actions_REMOVE_TODO" WHERE time > now() - 5m
```

This query grabs all `REMOVE_TODO` actions in the last 5m.

## TODO

* Run in a web server to demonstrate the universal capabilities of the libraries used
