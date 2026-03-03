import WaveBackground from "@/components/WaveBackground";
import LoginForm from "@/components/LoginForm";
import waveBg from "@/assets/wave-bg.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${waveBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Animated waves */}
      <WaveBackground />

      {/* Login form */}
      <div className="relative z-10 w-full px-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
