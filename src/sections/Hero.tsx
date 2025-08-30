import Button from "@/components/button";
import starsBg from "@/assets/stars.png"

export const Hero = () => {
  return (
    <section className="h-[492px] flex items-center relative overflow-hidden" style={{
      backgroundImage: `url(${starsBg.src})`,
    }}>
      <div className="absolute h-64 w-64 rounded-full top-[220px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[0_0_50px_rgb(140,69,255),0_0_100px_rgb(140,69,255,0.3),0_0_150px_rgb(140,69,255,0.1)]"></div>
      <div className="absolute h-[344px] w-[344px] border rounded-full top-[220px] opacity-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="absolute h-[444px] w-[444px] rounded-full border border-white/20 top-[223px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>
      <div className="absolute h-[544px] w-[544px] rounded-full border border-white opacity-20 top-[223px] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2-translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="container relative mt-16">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">AI SEO</h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Elevate your website visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};
