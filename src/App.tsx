import { useEffect, useMemo, useState } from "react"

const turfPhoto =
  "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=1600"

type IconName = "arrow" | "bolt" | "calendar" | "check" | "chevron" | "copy" | "football" | "instagram" | "location" | "mail" | "play" | "radar" | "share" | "spark" | "users" | "video" | "whatsapp"

function Icon({ name, size = 18 }: { name: IconName size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M14 5l7 7-7 7" />
      </>
    ),
    bolt: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
    calendar: (
      <>
        <path d="M6 2v4M18 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m8 10 4 4 4-4" />,
    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
      </>
    ),
    football: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m12 7 4 3-2 5h-4l-2-5 4-3ZM8 10 4 9M16 10l4-1M10 15l-2 5M14 15l2 5" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5V7Z" />,
    radar: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M22 12h-2M12 22v-2M2 12h2M14 10l5-5" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M17 14a6 6 0 0 1 4 5v1" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="5" width="14" height="14" rx="2" />
        <path d="m17 10 4-2v8l-4-2v-4Z" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.6a8 8 0 0 1-11.8 7L3 20l1.4-5A8 8 0 1 1 20 11.6Z" />
        <path d="M8.2 7.8c.4 3.5 2.5 5.6 5.9 6.4l1.2-1.6-2-1-1 1c-1.5-.7-2.5-1.7-3.1-3.1l1-1.1-.9-2-1.1 1.4Z" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="TurfBoat home">
      <span className="brand-mark">
        <span>TB</span>
      </span>
      <span className="brand-word">
        TURF<span>BOAT</span>
      </span>
    </a>
  )
}

function Phone({ sport = "Football" }: { sport?: string }) {
  const labels: Record<string, { title: string type: string price: string }> = {
    Football: {
      title: "Kickstart Arena",
      type: "5V5 · FIFA TURF",
      price: "₹1,499",
    },
    "Box Cricket": {
      title: "The Dugout",
      type: "6V6 · BOX CRICKET",
      price: "₹1,299",
    },
    Badminton: {
      title: "Smash Court",
      type: "BWF COURT · INDOOR",
      price: "₹499",
    },
    Pickleball: {
      title: "Kitchen Club",
      type: "PRO COURT · OUTDOOR",
      price: "₹699",
    },
  }
  const venue = labels[sport]
  return (
    <div className="phone-shell" data-cursor="PLAY">
      <div className="phone-buttons" />
      <div className="phone-screen">
        <div className="phone-island" />
        <div className="phone-topbar">
          <div>
            <small>PLAYING IN</small>
            <strong>Bengaluru</strong>
          </div>
          <span className="avatar-mini">AK</span>
        </div>
        <div className="phone-greeting">
          WHAT ARE WE
          <br />
          <span>PLAYING?</span>
        </div>
        <div className="sport-dots">
          {["FB", "CR", "BD", "PB"].map((s, i) => (
            <span
              className={
                i === Object.keys(labels).indexOf(sport) ? "active" : ""
              }
              key={s}
            >
              {s}
            </span>
          ))}
        </div>
        <div
          className="phone-venue"
          style={{
            backgroundImage: `linear-gradient(180deg, transparent 20%, rgba(3,6,8,.95) 100%), url("${turfPhoto}")`,
          }}
        >
          <div className="discount">-30%</div>
          <div className="venue-copy">
            <small>{venue.type}</small>
            <strong>{venue.title}</strong>
            <div>
              <span>{venue.price}</span>
              <button aria-label="Book venue">
                <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
        </div>
        <div className="phone-nav">
          <span className="on">HOME</span>
          <span>GAMES</span>
          <span>SQUAD</span>
        </div>
      </div>
    </div>
  )
}

function SplitPay() {
  return (
    <div className="split-card glass">
      <div className="split-head">
        <span>
          <Icon name="users" /> SPLIT-PAY LIVE
        </span>
        <b>8/10</b>
      </div>
      <div className="avatar-stack">
        {["RK", "VN", "AM", "JS", "PK", "AN", "DS", "NK", "+2"].map((n, i) => (
          <span className={i > 7 ? "pending" : ""} key={n}>
            {i < 8 && <i />}
            {n}
          </span>
        ))}
      </div>
      <div className="pay-progress">
        <span />
      </div>
      <div className="split-foot">
        <small>COLLECTED</small>
        <strong>
          ₹1,200 <em>/ ₹1,500</em>
        </strong>
      </div>
    </div>
  )
}

