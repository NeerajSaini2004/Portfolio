export default function AmbientBackground() {
  return <div className="ambient-background" aria-hidden="true">
    <div className="ambient-orb ambient-orb-green" />
    <div className="ambient-orb ambient-orb-blue" />
    <svg className="ambient-ribbons" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <path d="M-80 560 C180 400 210 720 470 555 S810 410 1010 555 S1280 690 1520 450" />
      <path d="M-60 610 C190 460 245 760 485 605 S815 465 1035 600 S1280 720 1510 505" />
    </svg>
    <div className="ambient-grain" />
  </div>
}
