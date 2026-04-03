import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Globe2, Link as LinkIcon, Lock, Activity, Eye, FileText, MousePointer2, ShieldCheck, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'scrolled-nav', targets: navRef.current },
        onToggle: self => {
          if (self.isActive) {
            gsap.to(navRef.current, { backgroundColor: 'rgba(13, 13, 18, 0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(250, 248, 245, 0.1)', duration: 0.3 });
          } else {
            gsap.to(navRef.current, { backgroundColor: 'transparent', backdropFilter: 'blur(0px)', border: '1px solid transparent', duration: 0.3 });
          }
        }
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4">
      <nav ref={navRef} className="px-6 py-4 rounded-full flex items-center justify-between w-full max-w-5xl transition-all border border-transparent">
        <div className="flex items-center">
          <img src="/2x/Asset%209@2x.webp" alt="LOYD" className="h-8 md:h-10 w-auto object-contain" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ivory/80">
          <a href="#philosophy" className="hover:-translate-y-[1px] transition-transform hover:text-champagne">Philosophy</a>
          <a href="#features" className="hover:-translate-y-[1px] transition-transform hover:text-champagne">Advantage</a>
          <a href="#protocol" className="hover:-translate-y-[1px] transition-transform hover:text-champagne">Protocol</a>
        </div>
        <button className="group relative overflow-hidden rounded-full bg-champagne text-obsidian px-6 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03]" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
          <span className="relative z-10 flex items-center gap-2">Partner With Us <ArrowRight size={16} /></span>
          <div className="absolute inset-0 bg-ivory transform translate-y-full transition-transform group-hover:translate-y-0 z-0"></div>
        </button>
      </nav>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center py-24 md:py-32 px-6 md:px-12 xl:px-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/hero_skyline.png" 
          alt="Abuja Skyline at Dusk" 
          className="w-full h-full object-cover object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/80 to-obsidian"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center">
        <div className="hero-elem inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-champagne/30 bg-obsidian/50 backdrop-blur-md text-champagne text-xs font-mono uppercase tracking-wider">
          <Globe2 size={14} /> Africa's Trusted Investment Gateway
        </div>
        <h1 className="flex flex-col gap-2 mb-8">
          <span className="hero-elem text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-ivory tracking-tight leading-tight">
            Invest in Nigeria’s Growth with
          </span>
          <span className="hero-elem text-5xl md:text-6xl lg:text-8xl font-drama italic text-champagne tracking-tighter leading-none">
            Institutional-Grade Protection.
          </span>
        </h1>
        
        <p className="hero-elem text-ivory/70 max-w-3xl text-sm lg:text-lg leading-relaxed mb-10 mx-auto">
          We provide foreign and diaspora investors with the local infrastructure, legal vetting, and end-to-end management required to acquire high-yield real estate and businesses in Nigeria. From $100k to $500k+, your capital is protected by a partner on the ground.
        </p>

        <div className="hero-elem flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 w-full">
          <button className="group relative overflow-hidden rounded-full bg-champagne text-obsidian px-8 py-4 text-base font-semibold transition-transform hover:scale-[1.03]" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
            <span className="relative z-10">Schedule Your Investment Strategy Session</span>
            <div className="absolute inset-0 bg-ivory transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-0"></div>
          </button>
          <a href="#sectors" className="text-ivory/60 hover:text-champagne transition-colors font-medium border-b border-champagne/30 hover:border-champagne pb-1">
            See Our 2026 Focus Markets
          </a>
        </div>

        {/* Trust Bar */}
        <div className="hero-elem pt-8 border-t border-ivory/10 flex flex-col items-center gap-6 w-full">
            <span className="text-xs font-mono text-ivory/40 uppercase tracking-widest">In Partnership & Compliance With</span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale mix-blend-screen h-auto md:h-8">
                {/* Provided Logos */}
                <img src="/Fidelity-Bank-Nigeria.webp" alt="Fidelity Bank" className="h-8 md:h-full object-contain" />
                <img src="/images.jpg" alt="CAC" className="h-8 md:h-10 object-contain mix-blend-color-dodge grayscale" />
                <div className="h-8 flex items-center justify-center font-serif font-bold text-xl md:text-2xl tracking-tighter text-ivory">ZENITH</div>
                <div className="h-8 flex items-center justify-center font-sans font-bold text-lg md:text-xl tracking-tight text-ivory">Access</div>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- Features Interactive Cards ---
