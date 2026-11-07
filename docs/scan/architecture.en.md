# Architecture

`Scan / Audit` separates user input, analysis and restitution.
This separation allows for the initiation of analysis, the retention of useful evidence and the publication of a report without recalculating the results at each reading.

## Surfaces
- public interface to run or view a scan
- analysis engine to collect and normalize signals
- restitution layer to produce synthetic and technical views

## Principles
- the published report is read only
- the evidence is timed
- results are grouped by target and risk family
- scores are used to prioritize, not to replace human analysis

