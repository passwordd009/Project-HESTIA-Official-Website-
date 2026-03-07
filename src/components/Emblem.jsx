/**
 * Emblem — inline SVG recreation of the HESTIA emblem:
 * Greek-key (meander) border ring around a fan-trained tree silhouette.
 */
export default function Emblem({ size = 36, className = '' }) {
  /* 32 meander key units evenly around the ring (every 11.25°) */
  const keyAngles = Array.from({ length: 32 }, (_, i) => i * (360 / 32));

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HESTIA emblem"
    >
      {/* ── Black outer circle ── */}
      <circle cx="100" cy="100" r="100" fill="#111" />

      {/* ── White ring for meander band (r 73–97) ── */}
      <path
        d="M100,100 m-97,0 a97,97 0 1,0 194,0 a97,97 0 1,0 -194,0
           M100,100 m-73,0 a73,73 0 1,1 146,0 a73,73 0 1,1 -146,0"
        fill="white"
        fillRule="evenodd"
      />

      {/*
       * ── Greek-key (meander) units ──
       * Each unit is a small rectangular spiral drawn in black,
       * positioned at the top of the ring and rotated around the centre.
       *
       * Local coordinate space (before rotation):
       *   Ring spans y = 3 (outer) → 27 (inner), centred at x = 100.
       *   Each key is ~19 px wide, filling one 11.25° arc segment.
       *
       * Key anatomy (black fills on white ring):
       *   – outer top bar
       *   – left upright
       *   – inner horizontal bar
       *   – right inner upright
       *   – inner bottom bar
       */}
      <g fill="#111">
        {keyAngles.map((deg) => (
          <g key={deg} transform={`rotate(${deg}, 100, 100)`}>
            {/* outer top bar */}
            <rect x="90.5" y="3"  width="19" height="4" />
            {/* left upright */}
            <rect x="90.5" y="3"  width="4"  height="22" />
            {/* inner horizontal bar */}
            <rect x="94.5" y="11" width="11" height="4" />
            {/* right inner upright */}
            <rect x="105.5" y="11" width="4" height="16" />
            {/* inner bottom bar */}
            <rect x="94.5" y="23" width="11" height="4" />
          </g>
        ))}
      </g>

      {/* ── White inner circle ── */}
      <circle cx="100" cy="100" r="73" fill="white" />

      {/*
       * ── Fan-trained tree silhouette ──
       * Mirrors the botanical illustration: a multi-stemmed shrub/tree
       * with branches radiating in a fan from a single trunk base.
       */}
      <g
        stroke="#1a1a1a"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      >
        {/* ground line */}
        <line x1="80"  y1="154" x2="120" y2="154" />
        <line x1="88"  y1="157" x2="112" y2="157" />

        {/* trunk */}
        <line x1="100" y1="154" x2="100" y2="128" />

        {/* ── main branches (7 + 2 low outstretched) ── */}
        <line x1="100" y1="140" x2="42"  y2="112" />
        <line x1="100" y1="138" x2="60"  y2="96"  />
        <line x1="100" y1="135" x2="74"  y2="78"  />
        <line x1="100" y1="132" x2="86"  y2="62"  />
        <line x1="100" y1="130" x2="100" y2="54"  />
        <line x1="100" y1="132" x2="114" y2="62"  />
        <line x1="100" y1="135" x2="126" y2="78"  />
        <line x1="100" y1="138" x2="140" y2="96"  />
        <line x1="100" y1="140" x2="158" y2="112" />

        {/* ── second-order branches ── */}
        {/* far left */}
        <line x1="42"  y1="112" x2="30"  y2="92"  />
        <line x1="42"  y1="112" x2="36"  y2="88"  />
        {/* left-mid */}
        <line x1="60"  y1="96"  x2="46"  y2="74"  />
        <line x1="60"  y1="96"  x2="54"  y2="71"  />
        {/* left-inner */}
        <line x1="74"  y1="78"  x2="64"  y2="58"  />
        <line x1="74"  y1="78"  x2="70"  y2="55"  />
        {/* left-near-center */}
        <line x1="86"  y1="62"  x2="79"  y2="45"  />
        <line x1="86"  y1="62"  x2="84"  y2="43"  />
        {/* center */}
        <line x1="100" y1="54"  x2="94"  y2="38"  />
        <line x1="100" y1="54"  x2="106" y2="38"  />
        {/* right-near-center */}
        <line x1="114" y1="62"  x2="121" y2="45"  />
        <line x1="114" y1="62"  x2="116" y2="43"  />
        {/* right-inner */}
        <line x1="126" y1="78"  x2="136" y2="58"  />
        <line x1="126" y1="78"  x2="130" y2="55"  />
        {/* right-mid */}
        <line x1="140" y1="96"  x2="154" y2="74"  />
        <line x1="140" y1="96"  x2="146" y2="71"  />
        {/* far right */}
        <line x1="158" y1="112" x2="170" y2="92"  />
        <line x1="158" y1="112" x2="164" y2="88"  />

        {/* ── tip twigs ── */}
        <line x1="30"  y1="92"  x2="26"  y2="80"  />
        <line x1="36"  y1="88"  x2="32"  y2="76"  />
        <line x1="46"  y1="74"  x2="42"  y2="62"  />
        <line x1="54"  y1="71"  x2="51"  y2="59"  />
        <line x1="64"  y1="58"  x2="60"  y2="46"  />
        <line x1="70"  y1="55"  x2="67"  y2="43"  />
        <line x1="79"  y1="45"  x2="76"  y2="35"  />
        <line x1="84"  y1="43"  x2="82"  y2="33"  />
        <line x1="94"  y1="38"  x2="91"  y2="28"  />
        <line x1="106" y1="38"  x2="109" y2="28"  />
        <line x1="121" y1="45"  x2="124" y2="35"  />
        <line x1="116" y1="43"  x2="118" y2="33"  />
        <line x1="136" y1="58"  x2="140" y2="46"  />
        <line x1="130" y1="55"  x2="133" y2="43"  />
        <line x1="154" y1="74"  x2="158" y2="62"  />
        <line x1="146" y1="71"  x2="149" y2="59"  />
        <line x1="170" y1="92"  x2="174" y2="80"  />
        <line x1="164" y1="88"  x2="168" y2="76"  />

        {/* ── bud dots on tips ── */}
        <circle cx="26"  cy="79"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="32"  cy="75"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="42"  cy="61"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="51"  cy="58"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="60"  cy="45"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="67"  cy="42"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="76"  cy="34"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="82"  cy="32"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="91"  cy="27"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="109" cy="27"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="118" cy="32"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="124" cy="34"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="133" cy="42"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="140" cy="45"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="149" cy="58"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="158" cy="61"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="168" cy="75"  r="1.2" fill="#1a1a1a" stroke="none" />
        <circle cx="174" cy="79"  r="1.2" fill="#1a1a1a" stroke="none" />
      </g>
    </svg>
  );
}
