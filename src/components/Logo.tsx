import * as React from 'react'

const SvgShuLogoBoxed = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 400 400" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <rect
        stroke="currentColor"
        strokeWidth={20}
        x={10}
        y={10}
        width={380}
        height={380}
        rx={50}
      />
      <g
        transform="translate(125.000000, 100.000000)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
      >
        <polyline
          transform="translate(75.000000, 100.000000) rotate(-360.000000) translate(-75.000000, -100.000000) "
          points="150 0 0 0 150 200 0 200 75 100"
        />
      </g>
    </g>
  </svg>
)

export default SvgShuLogoBoxed
