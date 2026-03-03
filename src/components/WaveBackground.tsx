const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* SVG Wave layers */}
      <svg
        className="absolute bottom-0 left-0 w-full animate-wave-1"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "40%" }}
      >
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(270 80% 60% / 0.15)" />
            <stop offset="50%" stopColor="hsl(290 70% 70% / 0.2)" />
            <stop offset="100%" stopColor="hsl(270 80% 60% / 0.15)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave1)"
          d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,138.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full animate-wave-2"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "35%" }}
      >
        <defs>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(290 70% 70% / 0.1)" />
            <stop offset="50%" stopColor="hsl(270 80% 60% / 0.15)" />
            <stop offset="100%" stopColor="hsl(290 70% 70% / 0.1)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave2)"
          d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "25%", animation: "wave-move 10s ease-in-out infinite" }}
      >
        <defs>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(270 80% 60% / 0.08)" />
            <stop offset="100%" stopColor="hsl(290 70% 70% / 0.08)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave3)"
          d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-particle"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(${270 + Math.random() * 30} ${60 + Math.random() * 30}% ${60 + Math.random() * 20}%)`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export default WaveBackground;
