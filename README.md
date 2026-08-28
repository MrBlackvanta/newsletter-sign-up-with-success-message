# Newsletter sign-up with success message

My solution to the [Newsletter sign-up with success message](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://newsletter-sign-up-with-success-message.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/newsletter-sign-up-with-success-message

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Colour

Six pairings failed, four on text contrast and two on non-text. Each moved the smallest
amount that clears its threshold:

|                                 | design          | built     | contrast     |
| ------------------------------- | --------------- | --------- | ------------ |
| Placeholder                     | `#949494`       | `#767676` | 3.03 to 4.54 |
| Input border                    | about `#C6C6C6` | `#949494` | 1.71 to 3.03 |
| Check circle                    | `#FF6155`       | `#FF5E52` | 2.96 to 3.01 |
| Error message, field and border | `#FF6155`       | `#D70F00` | 2.96 to 5.31 |
| Typed text in the error field   | `#FF6155`       | `#D70F00` | 2.51 to 4.50 |
| Hover button label              | white           | `#242742` | 2.85 to 4.67 |

**The input border came from the design JPG, not the file**, because the parser reports
fills and not strokes. All four edges measure about `#C6C6C6`, so the real outline is much
lighter than the style guide's grey. I sanity-checked the method on the same export: the
focused border measures within a couple of points of its true value, and the error
border's luma matches its swatch. It only looks washed out because JPEG chroma subsampling
smears thin red lines.

**The hover gradient is untouched.** White on it is under 3:1 at both ends, so the label
flips to the dark navy instead and the large coloured area stays exactly as designed.

The attribution needs two greys, one for the white card below 640px and one for the dark
page above it. No single neutral clears 4.5:1 on both.

### Deviations

**The desktop JPG is stale relative to the design file.** Its card measures 928 wide with
asymmetric padding against the file's internally consistent 904 and symmetric 32, so an
overlay on the JPG sits 12px narrower per side. The build follows the file.

**The tablet frame contradicts itself.** It claims a 16px label inside an 18px box, which
1.5 line-height can't produce, and desktop and mobile both say 12. It also uses a 16px gap
where the other two use 24, and fractional card padding that only exists because the
illustration is 358.29px tall. Both normalised, costing 2px of card height.

**Both breakpoints are mine.** The design ships 375, 768 and 1440 with nothing between, so
640 switches the full-bleed phone layout to a card and 1024 goes to two columns. The 904px
card can't fit at 768.

**One validation message covers both failures.** "Valid email required" is the only error
string in the design and it's shown for an empty field and a malformed address alike,
decided by `input.validity` rather than a hand-written pattern. It sits beside the label on
the same row, so an error causes no layout shift.

Focus replaces the user-agent ring rather than removing it, using the design's own border
change, with a transparent outline retained for forced-colors mode.

**The illustrations stay SVG.** They're vector in the starter files, and rendering them to
WebP costs four to seven times the bytes at the sizes a 2x display needs. `<picture>`
art-directs the two files, which is why they're plain `<img>` rather than `next/image`.

The hover fill cross-fades on a `::before` layer, since `background-image` isn't an
interpolable property. Dropped under `prefers-reduced-motion`.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