function App() {
  const [sport, setSport] = useState("Football")
  const [downloadOpen, setDownloadOpen] = useState(false)
  const [challenge, setChallenge] = useState(false)
  const [sos, setSos] = useState(false)
  const [clip, setClip] = useState(1)
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const move = (e: PointerEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`)
      document.documentElement.style.setProperty("--my", `${e.clientY}px`)
      const target = (e.target as HTMLElement).closest(
        "[data-cursor]",
      ) as HTMLElement | null
      document.documentElement.style.setProperty(
        "--cursor-label",
        `"${target?.dataset.cursor || ""}"`,
      )
      document.body.classList.toggle("cursor-active", Boolean(target))
    }
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setScroll(h ? window.scrollY / h : 0)
    }
    window.addEventListener("pointermove", move)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    const close = (e: KeyboardEvent) =>
      e.key === "Escape" && setDownloadOpen(false)
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [])

  const qrCells = useMemo(
    () =>
      Array.from(
        { length: 81 },
        (_, i) =>
          [
            0, 1, 2, 9, 11, 18, 19, 20, 6, 7, 8, 15, 17, 24, 25, 26, 54, 55, 56,
            63, 65, 72, 73, 74,
          ].includes(i) ||
          ((i * 7 + i * i) % 11 < 4 && ![3, 4, 5].includes(i % 9)),
      ),
    [],
  )

  const openDownload = () => setDownloadOpen(true)
  const scrollCommunity = () =>
    document.querySelector("#community")?.scrollIntoView({ behavior: "smooth" })

  return (
    <main id="top">
      <div className="custom-cursor" />
      <div className="noise" />
      <div className="scroll-line">
        <span style={{ height: `${scroll * 100}%` }} />
      </div>

      <header className="nav">
        <Brand />
        <nav aria-label="Primary navigation">
          <a href="#features">FEATURES</a>
          <a href="#community">COMMUNITY</a>
        </nav>
        <button className="nav-cta" onClick={openDownload}>
          GET THE APP <Icon name="arrow" size={15} />
        </button>
      </header>

      <section className="hero section-grid" aria-labelledby="hero-title">
        <div className="floodlight left" />
        <div className="floodlight right" />
        <div className="hero-grid-lines" />
        <div className="hero-copy">
          <div className="eyebrow">
            <i /> LIVE IN YOUR CITY <span>BOOK · CHALLENGE · DOMINATE</span>
          </div>
          <h1 id="hero-title">
            YOUR CITY IS
            <br />
            THE <span>PLAYGROUND.</span>
          </h1>
          <p>
            Book nearby turfs, split payments without the chase, challenge rival
            squads and turn every match into pro stats and AI highlight reels.
          </p>
          <div className="hero-actions">
            <button
              className="button primary"
              onClick={openDownload}
              data-cursor="SCAN"
            >
              DOWNLOAD THE APP <Icon name="arrow" />
            </button>
            <button className="button text-button" onClick={scrollCommunity}>
              JOIN THE COMMUNITY <Icon name="chevron" />
            </button>
          </div>
          <div className="city-row">
            <span>BENGALURU</span>
            <span>MUMBAI</span>
            <span>DELHI NCR</span>
            <span>+ 4 CITIES</span>
          </div>
        </div>
        <div className="hero-stage">
          <div className="orbit orbit-one">
            <span>
              <Icon name="bolt" />
            </span>
            <div>
              <small>FLASH DROP</small>
              <strong>-30% OFF</strong>
            </div>
          </div>
          <div className="orbit orbit-two">
            <span>9.2</span>
            <div>
              <small>MATCH RATING</small>
              <strong>MVP UNLOCKED</strong>
            </div>
          </div>
          <div className="orbit orbit-three">
            <span>
              <Icon name="check" />
            </span>
            <div>
              <small>TURF WARS</small>
              <strong>CHALLENGE ACCEPTED</strong>
            </div>
          </div>
          <Phone />
          <div className="stage-ring" />
        </div>
        <div className="hero-index">
          <span>01</span>
          <i />
          <small>SCROLL TO KICK OFF</small>
        </div>
      </section>

      <section className="booking chapter" id="features">
        <div className="tactical-line booking-line" aria-hidden="true" />
        <div className="chapter-intro">
          <div className="chapter-number">
            01 / 04 <span>BOOK</span>
          </div>
          <h2>
            LOCK THE TURF.
            <br />
            <span>NOT YOUR MONEY.</span>
          </h2>
          <p>
            Real-time slots, verified venues and payment links for the whole
            squad. The captain finally stops being the bank.
          </p>
        </div>
        <div className="booking-layout">
          <div className="feature-list">
            <article>
              <span className="feature-icon lime">
                <Icon name="location" />
              </span>
              <div>
                <small>DISCOVER</small>
                <h3>THE BEST TURFS, NEARBY.</h3>
                <p>
                  Live availability, floodlight ratings and verified player
                  reviews across your city.
                </p>
              </div>
            </article>
            <article>
              <span className="feature-icon lime">
                <Icon name="users" />
              </span>
              <div>
                <small>SPLIT-PAY ESCROW</small>
                <h3>NO MORE CHASING CASH.</h3>
                <p>
                  One booking becomes ten payment links. Dropouts never come out
                  of your pocket.
                </p>
              </div>
            </article>
            <article>
              <span className="feature-icon lime">
                <Icon name="bolt" />
              </span>
              <div>
                <small>FLASH DROPS</small>
                <h3>PLAY MORE. PAY LESS.</h3>
                <p>
                  Off-peak drops, squad streak cashback and club-only deals,
                  live in the app.
                </p>
              </div>
            </article>
          </div>
          <div className="sticky-demo">
            <div className="sport-picker" aria-label="Choose sport">
              {["Football", "Box Cricket", "Badminton", "Pickleball"].map(
                (item) => (
                  <button
                    className={sport === item ? "active" : ""}
                    onClick={() => setSport(item)}
                    key={item}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
            <div className="phone-composition">
              <Phone sport={sport} />
              <SplitPay />
              <div className="slot-card glass">
                <i />
                <small>NEXT SLOT</small>
                <strong>08:30 PM</strong>
                <span>04 LEFT</span>
              </div>
            </div>
            <p className="interaction-note">
              <span>INTERACTIVE PREVIEW</span> PICK A SPORT TO CHANGE THE ARENA
            </p>
          </div>
        </div>
      </section>

      <section className="rivalry chapter">
        <div className="formation-lines" aria-hidden="true" />
        <div className="chapter-intro">
          <div className="chapter-number ember">
            02 / 04 <span>COMPETE</span>
          </div>
          <h2>
            CITY TURF
            <br />
            <span>WARS.</span>
          </h2>
          <p>
            Call out a rival squad, lock both teams in and settle the debate
            where it matters.
          </p>
        </div>
        <div className="versus glass">
          <div className="team team-a">
            <div className="crest">FC</div>
            <small>INDIRANAGAR</small>
            <strong>FLYING CHAPPALS</strong>
            <span>W 8 · L 2</span>
          </div>
          <div className="vs-center">
            <small>FRIDAY · 21:00</small>
            <b>VS</b>
            <span>
              <Icon name="location" size={14} /> KICKSTART ARENA
            </span>
          </div>
          <div className="team team-b">
            <div className="crest alt">BB</div>
            <small>KORAMANGALA</small>
            <strong>BOX BOYS</strong>
            <span>W 7 · L 3</span>
          </div>
          <div className="escrow-row">
            <span>50% ESCROW LOCK</span>
            <div>
              <i className={challenge ? "filled" : ""} />
              <i className={challenge ? "filled" : ""} />
            </div>
            <strong>
              {challenge ? "MATCH LOCKED" : "AWAITING ACCEPTANCE"}
            </strong>
          </div>
          <button
            className={`challenge-button ${challenge ? "accepted" : ""}`}
            onClick={() => setChallenge(!challenge)}
            data-cursor="CHALLENGE"
          >
            {challenge ? (
              <>
                <Icon name="check" /> CHALLENGE ACCEPTED
              </>
            ) : (
              <>
                SWIPE TO ACCEPT CHALLENGE <Icon name="arrow" />
              </>
            )}
          </button>
        </div>
        <div className="rivalry-bottom">
          <div className="rival-stat">
            <small>NO-SHOW RATE</small>
            <strong>0.8%</strong>
            <span>WITH ESCROW LOCK</span>
          </div>
          <div className="sos-card glass">
            <div className={`sos-radar ${sos ? "searching" : ""}`}>
              <Icon name="radar" size={28} />
            </div>
            <div>
              <small>RINGER SOS</small>
              <h3>{sos ? "BEACON LIVE · 12 NEARBY" : "NEED +2 TONIGHT?"}</h3>
              <p>Ping verified solo players by position and reliability.</p>
            </div>
            <button onClick={() => setSos(!sos)}>
              {sos ? "CANCEL SOS" : "FIND PLAYERS"}{" "}
              <Icon name="arrow" size={15} />
            </button>
          </div>
        </div>
      </section>

      <section className="performance chapter">
        <div className="chapter-intro split-title">
          <div>
            <div className="chapter-number">
              03 / 04 <span>PERFORM</span>
            </div>
            <h2>
              EVERY GAME.
              <br />
              <span>PRO LEVEL.</span>
            </h2>
          </div>
          <p>
            Smart cameras capture the action. TurfBoat turns it into clips,
            verified stats and a player identity that travels with you.
          </p>
        </div>
        <div className="broadcast-grid">
          <article className="video-card bento glass">
            <div className="card-label">
              <span>
                <Icon name="video" /> AI MATCH RECORDING
              </span>
              <small>REC · LIVE</small>
            </div>
            <div
              className="video-view"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(6,9,14,.85), transparent 65%), url("${turfPhoto}")`,
              }}
            >
              <button
                className="play-button"
                onClick={() => setClip((clip + 1) % 3)}
                aria-label="Play next highlight"
              >
                <Icon name="play" size={26} />
              </button>
              <div className="clip-tag">
                <Icon name="spark" size={16} /> AI CLIP {clip + 1} · GOAL
                DETECTED
              </div>
            </div>
            <div className="timeline">
              {[0, 1, 2].map((i) => (
                <button
                  className={clip === i ? "active" : ""}
                  onClick={() => setClip(i)}
                  key={i}
                >
                  <span />
                  <small>
                    0{18 + i * 7}:2{i}
                  </small>
                </button>
              ))}
            </div>
            <div className="video-foot">
              <strong>15 SEC REEL READY</strong>
              <button>
                <Icon name="share" size={16} /> SHARE
              </button>
            </div>
          </article>
          <article className="player-card bento">
            <div className="player-card-inner">
              <div className="rank">
                #014 <span>CITY RANK</span>
              </div>
              <div className="player-silhouette">AK</div>
              <div className="player-name">
                <small>THE CAPTAIN</small>
                <h3>
                  ARJUN
                  <br />
                  KAPOOR
                </h3>
                <span>MIDFIELDER · BLR</span>
              </div>
              <div className="player-stats">
                <div>
                  <b>86</b>
                  <small>OVR</small>
                </div>
                <div>
                  <b>72%</b>
                  <small>WIN</small>
                </div>
                <div>
                  <b>18</b>
                  <small>MVP</small>
                </div>
              </div>
            </div>
          </article>
          <article className="lineup-card bento glass">
            <div className="card-label">
              <span>
                <Icon name="football" /> SQUAD LINEUP
              </span>
              <small>5V5</small>
            </div>
            <div className="mini-pitch">
              <div className="center-circle" />
              {[
                ["GK", "50%", "84%"],
                ["VN", "25%", "59%"],
                ["AK", "67%", "62%"],
                ["JS", "75%", "38%"],
                ["RM", "50%", "17%"],
              ].map(([n, l, t], i) => (
                <button
                  key={n}
                  className={i === 2 ? "captain" : ""}
                  style={{ left: l, top: t }}
                  title={`${n} is confirmed`}
                >
                  {n}
                  <i />
                </button>
              ))}
            </div>
            <div className="attendance">
              <span>
                <i /> 5 CONFIRMED
              </span>
              <span>LINEUP LOCKS IN 02:14:36</span>
            </div>
          </article>
          <article className="score-card bento glass">
            <div className="card-label">
              <span>VERIFIED SCORECARD</span>
              <small>FT</small>
            </div>
            <div className="score-teams">
              <span>FC</span>
              <strong>
                5 <i>—</i> 3
              </strong>
              <span>BB</span>
            </div>
            <p>CAPTAIN VERIFIED · CAMERA VERIFIED</p>
          </article>
        </div>
      </section>

      <section className="community chapter" id="community">
        <div className="radar-field" aria-hidden="true">
          <i />
          <i />
          <i />
          <span />
        </div>
        <div className="chapter-intro community-title">
          <div className="chapter-number">
            04 / 04 <span>CONNECT</span>
          </div>
          <h2>
            YOUR CITY.
            <br />
            YOUR <span>SPORTS CLUB.</span>
          </h2>
          <p>
            Never miss a game. Plug into discounted slots, emergency call-ups
            and the loudest local sports community.
          </p>
        </div>
        <div className="community-grid">
          <a
            className="community-card featured"
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            data-cursor="JOIN"
          >
            <div className="community-icon">
              <Icon name="whatsapp" size={30} />
            </div>
            <div>
              <small>OFFICIAL HUB</small>
              <h3>
                WHATSAPP
                <br />
                COMMUNITY
              </h3>
              <p>
                Daily turf drops, “need one player” alerts and city challenge
                callouts.
              </p>
            </div>
            <div className="member-row">
              <span className="avatar-stack small">
                <i>AK</i>
                <i>VN</i>
                <i>+2K</i>
              </span>
              <b>
                <i /> 2,184 LIVE
              </b>
            </div>
            <span className="card-arrow">
              <Icon name="arrow" />
            </span>
          </a>
          <a
            className="community-card"
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="community-icon">
              <Icon name="instagram" size={27} />
            </div>
            <div>
              <small>WATCH THE CITY PLAY</small>
              <h3>
                HIGHLIGHTS
                <br />& REELS
              </h3>
              <p>Top local goals, weekly MVPs and Turf Wars recaps.</p>
            </div>
            <span className="card-arrow">
              <Icon name="arrow" />
            </span>
          </a>
          <a
            className="community-card channel"
            href="#download"
            onClick={(e) => {
              e.preventDefault()
              openDownload()
            }}
          >
            <div className="channel-row">
              <span>YOUTUBE</span>
              <Icon name="arrow" />
            </div>
            <div className="channel-row">
              <span>DISCORD</span>
              <Icon name="arrow" />
            </div>
            <div className="channel-row">
              <span>TELEGRAM</span>
              <Icon name="arrow" />
            </div>
          </a>
        </div>
      </section>

      <section className="finale" id="download">
        <div className="scoreboard-top">
          <span>FINAL WHISTLE</span>
          <span>90:00</span>
          <span>YOUR MOVE</span>
        </div>
        <div className="finale-main">
          <div className="finale-copy">
            <small>THE NEXT GAME STARTS HERE</small>
            <h2>
              STEP ONTO
              <br />
              THE TURF.
            </h2>
            <p>
              Bookings. Rivalries. Reels. One app built for how your city really
              plays.
            </p>
          </div>
          <div className="download-dock glass">
            <div className="qr" aria-label="TurfBoat download QR preview">
              {qrCells.map((on, i) => (
                <i className={on ? "on" : ""} key={i} />
              ))}
            </div>
            <div>
              <small>SCAN TO GET TURFBOAT</small>
              <h3>
                THE WHOLE CITY.
                <br />
                IN YOUR POCKET.
              </h3>
              <div className="store-row">
                <a
                  href="https://www.apple.com/in/app-store/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>DOWNLOAD ON THE</span>
                  <b>App Store</b>
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GET IT ON</span>
                  <b>Google Play</b>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-strip">
          <div>
            <small>EXPANSION · SUPPORT · COMMUNITY</small>
            <h3>LET'S TALK TURF.</h3>
          </div>
          <button
            className="email-copy"
            onClick={() => {
              navigator.clipboard?.writeText("play@turfboat.com")
              setCopied(true)
            }}
          >
            <Icon name={copied ? "check" : "mail"} />{" "}
            {copied ? "EMAIL COPIED" : "PLAY@TURFBOAT.COM"}{" "}
            <Icon name="copy" size={15} />
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <input aria-label="Name" placeholder="YOUR NAME" required />
            <input
              aria-label="City and message"
              placeholder="CITY / MESSAGE"
              required
            />
            <button type="submit">
              {sent ? "SENT" : "SEND"}{" "}
              <Icon name={sent ? "check" : "arrow"} size={15} />
            </button>
          </form>
        </div>
        <footer>
          <Brand />
          <div className="social-links">
            <a href="https://wa.me/" target="_blank" rel="noreferrer">
              WHATSAPP
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              INSTAGRAM
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              YOUTUBE
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
          <small>© 2025 TURFBOAT · BEST OF ALL TURFS</small>
        </footer>
      </section>

      <div className="floating-dock">
        <button onClick={openDownload}>
          GET THE APP <Icon name="arrow" size={15} />
        </button>
        <i />
        <button onClick={scrollCommunity}>
          <Icon name="whatsapp" size={16} /> JOIN COMMUNITY
        </button>
      </div>

      {downloadOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(e) =>
            e.target === e.currentTarget && setDownloadOpen(false)
          }
        >
          <div
            className="download-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-title"
          >
            <button
              className="modal-close"
              onClick={() => setDownloadOpen(false)}
              aria-label="Close download dialog"
            >
              ×
            </button>
            <div className="qr large">
              {qrCells.map((on, i) => (
                <i className={on ? "on" : ""} key={i} />
              ))}
            </div>
            <small>YOUR NEXT MATCH IS WAITING</small>
            <h2 id="download-title">GET TURFBOAT.</h2>
            <p>Scan the code or choose your store to get into the game.</p>
            <div className="modal-stores">
              <a
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                APP STORE <Icon name="arrow" />
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
              >
                GOOGLE PLAY <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
