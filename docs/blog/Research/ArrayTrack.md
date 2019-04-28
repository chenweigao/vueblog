# <Badge text="Research" type="tip"/> ArrayTrack

## Abstract

The presence of reflectors in the environment surrounding a transmitter and receiver create multiple paths that a transmitted signal can traverse.

As a result, the receiver sees the [superposition](https://en.wikipedia.org/wiki/Superposition_principle) of multiple copies of the transmitted signal, each traversing a different path. Each signal copy will experience differences in [attenuation](https://en.wikipedia.org/wiki/Attenuation), [delay](https://en.wikipedia.org/wiki/Propagation_delay) and [phase shift](https://en.wikipedia.org/wiki/Phase_(waves)) while travelling from the source to the receiver. This can result in either constructive or destructive interference, amplifying or attenuating the signal power seen at the receiver. Strong destructive interference is frequently referred to as a **deep fade** and may result in temporary failure of communication due to a severe drop in the channel [signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).

## Signal fade

## Two abservations

1. Increasing number of antennas on an access poin (AP)

   New technologies introduced with 802.11ac include **more MIMO spatial streams** , vs. four in 802.11n.

2. WiFi is ubiquitous and densely deployed

## Challenge

1. Strong multipath reflections indoors
2. **Direct path** attenuated or completely blocked, may be not strongest

## Key observation

Direct path bearing is more stable than reflection path bearings when client moves slightly.

## AoA

Angle of arrival(AoA)[^1], AoA determines the direction by measuring the Time Difference of Arrival ([TDOA](https://en.wikipedia.org/wiki/TDOA)) at individual elements of the array -- from these delays the AoA can be calculated.

Generally this TDOA measurement is made by measuring the difference in **received phase** at each element in the antenna array.

## Design

- Packet detection

- multipath suppression

  Two peak bearings within five degrees are considered **paired**.

- Diversity synthesis

  Increase the number of antennas we can utilize

- MUSIC algorithm

  Does not work well because of coherent signals, they *same frequence*, the only difference is phase.

  **Spatial smoothing**:  handles coherent signals. ($2.3.2)

  > ArrayTrack's multipath suppression algorithm **leverages change** in the wireless **channel** that occur when the transimitter or objections in the **vicinity(附近) move** by grouping together AoA spectra(光谱) from multiple frames, if available.


- AoA spectra synthesis and search for highest probability position.

## Downconversion

> $3: Each radio receiver incorporates a 2.4 GHz oscillator whose purpose is to convert the incoming radio frequency signal to its representation in I-Q space shown.
>
> An undesirable consequence of this downconversion(下混频) step is that it introduces an unknown phase offset to the resulting signal, rendering AoA inoperable.

The consequence is that this manifests as an *unknow phase*. For this, the paper propose a one-time calibration scheme to handle these equipment.

## Useful word

1. *brife primer* 简单、简短的定义说明

   In order to explain how we generate AoA spectra, we now present a **brief primer** on phased arrays.

2. *deleterious consequences*: /,delɪ'tɪərɪəs/ 有害的结果

## Relevant document

1. [ArrayTrack: A Fine-Grained Indoor Location System.pdf](https://pan.baidu.com/s/1HqaQNs42uYe_PyJ0ehp7MQ)

2. [report slide.pdf](https://pan.baidu.com/s/161Qz3aXvc8dzt1Urc5aR-g)

3. [Jie Xiong report video.mp4](https://pan.baidu.com/s/1zBw6uqX2BEyra0k2FNhUBA)

4. R. O. Schmidt, 1986. [MUSIC (algorithm)](https://en.wikipedia.org/wiki/MUSIC_(algorithm)#MUSIC_algorithm).

5. From wikipedia, [AoA](https://en.wikipedia.org/wiki/Angle_of_arrival)