const FeatureCard1 = () => {
    const [cards, setCards] = useState([
      { id: 1, title: 'Ghost Brokers', icon: <Lock className="text-slate w-5 h-5"/>, desc: 'Unaccountable middlemen' },
      { id: 2, title: 'Fake Documents', icon: <ShieldCheck className="text-slate w-5 h-5"/>, desc: 'Title disputes & fraud' },
      { id: 3, title: 'Unverified Assets', icon: <Compass className="text-slate w-5 h-5"/>, desc: 'Blind capital deployment' }
    ]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCards(prev => {
          const newCards = [...prev];
          const last = newCards.pop();
          newCards.unshift(last);
          return newCards;
        });
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex flex-col h-full place-content-between p-8 bg-obsidian rounded-[2rem] border border-slate shadow-2xl relative overflow-hidden group">
        <div className="mb-12">
            <h3 className="text-2xl font-sans font-bold text-ivory mb-2">The Trust Gap</h3>
            <p className="text-ivory/60 text-sm">No accountable "man on the ground" to verify physical assets.</p>
        </div>
        
        <div className="relative h-48 w-full perspective-1000 flex items-end pb-8 justify-center">
            {cards.map((card, i) => (
                <div 
                  key={card.id} 
                  className="absolute w-full max-w-[200px] h-24 bg-slate border border-ivory/10 rounded-2xl p-4 flex flex-col justify-center gap-2 shadow-2xl"
                  style={{
                    transform: `translateY(${(i - 1) * -15}px) scale(${1 - i * 0.05})`,
                    zIndex: 10 - i,
                    opacity: 1 - i * 0.2,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                    <div className="flex items-center gap-2 text-ivory/60 font-semibold text-sm line-through">
                        {card.icon} {card.title}
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
  };
  
const FeatureCard2 = () => {
    const [text, setText] = useState('');
    const fullText = "SEARCHING YIELD DATA...\n> ERROR: SOURCE INFORMAL\n> ERROR: DEAL HIDDEN\n> WAITING FOR VERIFICATION...\n> TIMEOUT.";
    
    useEffect(() => {
      let current = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, current));
        current++;
        if (current > fullText.length) {
          current = 0; // Reset loop
        }
      }, 80);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex flex-col h-full place-content-between p-8 bg-obsidian rounded-[2rem] border border-slate shadow-2xl relative overflow-hidden group">
        <div className="mb-8 flex justify-between items-start">
            <div>
                <h3 className="text-2xl font-sans font-bold text-ivory mb-2">The Information Void</h3>
                <p className="text-ivory/60 text-sm">Fragmented, informal networks hide the best deals.</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-red-500 border border-red-500/20 bg-red-500/10 px-2 py-1 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                No Signal
            </div>
        </div>
        
        <div className="bg-[#0A0A0F] rounded-xl p-4 border border-red-900/30 h-40 font-mono text-xs text-red-500/80 whitespace-pre-wrap flex flex-col justify-end overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A0A0F] to-transparent h-8 z-10"></div>
            <div>
              {text}<span className="inline-block w-2 h-3 bg-red-500 animate-pulse ml-1">_</span>
            </div>
        </div>
      </div>
    );
};
  
const FeatureCard3 = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const dayRef = useRef(null);
    const errorRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            
            // Move to day
            tl.to(cursorRef.current, { x: 80, y: 40, duration: 1, ease: 'power2.inOut' })
              // Click 
              .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
              .to(dayRef.current, { backgroundColor: '#E63B2E', color: '#0D0D12', duration: 0.1 }, "<")
              .to(cursorRef.current, { scale: 1, duration: 0.1 })
              // Show error
              .to(errorRef.current, { opacity: 1, y: 0, duration: 0.3 })
              // Reset
              .to([cursorRef.current, dayRef.current, errorRef.current], { opacity: 0, duration: 0.5, delay: 1 })
              .set(cursorRef.current, { x: 0, y: 0, opacity: 1 })
              .set([dayRef.current], { clearProps: 'all' })
              .set(errorRef.current, { y: 10 })
              .to([dayRef.current], { opacity: 1, duration: 0.5 });
              
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
      <div ref={containerRef} className="flex flex-col h-full place-content-between p-8 bg-obsidian rounded-[2rem] border border-slate shadow-2xl relative overflow-hidden group">
        <div className="mb-8">
            <h3 className="text-2xl font-sans font-bold text-ivory mb-2">The Execution Risk</h3>
            <p className="text-ivory/60 text-sm">Fear of title disputes, mismanagement, and complex regulatory navigation.</p>
        </div>
        
        <div className="relative h-48 bg-slate/30 rounded-xl p-4 border border-slate relative flex flex-col gap-4 overflow-hidden">
            <div className="text-xs font-mono text-ivory/50">PROJECT SCHEDULE</div>
            <div className="flex gap-2 w-full justify-between">
                {['S','M','T','W','T','F','S'].map((d, i) => (
                    <div key={i} ref={i === 4 ? dayRef : null} className="w-8 h-8 rounded bg-obsidian border border-slate flex items-center justify-center text-xs font-mono text-ivory/60">
                        {d}
                    </div>
                ))}
            </div>
            
            <div ref={errorRef} className="opacity-0 translate-y-2 mt-auto p-3 rounded bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 flex items-center gap-2">
                <Activity size={14} /> FAILURE: REGULATORY BLOCK
            </div>

            {/* SVG Cursor */}
            <div ref={cursorRef} className="absolute top-2 left-2 z-20" style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))' }}>
                <MousePointer2 className="w-6 h-6 text-ivory fill-obsidian/50" />
            </div>
        </div>
      </div>
    );
};

