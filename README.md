##  React Todo Redux with Metrics


Sample Todo application using React and Redux, forked from []().

Features:

* React and Redux
* Statsd metrics using [Bucky](http://github.hubspot.com/bucky/), implemented as a functional middleware and leveraging the [redux-analytics](https://github.com/markdalgleish/redux-analytics) package.
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

On Mac OSX, using `netcat`:

```
echo "somemetric:1000|c" | nc -c -u docker 8125
```

### Viewing Metrics

Visit [http://docker:10000](http://docker:10000) to view your sweet sweet metrics.
