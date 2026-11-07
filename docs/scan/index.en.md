# Scan / Audit
![TRINITY Scan report](../assets/images/projects/scan/scan-report.png){ .unyport-screen }

✅ Scan only targets that you are authorized to assess.
⭕ A summary score does not replace reviewing the report evidence.
➡️ Check the entry point before starting an analysis:
```bash
curl -fsSI https://scan.trinity-net.com/
```

`TRINITY Scan / Audit` analyses a public surface and transforms technical signals into a readable report.
The service combines passive collection, active probes, standardization and correlation to give a clear view of a domain, application or network exposure.

## Objective
- ✅ identify publicly exposed points
- ✅ grouping observable evidence into a report
- ✅ help prioritise corrections
- ✅ provide an understandable synthesis by a technical team and a decision maker

## Route
```text
cible
  -> collecte
  -> verification
  -> correlation
  -> score
  -> rapport partageable
```

## Perimeter
The scanner focuses on the signals visible from the Internet.
It does not replace an intrusive audit, a contractualized slopest or an internal analysis with privileged access.
