import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function About() {
  return (
    <>
      <h2>About</h2>
      <div className='main-text'>
        <h3>Short bio</h3>
        Born in 1986 (21 days before Chernobyl) in north-west part of Poland. Interested in future technologies and past civilizations.<br />
        Master of science but mainly working as freelancer.<br /><br />
        <div style={{ lineHeight: '200%', marginBottom: 50, textAlign: 'right' }}>
          ...First Software in April 2002<br />
          ...First Bitcoin in Jan 2013<br />
        </div>
        <h3>Timeline</h3>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2022 - <b>Crypto/NFT</b> investments and private stuff</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2021 - <b>Volvo</b> services</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2016-2021 - <b>Viessmann</b> services</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2014-2016 - <b>Fingo</b> services</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2014 - <b>Yield planet</b> services</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2013 - <b>Legimi</b> services</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2012 - Start of <b>MFT</b> project</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2011 - Start of <b>Zer Creation</b> business</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>2009 - <b>Metack</b> services</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  )
}
