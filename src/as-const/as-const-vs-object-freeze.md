## Difference of `as const` (TS) and `Object.freeze` (JS)

If you've been into JS ecosystem for a while you probably have encountered `Object.freeze` which does a similar way but on Vanilla JS but there are key differences:

| Feature                      | as const (TS)              | Object.freeze (JS)   |
| ---------------------------- | -------------------------- | -------------------- |
| Purpose                      | Type-level immutability    | Runtime immutability |
| Works with nested properties | Multi Level (compile time) | Single Level         |
| Runtime Impact               | ❌                         | ✅                   |
