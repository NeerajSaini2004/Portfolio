export default function HeroEnergyFlow() {
  return <svg className="hero-energy" viewBox="0 0 1440 620" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="energy-left" x1="0" x2="1"><stop offset="0" stopColor="#b7f36b" stopOpacity="0" /><stop offset=".5" stopColor="#b7f36b" stopOpacity=".42" /><stop offset="1" stopColor="#b7f36b" stopOpacity="0" /></linearGradient>
      <linearGradient id="energy-right" x1="1" x2="0"><stop offset="0" stopColor="#92c6ae" stopOpacity="0" /><stop offset=".5" stopColor="#92c6ae" stopOpacity=".38" /><stop offset="1" stopColor="#92c6ae" stopOpacity="0" /></linearGradient>
      <filter id="energy-blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2" /></filter>
    </defs>
    <path id="energy-path-left" className="energy-path energy-left" d="M-10 170 C110 170 115 310 250 310 S355 250 465 310" />
    <path id="energy-path-left-low" className="energy-path energy-left" d="M-10 450 C115 450 150 365 245 365 S360 420 470 365" />
    <path id="energy-path-right" className="energy-path energy-right" d="M1450 170 C1330 170 1325 310 1190 310 S1085 250 975 310" />
    <path id="energy-path-right-low" className="energy-path energy-right" d="M1450 450 C1325 450 1290 365 1195 365 S1080 420 970 365" />
    <g className="energy-glow" filter="url(#energy-blur)">
      <use href="#energy-path-left" /><use href="#energy-path-left-low" />
      <use href="#energy-path-right" /><use href="#energy-path-right-low" />
    </g>
    <g className="energy-particles">
      <circle r="2.3"><animateMotion dur="8s" repeatCount="indefinite"><mpath href="#energy-path-left" /></animateMotion></circle>
      <circle r="1.7"><animateMotion dur="10s" begin="-4s" repeatCount="indefinite"><mpath href="#energy-path-left-low" /></animateMotion></circle>
      <circle r="2"><animateMotion dur="9s" repeatCount="indefinite"><mpath href="#energy-path-right" /></animateMotion></circle>
      <circle r="1.8"><animateMotion dur="11s" begin="-5s" repeatCount="indefinite"><mpath href="#energy-path-right-low" /></animateMotion></circle>
    </g>
  </svg>
}
