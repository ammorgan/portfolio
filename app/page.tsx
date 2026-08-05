const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Amanda Morgan, home">
          AM<span className="dot">.</span>
        </a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a className="navCta" href="#contact">Let&apos;s talk <Arrow /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <p className="eyebrow"><span /> Strategy · Story · Experience</p>
        <h1>I make ideas<br />feel <em>inevitable.</em></h1>
        <div className="heroBottom">
          <p className="intro">
            I&apos;m <strong>Amanda Morgan</strong>—a creative thinker who turns
            complexity into clear stories, thoughtful experiences, and work
            people remember.
          </p>
          <a className="scrollCue" href="#about">
            <span className="scrollLine" /> Scroll to explore
          </a>
        </div>
        <div className="orbit orbitOne" aria-hidden="true" />
        <div className="orbit orbitTwo" aria-hidden="true" />
      </section>

      <section className="marquee" aria-label="What I bring">
        <div>Clarity <span>✦</span> Curiosity <span>✦</span> Momentum <span>✦</span> Clarity <span>✦</span> Curiosity</div>
      </section>

      <section className="about shell" id="about">
        <p className="sectionLabel">01 / About</p>
        <div className="aboutContent">
          <div>
            <p className="lead">
              The best work doesn&apos;t just look right. It makes the next move
              <em> obvious.</em>
            </p>
            <figure className="portraitWrap">
              <img src="/amanda-morgan.jpg" alt="Amanda Morgan smiling outdoors" />
              <figcaption>Amanda Morgan · Creative thinker &amp; maker</figcaption>
            </figure>
          </div>
          <div className="aboutCopy">
            <p>
              I&apos;m drawn to the messy middle: when the idea is promising, the
              inputs are complicated, and the path forward still needs a shape.
            </p>
            <p>
              My approach blends clear thinking, sharp storytelling, and a
              bias toward making. The goal is simple—create work that moves
              from “interesting” to impossible to ignore.
            </p>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell">
          <p className="sectionLabel light">02 / How I work</p>
          <div className="workHeader">
            <h2>From signal<br />to <em>something real.</em></h2>
            <p>A flexible practice built for ambiguous, high-potential ideas.</p>
          </div>
          <div className="services">
            <article>
              <span>01</span>
              <h3>Find the signal</h3>
              <p>Get underneath the noise to find the idea, audience, and point of view that matter most.</p>
              <div className="glyph glyphSignal" aria-hidden="true" />
            </article>
            <article>
              <span>02</span>
              <h3>Shape the story</h3>
              <p>Turn raw thinking into a clear narrative people can understand, trust, and repeat.</p>
              <div className="glyph glyphStory" aria-hidden="true" />
            </article>
            <article>
              <span>03</span>
              <h3>Make it tangible</h3>
              <p>Bring the idea to life through an experience that feels considered at every touchpoint.</p>
              <div className="glyph glyphMake" aria-hidden="true" />
            </article>
          </div>
        </div>
      </section>

      <section className="principle shell">
        <p className="sectionLabel">03 / A guiding principle</p>
        <blockquote>
          “Make it clear.<br />Then make it <em>matter.</em>”
        </blockquote>
        <p className="sideNote">Good ideas deserve more than good intentions.</p>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactInner">
          <p className="sectionLabel light">04 / Contact</p>
          <p className="contactKicker">Have a promising idea?</p>
          <h2>Let&apos;s make it<br /><em>impossible to ignore.</em></h2>
          <a className="contactButton" href="mailto:hello@amandamorgan.com">
            Start a conversation <Arrow />
          </a>
          <div className="footerLine">
            <span>© {new Date().getFullYear()} Amanda Morgan</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </section>
    </main>
  );
}
