# Emerging Disease Detection

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[Live build status](https://validatedpatterns.io/ci/?pattern=mcgitops)

## Start Here

If you've followed a link to this repository, but are not really sure what it contains
or how to use it, head over to [Emerging Disease Detection](https://validatedpatterns.io/emerging-disease-detection/)
for additional context and installation instructions

## Background

Detection of disease states like sepsis, stroke, pulmonary embolism, and heart attack requires low-latency, broadband, asynchronous streaming capabilities. We have prototyped an early warning platform built with a distributed edge architecture, fed by at-home post-operative monitoring (fitbit, smart phone, Wi-Fi devices) and automated Clinical care escalation and coordination processes. This platform has the potential to significantly lower network traffic and cost while providing early warning interventions for our nation's Veterans.

## Kafka deployment

The Kafka chart requires Streams for Apache Kafka 3.2 or later with the
`kafka.strimzi.io/v1` API. It creates a KRaft cluster with three combined
broker/controller nodes using a `KafkaNodePool`. Replica count, storage, and
resources remain configurable through the chart's `kafka` values. An empty
`kafka.version` uses the installed operator's default supported version.

This configuration is for fresh deployments. An existing ZooKeeper cluster with
data requires the supported ZooKeeper-to-KRaft migration before upgrading its
operator to a KRaft-only release.