const Philosophy = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.philo-text', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
            gsap.fromTo('.philo-bg', 
                { y: '-10%' },
                {
                    y: '10%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="philosophy" ref={sectionRef} className="relative w-full py-40 px-6 md:px-12 xl:px-24 bg-obsidian overflow-hidden border-t border-slate/30 border-b-0">
            <div className="absolute inset-0 z-0 opacity-10">
                <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2500&auto=format&fit=crop" 
                    alt="Abstract organic luxury texture" 
                    className="philo-bg w-full h-[120%] object-cover grayscale mix-blend-screen"
                />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16">
                <h2 className="philo-text text-xl md:text-3xl font-sans font-medium text-ivory/60 max-w-3xl leading-relaxed">
                    Most cross-border investment in Africa relies on <span className="text-ivory line-through">fragmented, informal broker networks</span> and scattered accountability.
                </h2>
                <h2 className="philo-text text-5xl md:text-7xl lg:text-8xl font-drama italic text-ivory max-w-4xl leading-[1.1]">
                    We execute with <span className="text-champagne border-b-2 border-champagne pb-2">institutional-grade</span> precision.
                </h2>
            </div>
        </section>
    );
};

const LoydFramework = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);

    const phases = [
        {
            num: '01',
            title: 'Strategic Onboarding',
            desc: 'White-glove concierge service and SPV legal entity setup to ensure your ownership is ironclad from Day 1.',
            img: '/images/phase1.png'
        },
        {
            num: '02',
            title: 'Radical Due Diligence',
            desc: 'We eliminate risk through multi-layered title verification, financial audits, and independent valuations.',
            img: '/images/phase2.png'
        },
        {
            num: '03',
            title: 'Seamless Acquisition',
            desc: 'We negotiate and execute the deal. To ensure alignment, we offer equity co-investment—we put our own skin in the game.',
            img: '/images/phase3.png'
        },
        {
            num: '04',
            title: 'Passive Management',
            desc: 'You receive regular performance reports via our Investor Portal. We handle everything from tenant management to business operations.',
            img: '/images/phase4.png'
        },
        {
            num: '05',
            title: 'Secure Repatriation',
            desc: 'Our FX Advisory team ensures your profits move securely back to the UK, USA, Canada, or Europe without the "last-mile" friction.',
            img: '/images/phase5.png'
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=300%',
                    pin: true,
                    scrub: 1,
                }
            });

            phases.forEach((_, i) => {
                // Determine animation timing
                const start = i;
                
                if (i > 0) {
                    // Fade out previous
                    tl.to(`.phase-img-${i-1}`, { opacity: 0, duration: 0.5 }, start)
                      .to(`.phase-text-${i-1}`, { opacity: 0, y: -20, duration: 0.5 }, start)
                      .to(`.indicator-${i-1}`, { height: '0%', backgroundColor: 'transparent', duration: 0.3 }, start);

                    // Fade in current
                    tl.to(`.phase-img-${i}`, { opacity: 1, duration: 0.5 }, start + 0.2)
                      .to(`.phase-text-${i}`, { opacity: 1, y: 0, duration: 0.5 }, start + 0.2)
                      .to(`.indicator-${i}`, { height: '100%', backgroundColor: '#C9A84C', duration: 0.5 }, start + 0.2);
                } else {
                    // Initial state for phase 1 is already handled by CSS or simple set
                    gsap.set(`.phase-img-0`, { opacity: 1 });
                    gsap.set(`.phase-text-0`, { opacity: 1, y: 0 });
                    gsap.set(`.indicator-0`, { height: '100%', backgroundColor: '#C9A84C' });
                }
                
                // Add some padding to each phase's duration
                tl.to({}, { duration: 0.5 }); 
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="relative w-full h-[100dvh] bg-ivory border-y border-obsidian/5 flex items-center justify-center overflow-hidden">
            
            {/* Framed Card Container with Header Inside */}
            <div ref={cardRef} className="max-w-[95rem] w-full h-[85vh] min-h-[600px] relative rounded-[3rem] border border-obsidian/10 overflow-hidden bg-ivory shadow-[0_40px_100px_rgba(0,0,0,0.03)] z-10 flex flex-col">
                
                {/* Header - Now inside the card for an integrated look */}
                <div className="w-full text-center py-10 md:py-12 border-b border-obsidian/10 bg-ivory/50 backdrop-blur relative z-30">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-obsidian mb-2 tracking-tight leading-none uppercase">Our 5-Phase Infrastructure</h2>
                    <p className="text-obsidian/40 text-xs md:text-sm font-mono tracking-widest uppercase">
                        Protocol on Institutional-Grade Capital Protection
                    </p>
                </div>

                <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">
                    
                    {/* Left Picture Column - Now fits below the header */}
                    <div className="w-full h-1/2 md:w-1/2 md:h-full relative overflow-hidden bg-obsidian/5">
                        {phases.map((p, i) => (
                            <div key={i} className={`phase-img-${i} absolute inset-0 w-full h-full opacity-0 pointer-events-none transition-transform duration-1000`}>
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale opacity-80" />
                                
                                {/* Motion Graphic Overlays */}
                                <div className="absolute top-10 left-10 opacity-30">
                                    <Activity className="w-6 h-6 text-champagne animate-pulse" />
                                </div>
                                <div className="absolute bottom-10 right-10 flex flex-col gap-2 opacity-50">
                                    <div className="w-24 h-[1px] bg-champagne border border-transparent" style={{ animation: 'pulse 3s infinite' }}></div>
                                    <div className="text-[10px] font-mono text-champagne">SYS.PHASE_{p.num}</div>
                                </div>
                            </div>
                        ))}
                        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5 pointer-events-none"></div>
                    </div>

                    {/* Right Text Column - Absolute Elements for Static Feel */}
                    <div className="w-full md:w-1/2 relative h-1/2 md:h-full bg-ivory/80 backdrop-blur-sm px-8 md:px-16 xl:px-24 flex items-center">
                        <div className="relative w-full h-96"> {/* Increased height wrapper for text phases */}
                            {phases.map((p, i) => (
                                <div key={i} className={`phase-text-${i} absolute inset-0 opacity-0 translate-y-10 pointer-events-none flex flex-col justify-center`}>
                                    <div className="relative pl-8 md:pl-12">
                                        {/* Timeline Node & Indicator inside the text block for simplicity */}
                                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-obsidian/10">
                                            <div className={`indicator-${i} absolute top-0 left-[-1px] w-[3px] bg-transparent h-0 transition-all rounded-full`} />
                                        </div>
                                        <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-champagne shadow-[0_0_10px_#C9A84C]" />
                                        
                                        <span className="text-champagne font-mono text-sm tracking-widest mb-4 block">PHASE {p.num}</span>
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-obsidian mb-6 leading-tight">{p.title}</h3>
                                        
                                        <p className="text-lg md:text-xl text-obsidian/70 leading-relaxed font-sans max-w-md">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const SectorFocus = () => {
    return (
        <section id="sectors" className="py-32 px-6 md:px-12 xl:px-24 bg-obsidian border-b border-slate/30">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-ivory mb-6 tracking-tight">Curated Opportunities in Key Sectors.</h2>
                <p className="text-ivory/60 text-lg">We focus capital deployment strictly on high-growth areas where we control the execution narrative.</p>
            </div>
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1: Real Estate */}
                <div className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-slate shadow-2xl flex flex-col place-content-between p-10 bg-obsidian">
                    <div className="absolute inset-0 z-0">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105" alt="Real Estate" />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent"></div>
                    </div>
                    <div className="relative z-10 flex justify-between items-start">
                        <span className="px-4 py-1.5 rounded-full border border-champagne/30 text-champagne text-xs font-mono tracking-widest bg-obsidian/50 backdrop-blur">YIELD ACQUISITION</span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-4xl font-sans font-bold text-ivory mb-4">Real Estate & Property</h3>
                        <p className="text-ivory/70 text-lg leading-relaxed">Focus on high-growth corridors in Abuja and Lagos. Residential builds, commercial yields, and mixed-use developments, exclusively vetted for title clarity.</p>
                    </div>
                </div>

                {/* Card 2: Business Acquisition */}
                <div className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-slate shadow-2xl flex flex-col place-content-between p-10 bg-obsidian">
                    <div className="absolute inset-0 z-0">
                        <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105" alt="Business Acquisition" />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent"></div>
                    </div>
                    <div className="relative z-10 flex justify-between items-start">
                        <span className="px-4 py-1.5 rounded-full border border-champagne/30 text-champagne text-xs font-mono tracking-widest bg-obsidian/50 backdrop-blur">EQUITY SCALE</span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-4xl font-sans font-bold text-ivory mb-4">Business Acquisition</h3>
                        <p className="text-ivory/70 text-lg leading-relaxed">Scale established SMEs or acquire cash-flowing enterprises. We handle the operational setup, staffing, and long-term performance growth planning.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocialProof = () => {
    return (
        <section className="py-32 px-6 md:px-12 xl:px-24 bg-ivory border-t border-obsidian/5 overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                
                {/* Left: Testimonial */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <h2 className="text-4xl md:text-6xl font-sans font-bold text-obsidian tracking-tight">The Peace of Mind to Invest from Anywhere.</h2>
                    <blockquote className="border-l-2 border-champagne pl-6 text-xl text-slate/80 font-drama italic my-6 relative">
                        "As a diaspora investor in London, I was paralyzed by the stories of land fraud. LOYD didn't just find me a property; they handled the legal audit and now manage the rental income for me. It’s truly passive."
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-obsidian flex items-center justify-center font-bold text-champagne">AO</div>
                        <div>
                            <div className="text-obsidian font-bold">Ade O.</div>
                            <div className="text-slate/50 text-sm font-mono focus:outline-none">Tech Lead (London, UK)</div>
                        </div>
                    </div>
                </div>

                {/* Right: Dashboard Mockup */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-champagne/5 blur-[100px] rounded-full"></div>
                    <div className="relative bg-obsidian border border-obsidian/10 rounded-2xl shadow-2xl p-6 overflow-hidden">
                        {/* Fake Navbar */}
                        <div className="flex justify-between items-center mb-8 border-b border-slate pb-4">
                            <div className="flex items-center gap-2">
                                <img src="/2x/Asset%209@2x.webp" alt="" className="h-5 w-auto" />
                                <div className="text-sm font-mono text-champagne tracking-tighter">LOYD_PORTAL</div>
                            </div>
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                            </div>
                        </div>
                        {/* Fake Content */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-slate/30 rounded-xl p-4">
                                <div className="text-ivory/40 text-xs mb-1">Total Asset Value</div>
                                <div className="text-2xl text-ivory font-bold">$425,000</div>
                            </div>
                            <div className="bg-slate/30 rounded-xl p-4">
                                <div className="text-ivory/40 text-xs mb-1">Monthly Yield IRR</div>
                                <div className="text-2xl text-green-400 font-bold">+12.4%</div>
                            </div>
                        </div>
                        <div className="h-32 bg-slate/20 rounded-xl border border-slate/50 p-4 flex items-end gap-2">
                            {/* Bar Chart Mockup */}
                            {[40, 50, 45, 60, 75, 65, 80, 95].map((h, i) => (
                                <div key={i} className="flex-1 bg-champagne/30 rounded-t" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="mt-6 flex items-center gap-3 border border-slate/50 bg-[#060608] p-3 rounded-lg">
                            <FileText size={18} className="text-champagne" />
                            <span className="text-sm text-ivory/80">Title_Deed_Signed.pdf uploaded 2hrs ago</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        { q: "How do I know the title is clean?", a: "We perform a 3-stage vetting process: physical site inspection, local land registry verification, and independent legal audit before a single dollar is deployed." },
        { q: "Who manages the asset while I’m abroad?", a: "LOYD provides full-cycle management. We are your 'Partner on the Ground,' managing vendors, staff, and maintenance so you remain completely passive." },
        { q: "Can I easily move my profits back to my home country?", a: "Yes. Our Phase 5 includes specialized FX Advisory and repatriation planning to ensure your returns reach your international accounts directly via compliant channels." }
    ];

    return (
        <section className="py-32 px-6 md:px-12 xl:px-24 bg-ivory border-t border-obsidian/5">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-obsidian mb-12 text-center">Clarity Before Capital.</h2>
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} 
                             className="border border-obsidian/10 rounded-2xl bg-white/40 overflow-hidden cursor-pointer"
                             onClick={() => setOpenIndex(index === openIndex ? -1 : index)}>
                            <div className="p-6 flex justify-between items-center text-obsidian font-bold text-lg hover:text-champagne transition-colors">
                                {faq.q}
                                <span className="text-champagne flex-shrink-0 ml-4 font-mono">{index === openIndex ? '-' : '+'}</span>
                            </div>
                            <div className={`px-6 pb-6 text-slate/60 text-base leading-relaxed transition-all duration-300 overflow-hidden ${index === openIndex ? 'block' : 'hidden'}`}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        horizon: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSchedule = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email) {
            alert('Please provide आपका name and email to proceed.');
            return;
        }

        setIsSubmitting(true);

        try {
            if (window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
                window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/loydinvestment/30min',
                    prefill: {
                        name: formData.name,
                        email: formData.email,
                        customAnswers: {
                            a1: formData.horizon
                        }
                    }
                });
                // Reset loading state after a delay since Calendly popup is modal
                setTimeout(() => setIsSubmitting(false), 1500);
            } else {
                // Fallback if script is not supported or blocked
                const queryParams = new URLSearchParams({
                    name: formData.name,
                    email: formData.email,
                    a1: formData.horizon
                }).toString();
                const newWindow = window.open(`https://calendly.com/loydinvestment/30min?${queryParams}`, '_blank');
                
                if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                    alert('The calendar was blocked by a popup blocker. Please allow popups or visit the link directly.');
                }
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error('Calendly Error:', error);
            alert('An error occurred while opening the calendar. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <section id="cta-section" className="py-32 px-6 bg-obsidian border-t border-obsidian/5 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-gradient-to-b from-champagne/5 to-transparent blur-[100px]"></div>
            </div>
            
            <div className="relative z-10 max-w-xl mx-auto bg-obsidian/80 backdrop-blur-xl border border-slate rounded-[3rem] p-10 md:p-14 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-ivory mb-4 tracking-tight text-center">Ready to Bridge the Gap?</h2>
                <p className="text-base text-ivory/60 mx-auto mb-10 text-center font-sans">Join a select group of foreign and diaspora investors deploying capital into vetted, high-yield assets.</p>
                
                <form className="flex flex-col gap-4" onSubmit={handleSchedule}>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0A0A0E] border border-slate rounded-xl px-4 py-4 text-ivory placeholder-ivory/30 focus:border-champagne outline-none transition-colors disabled:opacity-50" 
                    />
                    <input 
                        type="email" 
                        placeholder="Professional Email" 
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0A0A0E] border border-slate rounded-xl px-4 py-4 text-ivory placeholder-ivory/30 focus:border-champagne outline-none transition-colors disabled:opacity-50" 
                    />
                    <div className="relative">
                        <select 
                            value={formData.horizon}
                            disabled={isSubmitting}
                            onChange={e => setFormData({ ...formData, horizon: e.target.value })}
                            className="w-full bg-[#0A0A0E] border border-slate rounded-xl px-4 py-4 text-ivory outline-none focus:border-champagne cursor-pointer transition-colors appearance-none disabled:opacity-50"
                        >
                            <option value="" disabled>Investment Horizon / Range</option>
                            <option value="$100k - $250k">$100k - $250k</option>
                            <option value="$250k - $500k">$250k - $500k</option>
                            <option value="$500k+">$500k+</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                            <Activity size={16} />
                        </div>
                    </div>
                    
                    <button type="submit" disabled={isSubmitting} className="group mt-4 relative overflow-hidden w-full rounded-xl bg-champagne text-obsidian px-8 py-5 text-lg font-bold transition-transform hover:scale-[1.02] shadow-[0_0_30px_rgba(201,168,76,0.2)] disabled:scale-100 disabled:opacity-70" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            {isSubmitting ? 'Opening Booking System...' : 'Schedule Your Strategy Session'}
                            {!isSubmitting && <ArrowRight size={20} />}
                        </span>
                        <div className="absolute inset-0 bg-ivory transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-0"></div>
                    </button>
                </form>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-slate pt-24 pb-8 px-6 md:px-16 xl:px-24 rounded-t-[4rem] relative mt-[-2rem] z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 cursor-default">
                <div className="col-span-1 md:col-span-2">
                    <img src="/2x/Asset%209@2x.webp" alt="LOYD logo" className="h-10 md:h-12 w-auto object-contain mb-6" />
                    <p className="text-ivory/50 max-w-sm mb-8 text-sm">Africa's most trusted investment gateway. Designed to securely bridge global capital into the Nigerian opportunity zone.</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-mono uppercase tracking-wider">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        System Operational
                    </div>
                </div>
                <div>
                    <h4 className="text-ivory font-bold mb-6">Navigation</h4>
                    <ul className="flex flex-col gap-4 text-sm text-ivory/60">
                        <li><a href="#" className="hover:text-champagne transition-colors">Firm Overview</a></li>
                        <li><a href="#" className="hover:text-champagne transition-colors">Core Advantages</a></li>
                        <li><a href="#" className="hover:text-champagne transition-colors">Strategic Services</a></li>
                        <li><a href="#" className="hover:text-champagne transition-colors">Market Target</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-ivory font-bold mb-6">Contact</h4>
                    <ul className="flex flex-col gap-4 text-sm text-ivory/60">
                        <li>hello@loydpartners.com</li>
                        <li>www.loydpartners.com</li>
                        <li>Abuja, Federal Capital Territory, Nigeria</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/40">
                <p>&copy; 2025 LOYD Investment Partners. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-ivory transition-colors">Terms of Engagement</a>
                </div>
            </div>
        </footer>
    );
};

export default function App() {
  return (
    <div className="w-full min-h-screen bg-obsidian text-ivory">
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <section id="features" className="py-32 px-6 md:px-12 xl:px-24 bg-obsidian">
        <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-ivory mb-6">Why High-Potential Capital Sits on the Sidelines.</h2>
            <p className="text-ivory/60 text-lg">Nigeria holds Africa’s greatest upside, yet billions in potential investment are lost to three persistent barriers.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FeatureCard1 />
            <FeatureCard2 />
            <FeatureCard3 />
        </div>
      </section>
      <Philosophy />
      <LoydFramework />
      <SectorFocus />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
