# <Badge text="Research" type="tip"/> Splicer 

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>


The paper named **Precise Power Delay Profiling with Commodity Wi-Fi** is written by Yaxiong Xie, Mo Li`s student in Nayang Technological University. This note is a recap in a easy-to-understand manner.

Before we start the text, let us consider the following questions:

- What is power delay profile(PDP) ?
- What is the relationship between bandwidth and resolution?
- How do we get higher resolution about PDP on commodity WI-FI?
- What is the meaning of the name "Splicer"?
- Where is the challenge of splicing bandwidth?

## Power Delay Profile

Power delay profiles(PDP) gives the intensity of a signal received through a multipath channel as a function of time delay. The time delay is the difference in travel time between multipath arrivals. The abscissa is in units of *time* and the ordinate is usually in *[decibels](https://en.wikipedia.org/wiki/Decibel)*. It is easily measured empirically and can be used to extract certain channel's parameters and characterize multipath channel features, which are widely used in motion- or localization-based applications, more detail math principles see [Power Delay Profile](https://www.gaussianwaves.com/2014/07/power-delay-profile/).

The paper classified that it is easy to get PDP from the CSI traces collected from commodity Wi-Fi devices([iFFT](https://www.mathworks.com/help/matlab/ref/ifft.html?s_tid=gn_loc_drop)). More specifically, a power delay profile can be measured by directly detecting multipath signals with different arrival times in the time domain, the Channel State Information(CSI) is a good way to describe the channel, which however can be obtained easily from commodity Wi-Fi network interface cards, e.g. Atheors 9300, a NIC that our team used.

## Bandwidth and Resolution

Power delay profile has it resolution, which we can see form the picture, the time resolution($\tau$) of the derived PDP from CSI is limited by the bandwidth of the transmitted signal, in mathematic theory, is $\bigtriangleup \tau = \frac{1}{B}$, that's means the resolution is decided by the signal bandwidth, **wider bandwidth** leads to higher resolution.

However, channel bandwidth of commodity Wi-Fi is regulated by the 802.11 protocol, 20MHz in 802.11 a/g and 40MHz in 802.11n. Take 802.11n as an example, the power delay profile resolution is up to 50ns, which leads to 15m resolution in measuring the multipath lengths.

According to this paper, the Splicer can reducing the errors to be less than 2m. How dose it reduce the error and increase resolution using CSI ?

## Splicer

Under the rules that although the width of each individual Wi-Fi band is limited, the total bandwidth is wide, especially the CSI measured from these individual Wi-Fi channels can be spliced to derive a finer power delay profile with much higher time resolution.

The trouble is, the splicing of CSI may result much sever errors. After locating the error sources, there are two main CSI measurement errors should be eliminated:

- CSI *amplitude* error
- CSI *phase* error

According the paper, after eliminating the two errors, we could get the spliced CSI, from  which power delay profile derived. 

## Error correction

### Sources of CSI measurement errors

According to the wireless processing in the 802.11 NIC and the OFDM[^1], the CSIs measured by NICs mainly introduce the following errors:

- SFO(sampling frequency offset)
- CFO(central frequency offset)
- PBD(packet boundary detection)

In mathematic theory, we express the equation:

<a href="https://www.codecogs.com/eqnedit.php?latex=\inline&space;\varphi_k=\theta&space;_k&space;&plus;&space;k\cdot&space;(\lambda_o&space;&plus;&space;\lambda_b&space;)&space;&plus;&space;\beta" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\inline&space;\varphi_k=\theta&space;_k&space;&plus;&space;k\cdot&space;(\lambda_o&space;&plus;&space;\lambda_b&space;)&space;&plus;&space;\beta" title="\varphi_k=\theta _k + k\cdot (\lambda_o + \lambda_b ) + \beta" /></a>

where $\lambda_b$ and $\lambda_o$
are phase errors introduced by the packet boundary detection uncertainty and the sampling frequency offset, respectively,  $\beta$ is the phase error caused by the central frequency offset.

### Amplitude error correction


In this figure, we can see that the two CSI traces from the same Wi-Fi band with an amplitude offset of 7dB. That means although two derived power delay profile have different power levels, the average difference is stable and follows same shapes.

### Phase error correction

- $\lambda_b$ : is caused by the time shift, to correct it, the paper leverage an observation that the time shift varies in each packet reception but follows a Gaussian distribution with zero mean, in other words, it can be remove by averaging over the measured CSI phase.
- $\lambda_o$: the SFO, this paper's solution is not the best way, see my another blog.
- $\beta$: the CFO, for individual Wi-Fi bands, phase offset has no impact on derived power delay profile.

## Conclusion

This paper introduced a system named "Splicer" that can driver precise power delay profile on commodity Wi-Fi devices, by using it, we can get the wider Wi-Fi band, that means higher resolution.

[^1]: CYushi Shen, Ed Martin. ezhannel Estimation in OFDM Systems. Freescale Semiconductor, Inc. 2006