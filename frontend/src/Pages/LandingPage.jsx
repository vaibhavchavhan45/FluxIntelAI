import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import filmsImg from "../assets/films.jpg";
import videoImg from "../assets/vid.png";
import audioImg from "../assets/audio.jpeg";
import chatImg from "../assets/chat.png";
import chatPageImg from "../assets/chat-page.png";
import timestampImg from "../assets/timestamp.png";
import followUpImg from "../assets/folow-up.png";
import summaryInsightImg from "../assets/summary-insight.png";
import mobileViewImg from "../assets/mobile-view.png";

import { 
  MessageSquareShare,
  Search,
  Clock,
  MessagesSquare,
  Video,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles
} from "lucide-react";

const lines = [
  "Structured intelligence, seamlessly extracted from unstructured YouTube video content for instant access.",
  "A thinking engine, not a search engine. It understands, reasons, and responds to your queries.",
  "The AI that transforms any YouTube video into a fully intelligent and interactive conversation.",
  "YouTube holds the world's knowledge and FluxIntelAI makes every bit of it instantly queryable.",
];



//FAQ's section
const faqs = [
  {
    q: "How does FluxIntelAI understand a YouTube video?",
    a: "FluxIntelAI reads the full video transcript, processes it through a RAG pipeline, and generates answers strictly based on what the video actually says."
  },
  {
    q: "How quickly can I find the exact moment in the video that answers my question?",
    a: "Responses usually arrive within a few seconds. Each answer includes timestamps so you can jump directly to the relevant part of the video."
  },
  {
    q: "Can I ask follow-up questions while analyzing long podcasts or lectures?",
    a: "Yes. FluxIntelAI can analyze multi-hour podcasts or lectures, and you can continue asking follow-up questions to explore different parts of the same video."
  },
  {
    q: "How is FluxIntelAI different from other AI tools?",
    a: "FluxIntelAI is built specifically for analyzing videos. It focuses on extracting answers directly from the video’s content rather than relying on general AI knowledge."
  },
  {
    q: "Is FluxIntelAI free to use?",
    a: "Yes. FluxIntelAI currently offers a free plan in its v1 beta version for limited usage."
  },
];


//Usecases
const usecaseImgs = [
  { src: chatImg,           label: "Chat Interface"    },
  { src: chatPageImg,       label: "Chat Page"         },
  { src: timestampImg,      label: "Timestamps"        },
  { src: followUpImg,       label: "Follow Up"         },
  { src: summaryInsightImg, label: "Summary Insights"  },
  { src: mobileViewImg,     label: "Mobile View"       },
];

//Feature section
const features = [
  {
    title: "Instant AI Chat",
    desc: "One click to launch a full AI conversation. No setup, No friction, just AI generated answers.",
    svg: <MessageSquareShare size={20} strokeWidth={1.5} />
  },
  {
    title: "Zero Manual Search",
    desc: "Drop any video and get answers instantly. No scrubbing, No guessing.",
    svg: <Search size={20} strokeWidth={1.5} />
  },
  {
    title: "Exact Timestamps",
    desc: "Every response is pinned to the exact moment in the video where the answer appears.",
    svg: <Clock size={20} strokeWidth={1.5} />
  },
  {
    title: "Endless Conversation",
    desc: "Continue the conversations and explore deeper without restarting the search.",
    svg: <MessagesSquare size={20} strokeWidth={1.5} />
  },
  {
    title: "Long Video Analysis",
    desc: "Podcasts, lectures, and long videos become instantly searchable. Find any moment, without watching a single second.",
    svg: <Video size={20} strokeWidth={1.5} />
  },
  {
    title: "Context Grounded AI",
    desc: "Responses stays grounded to the context of video, Never hallucinated.",
    svg: <ShieldCheck size={20} strokeWidth={1.5} />
  },
  {
    title: "Smart Insight Extraction",
    desc: "Key insights extracted directly from the video transcript using a precision RAG pipeline.",
    svg: <Zap size={20} strokeWidth={1.5} />
  },
  {
    title: "Complexity Made Simple",
    desc: "Dense, technical, and complex videos broken down into clear, precise answers.",
    svg: <Layers size={20} strokeWidth={1.5} />
  },
  {
    title: "Smart Highlights",
    desc: "Pick any video, ask your question, FluxIntelAI finds the exact answer instantly.",
    svg: <Sparkles size={20} strokeWidth={1.5} />
  },
];

function LandingPage() {
  const navigate = useNavigate();

  //FluxIntelAI workflow.
  const [activeStep, setActiveStep] = useState(0)

const [hovered, setHovered] = useState(null);

const [activeImg, setActiveImg] = useState(2);

//Features section
const [largeCards, setLargeCards] = useState({ 0: 1, 1: 5, 2: 6 });
const rowGroups = [
  { cards: [0, 1, 2], defaultLarge: 1 },
  { cards: [3, 4, 5], defaultLarge: 5 },
  { cards: [6, 7, 8], defaultLarge: 6 },
];

//FAQ
const [openFaq, setOpenFaq] = useState(null);
const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

const isLarge = (i) => {
  const rowIndex = rowGroups.findIndex(r => r.cards.includes(i));
  return largeCards[rowIndex] === i;
};

const handleMouseEnter = (i) => {
  setHovered(i);
  const rowIndex = rowGroups.findIndex(r => r.cards.includes(i));
  if (!isLarge(i)) {
    setLargeCards(prev => ({ ...prev, [rowIndex]: i }));
  }
};

const handleMouseLeave = (i) => {
  setHovered(null);
  const rowIndex = rowGroups.findIndex(r => r.cards.includes(i));
  setLargeCards(prev => ({ ...prev, [rowIndex]: rowGroups[rowIndex].defaultLarge }));
};

  // ── Scroll refs ──
  const heroRef = useRef(null);
  const howItWorksRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollTo = (ref, offset = 160) => {
    const top = ref.current?.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Core capabilities scroll
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

  const observer = new IntersectionObserver(
    ([entry]) => {

      if (entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    },
    { threshold: 0.35 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();

}, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3f8] via-[#f1edf6] to-[#ece7f4] text-neutral-900">

      {/* ================= NAVBAR  bg-black-300  ================= */}
      <div className="sticky top-6 z-50 flex justify-center">
        <div className="w-[95%] max-w-6xl h-[64px] rounded-full px-6 flex items-center justify-between backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="FluxIntelAI Logo"
              className="h-11 w-11 rounded-xl object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span
                className="tracking-wide text-[22px] font-black"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                FluxIntelAI
              </span>
              <span className="text-[12px] text-neutral-500 tracking-[0.15em]">
                The AI Knowledge Engine
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-sm text-neutral-600 hover:text-black transition">
              Docs
            </button>

            <button
              onClick={() => navigate("/app")}
              className="px-6 py-2 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div ref={heroRef} className="relative flex flex-col items-center text-center px-6 pt-36 pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_70%)]" />

        <div className="relative -top-[10px] mb-10 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-red-200 text-sm font-medium shadow-sm">
          AI for YouTube Videos
        </div>

        <h1
  className="text-[64px] md:text-[72px] font-semibold leading-[1.1]"
  style={{ fontFamily: "'Playfair Display', serif" }}
>
  Smart{" "}
  <span className="bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent">
    
    <span className="relative inline-block w-[100px] mx-2">
      <span className="opacity-0">AI</span>

      <span className="absolute left-0 -top-[56px]">
        <svg
          width="150"
          height="125"
          viewBox="0 0 144 110"
        >
          <text
            x="0"
            y="115"
            fontSize="104"
            fontFamily="'Playfair Display', serif"
            fill="none"
            stroke="#222"
            strokeWidth="2"
            strokeDasharray="1 5"
            strokeLinecap="round"
          >
            AI
          </text>
        </svg>
      </span>
    </span>{" "}
    
    Cognition
  </span>
  <br />
  Built for <span className="text-red-600">YouTube</span>
</h1>

        <p className="mt-10 text-xl text-neutral-600 max-w-3xl">
          AI crafted to extract deep contextual insights from long-form YouTube
          content including lectures, podcasts, interviews, and more.
        </p>

        <button
          onClick={() => navigate("/app")}
          className="mt-18 px-10 py-3 rounded-full bg-black text-white text-sm cursor-pointer"
        >
          Get Started
        </button>
      </div>

     
      
{/* ================= PROBLEM ================= */}
<div className="relative min-h-screen px-6 overflow-hidden -mt-10">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-red-50/50 to-transparent -z-10" />

  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-24">
      <h2 className="text-5xl md:text-6xl font-semibold leading-tight text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>
        Hours of <span className="text-red-600 italic">Video Content.</span><br />
        Still Zero Answers.
      </h2>
      <p className="mt-10 text-xl text-neutral-600 max-w-5xl mx-auto">
  The knowledge exists. It's <span className="font-semibold text-neutral-800">buried inside hours of video</span> you simply never get around to watching.
  <br />
  YouTube was built for views not for understanding. <span className="font-semibold text-neutral-800">We fix that.</span>
</p>
    </div>

    <div className="grid md:grid-cols-3 gap-24">
      {[
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1664 1664"><path fill="currentColor" d="M1088 768H904q-29-32-72-32h-5L475 384q-19-19-45.5-19T384 384t-19 45.5t19 45.5l352 352v5q0 40 28 68t68 28q43 0 72-32h184q26 0 45-19t19-45t-19-45t-45-19zM832 256q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19zm0 1024q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19zM320 768q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19zm1024 0q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19zM832 0Q663 0 508.5 66T243 243T66 508.5T0 832t66 323.5T243 1421t265.5 177t323.5 66t323.5-66t265.5-177t177-265.5t66-323.5t-66-323.5T1421 243T1155.5 66T832 0zm0 128q143 0 273.5 55.5t225 150t150 225T1536 832t-55.5 273.5t-150 225t-225 150T832 1536t-273.5-55.5t-225-150t-150-225T128 832t55.5-273.5t150-225t225-150T832 128z"/></svg>,
          title: "Too Long to Watch",
          desc: "Lectures, podcasts, interviews are 1 to 3 hours long. Nobody has time to sit through all of it just to find one answer.",
          img: filmsImg
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 2048 2048"><path fill="currentColor" d="M2048 256v639q-28-28-60-50t-68-42V384h-128v128h-128V384H384v128H256V384H128v1152h128v-128h128v128h707l-128 128H0V256h2048zm-256 384v113q-32-8-64-12t-64-5v-96h128zM384 1024H256V896h128v128zm0-256H256V640h128v128zm-128 384h128v128H256v-128zm1408-256q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-60 0-116-18t-106-54l-437 437q-19 19-45 19t-45-19t-19-45q0-26 19-45l437-437q-35-49-53-105t-19-117q0-79 30-149t82-122t122-83t150-30zm0 640q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20z"/></svg>,
          title: "Hard to Find Moments",
          desc: "You know it's in the video. But scrubbing through hours of content to find one moment? Frustrating and time-consuming.",
          img: videoImg
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26"><path fill="currentColor" d="M13 0C5.925 0 0 5.08 0 11.5c0 3.03 1.359 5.748 3.5 7.781a6.733 6.733 0 0 1-1.094 1.875A16.48 16.48 0 0 1 .375 23.22A1 1 0 0 0 1 25c2.215 0 3.808-.025 5.25-.406c1.29-.342 2.399-1.058 3.531-2.063c1.03.247 2.093.469 3.219.469c7.075 0 13-5.08 13-11.5S20.075 0 13 0zm0 2c6.125 0 11 4.32 11 9.5S19.125 21 13 21c-1.089 0-2.22-.188-3.25-.469a1 1 0 0 0-.938.25c-1.125 1.079-1.954 1.582-3.062 1.875c-.51.135-1.494.103-2.188.157c.14-.158.271-.242.407-.407c.786-.96 1.503-1.975 1.719-3.125a1 1 0 0 0-.344-.937C3.249 16.614 2 14.189 2 11.5C2 6.32 6.875 2 13 2zm-1.906 3.906a1 1 0 0 0-.469.25l-1.5 1.407l1.344 1.468l1.187-1.125h2.406L15 8.97v1.469l-2.563 1.718A1 1 0 0 0 12 13v2h2v-1.438l2.563-1.718A1 1 0 0 0 17 11V8.594a1 1 0 0 0-.25-.656l-1.5-1.688a1 1 0 0 0-.75-.344h-3.188a1 1 0 0 0-.218 0zM12 16v2h2v-2h-2z"/></svg>,
          title: "Can't Ask Questions",
          desc: "The video just plays. It never responds. You can't ask it anything, pause to clarify, or go deeper on what matters most.",
          img: audioImg
        },
      ].map((p, i) => (
        <div
          key={i}
          className="group bg-white border border-neutral-200/60 rounded-[32px] shadow-sm hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] hover:border-red-100 transition-all duration-500 flex flex-col h-[480px] hover:-translate-y-2"
        >
          <div className="flex items-center gap-4 px-8 pt-8 pb-4 shrink-0">
            <div className="p-2.5 bg-neutral-50 rounded-xl group-hover:bg-red-50 group-hover:text-red-600 transition-colors duration-300">
              {p.icon}
            </div>
            <h3 className="text-[18px] font-semibold text-neutral-800 whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
              {p.title}
            </h3>
          </div>

          <div className="mx-8 h-px bg-red-100 shrink-0" />

          <div className="h-[250px] w-full px-6 py-4 flex items-center justify-center shrink-0">
            <img
              src={p.img}
              alt={p.title}
              className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>

          <div className="mx-8 h-px bg-red-100 shrink-0" />

          <div className="px-8 py-5 flex-1">
            <p className="text-[15px] text-neutral-500 leading-relaxed text-justify">{p.desc}</p>
          </div>

        </div>
      ))}
    </div>
  </div>
</div>

{/* Solution */}
<section className="relative py-28 px-16">

  <div className="text-center mb-15">
    <h2 className="text-5xl md:text-6xl font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>
  <span className="text-neutral-900">Meet </span>
  <span
    className="text-red-600 italic"
    style={{ WebkitTextStroke: "0.6px #111" }}
  >
    FluxIntelAI.
  </span>
</h2>
    <p className="text-xl text-neutral-500 mt-6">
      Built on RAG. Powered by AI. Designed for people who value their time.
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-2 gap-40">

    <div className="flex flex-col pt-2 max-w-2xl">
      <h3
  className="text-center mb-3"
  style={{ fontFamily: "Playfair Display, serif" }}
>
  <span
    className="text-3xl font-black italic"
    style={{
      background: "linear-gradient(90deg, #f97204, #fe2a05)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    FluxIntelAI
  </span>
  <span className="text-3xl text-neutral-400 font-extralight italic ml-2"> in Action</span>
</h3>

{/* RN */}
      <div className="flex flex-col mt-10 gap-6">
  {lines.map((line, i) => (
    <div key={i} className="group relative cursor-default">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          background: "linear-gradient(90deg, rgba(220,38,38,0.18) 0%, rgba(248,113,113,0.10) 45%, rgba(254,202,202,0.06) 75%, transparent 100%)",
          backdropFilter: "blur(14px)",
        }}
      />
      <div className="relative flex items-start gap-4 px-3">
        <span
          className="flex-shrink-0 text-[13px] font-semibold text-red-400/60 mt-[6px] w-6"
          style={{ fontFamily: "Playfair Display, serif", textAlign: "justify", textAlignLast: "left" }}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
        <p
  className="text-[16px] italic leading-[1.8] transition-all duration-300 text-neutral-400 group-hover:text-neutral-700 w-full"
  style={{ fontFamily: "Playfair Display, serif", textAlign: "justify", textAlignLast: "left" }}
>
  {line}
</p>
      </div>
    </div>
  ))}
  <p
  className="text-sm italic text-neutral-400 mt-4 pr-3"
  style={{ fontFamily: "Playfair Display, serif", textAlign: "right" }}
>
  -- and the list continues.....
</p>
</div>

{/* RN END*/}

{/* Subtle border */}
<div className="mt-10 h-[1px] bg-neutral-200 shadow-[0_4px_6px_rgba(255,255,255,0.9)]" />
{/* Core capabilities*/}
      <div ref={sectionRef} className="my-8">

<h3
  className="text-center mb-3"
  style={{ fontFamily: "Playfair Display, serif" }}
>
  <span className="text-3xl text-neutral-400 font-extralight italic">
    Core
  </span>

  <span
    className="text-3xl font-black italic ml-2"
    style={{
      background: "linear-gradient(90deg, #f97204, #fe2a05)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Capabilities
  </span>
</h3>

<div className="relative flex flex-col gap-4">

{[
{
leftLable:"Typical video length",
leftValue:"2 hours",
rightLable:"Answer time",
rightValue:"10 sec"
},
{
leftLable:"Video contains",
leftValue:"Several topics",
rightLable:"You get",
rightValue:"Specific answer"
},
{
leftLable:"Navigation",
leftValue:"Manual search",
rightLable:"Result",
rightValue:"Exact timestamp"
},
{
leftLable:"Learning method",
leftValue:"Watch entire video",
rightLable:"Interaction",
rightValue:"Ask a question"
},
{
leftLable:"Follow-up questions",
leftValue:"Restart searching",
rightLable:"Conversation",
rightValue:"Continuous chat"
}
].map((row,i)=>{

const offsets=["ml-0","ml-[50px]","ml-0","ml-[50px]","ml-0"]
const clipId = `cardShape-${i}`
const isLast = i === 4

return(

<div
key={i}
className={`${offsets[i]} relative transition-all duration-600 ${
visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
}`}
style={{ transitionDelay: `${i * 250}ms` }}
>

<div className="relative w-[520px] h-[90px] group transition-transform duration-300 hover:-translate-y-[3px] hover:scale-[1.01]">

<svg
className="absolute inset-0 w-full h-full"
viewBox="0 0 520 90"
preserveAspectRatio="none"
>

<defs>
<clipPath id={clipId}>
<path d="M8 12 L508 8 L512 78 L10 82 Z"/>
</clipPath>
</defs>

<path
d="M5 10 L510 6 L514 80 L8 84 Z"
stroke="#9ca3af"
strokeWidth="0.9"
fill="none"
/>

<path
d="M8 12 L508 8 L512 78 L10 82 Z"
stroke="#9ca3af"
strokeWidth="1.2"
fill="none"
/>

</svg>

<div
className="relative h-full px-8 flex items-center bg-[rgba(255,255,255,0.7)] backdrop-blur-lg border border-black/5 overflow-hidden"
style={{clipPath:`url(#${clipId})`}}
>

{/* Glow sweep */}
<div
className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
style={{
background:
"linear-gradient(90deg, transparent, rgba(239,68,68,0.08), transparent)"
}}
/>

<div className="grid grid-cols-2 gap-10 w-full">

<div>
<div className="text-[11px] uppercase tracking-wide text-neutral-400 mb-1">
{row.leftLable}
</div>

<div className="text-xl font-semibold text-neutral-900">
{row.leftValue}
</div>
</div>

<div className="text-right">
<div className="text-[11px] uppercase tracking-wide text-neutral-400 mb-1">
{row.rightLable}
</div>

<div className="text-xl font-semibold text-red-600">
{row.rightValue}
</div>
</div>

</div>

</div>

</div>

{isLast && (
<p
  className="text-sm italic text-neutral-400 mt-2 pr-3"
  style={{ fontFamily: "Playfair Display, serif", textAlign: "right" }}
>
  -- and much more.....
</p>
)}

</div>

)

})}

</div>

</div>
    </div>

{/* RHS of meet FluxIntelAI*/}
    
   <div className="relative pt-2">
    <h3
  className="text-center mb-3"
  style={{ fontFamily: "Playfair Display, serif" }}
>
  <span
    className="text-3xl font-black italic"
    style={{
      background: "linear-gradient(90deg, #f97204, #fe2a05)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    FluxIntelAI
  </span>

  <span className="text-3xl text-neutral-400 font-extralight italic ml-2">
    Workflow
  </span>
</h3>
  {[
    {
      num: "01",
      title: "Understand the Video",
      desc: "FluxIntelAI reads the entire transcript, perform RAG steps and understands the full context of the video. The information inside video becomes instantly accessible.",
    },
    {
      num: "02",
      title: "Ask Complex Questions",
      desc: "Instead of searching through timelines, you can simply ask questions about the video and get clear answers based on the actual content of the video.",
    },
    {
      num: "03",
      title: "Jump to Exact Timestamp",
      desc: "Every response includes precise timestamps so you can instantly navigate to the exact part of the video where the answer appears.",
    },
    {
      num: "04",
      title: "Answers You Can Trust",
      desc: "Responses are generated strictly from the video transcript, ensuring every answer stays grounded in the actual original content.",
    },
    {
    num: "05",
    title: "Conversational Memory",
    desc: "Every follow-up question builds on the previous one. FluxIntelAI remembers the context of your conversation and keeps the dialogue flowing naturally.",
  }]
  .map((item, i) => (
    <div key={i} className="group relative py-10">
  <span
    className="absolute left-0 -top-2 text-[56px] font-semibold text-neutral-200 select-none transition-colors duration-300 group-hover:text-red-400"
    style={{ fontFamily: "Playfair Display, serif" }}
  >
    {item.num}
  </span>

  <div className="pl-14">
    <h3
      className="text-[20px] font-semibold text-neutral-900 mb-2"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {item.title}
    </h3>
    <p
      className="text-[15px] text-neutral-600 leading-[1.75]"
      style={{ textAlign: "justify", textAlignLast: "justify" }}
    >
      {item.desc}
    </p>
  </div>

  <div className="mt-8 h-[1.5px] bg-gradient-to-r from-transparent via-red-800/60 to-transparent" />

</div>
  ))}
</div>

  </div>

</section>



      {/* ================= HOW IT WORKS ================= */}
      <div ref={howItWorksRef} className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How It <span className="italic text-red-600">Works</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
            Powerful AI. Simple flow. Designed for deep YouTube videos understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              step: "01",
              title: "Paste YouTube Link",
              desc: "Drop any long video, lecture, or podcast."
            },
            {
              step: "02",
              title: "AI Understands Video",
              desc: "We process full transcript context using advanced RAG."
            },
            {
              step: "03",
              title: "Ask Anything",
              desc: "Get grounded, contextual, follow-up friendly answers."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                rounded-3xl
                p-10
                backdrop-blur-xl
                bg-white/70
                border border-white/40
                shadow-[0_15px_40px_rgba(0,0,0,0.07)]
                transition-all duration-500
                hover:-translate-y-2
                hover:bg-[rgba(0,180,255,0.15)]
                hover:border-[rgba(0,180,255,0.4)]
                hover:backdrop-blur-2xl
                hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]
              "
            >
              {/* Shine Sweep */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div className="
                  absolute -left-full top-0 h-full w-1/2
                  bg-gradient-to-r from-transparent via-white/40 to-transparent
                  skew-x-[-20deg]
                  group-hover:left-full
                  transition-all duration-1000
                " />
              </div>

              {/* Step circle */}
              <div className="absolute -top-6 left-8 h-12 w-12 rounded-full flex items-center justify-center text-sm font-semibold text-white shadow-lg bg-gradient-to-br from-red-600 to-red-800">
                {item.step}
              </div>

              <div className="mt-10 relative z-10">
                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ================= FINAL CTA START================= */}
      <div ref={ctaRef} className="relative py-5 text-center overflow-hidden">

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10" />

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            Turn <span className="text-red-600 italic">YouTube Videos</span><br />
            Into Actionable Knowledge
          </h2>

          <p className="text-lg text-neutral-600 mb-6">
            Ask deeper questions. Extract real insights.
            Transform any YouTube video into structured intelligence, refined to crystal clarity explanation and delivered with precision in seconds.
          </p>

          <button
            onClick={() => navigate("/app")}
            className="mt-7 px-12 py-4 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm hover:scale-105 cursor-pointer transition-transform duration-300"
          >
            Start Exploring →
          </button>
        </div>
      </div>
      {/* ================= FINAL CTA END================= */}


      {/* FEATURE SECTION*/}
      <section className="px-6 py-24">
      <div className="w-full max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 text-center">
  <h2
    className="text-center text-5xl md:text-6xl font-semibold leading-tight text-neutral-900"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    <span
      className="block text-red-600"
      style={{ WebkitTextStroke: "0.6px #111" }}
    >
      <i>
        FluxIntelAI
      </i>
    </span>

    <span className="block text-neutral-900">
      Premium Features
    </span>
  </h2>

  <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
  Premium capabilities engineered for intelligent video understanding.{" "}
  <br />
  Ask questions, follow context, and reach answers instantly with precise clarity.
</p>
</div>

        {/* Bento Grid — 3 cols, large cards span 2 */}
        <div className="grid grid-cols-4 gap-x-10 gap-y-20">
  {features.map((f, i) => (
    <div
      key={f.title}
      onMouseEnter={() => handleMouseEnter(i)}
      onMouseLeave={() => handleMouseLeave(i)}
      className={`
        relative overflow-hidden rounded-2xl border p-7
        transition-all duration-500 ease-in-out cursor-default transform-gpu will-change-transform
        ${isLarge(i) ? "col-span-2 min-h-[220px] opacity-100" : "col-span-1 opacity-90"}
        ${hovered === null
          ? "border-gray-200 opacity-100"
          : hovered === i
            ? "border-[#FF0000]/40 shadow-[0_4px_24px_rgba(255,0,0,0.12)] -translate-y-0.01 scale-[1.05] bg-[#f8f8ff]"
            : "border-gray-200"
        }
      `}
    >
      {/* Glow blob top-right */}
      <div className={`absolute -top-8 -right-8 w-36 h-36 rounded-full bg-[#FF0000]/10 blur-3xl pointer-events-none transition-opacity duration-500
  ${hovered === i ? "opacity-80" : "opacity-0"}`}
/>

      {/* Icon box */}
      <div className={`relative mb-5 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
  ${hovered === i ? "bg-[#FF0000]/10 text-[#FF0000]" : "bg-gray-100 text-gray-400"}`}>
  {f.svg}
</div>

      {/* Title */}
      <h3 className={`relative font-bold mb-2 leading-snug text-gray-900
        ${isLarge(i) ? "text-2xl" : "text-lg"}`}>
        {f.title}
      </h3>

      {/* Description */}
<p className="relative text-gray-400 text-sm leading-relaxed font-light">
  {f.desc}
</p>

    </div>
  ))}
</div>
      </div>
    </section>

    {/* ================= USECASE ================= */}
   <section className="px-6 py-24 overflow-hidden">
  <div className="w-full max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-semibold inline-block" style={{ fontFamily: "Playfair Display, serif" }}>
        <div className="flex items-stretch gap-4">
          <div className="text-left">
            <span className="block text-neutral-900">Real <span className="text-red-600 italic">Workflows.</span></span>
            <span className="block text-neutral-900">Real Results.</span>
          </div>
        </div>
      </h2>
      <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
        Every usecase below is a real workflow.
        <br />
        Pure intelligence over endless effort. FluxIntelAI handles it all.
      </p>
    </div>

    {/* Stage */}
    <div className="relative flex items-center justify-center" style={{ height: "560px" }}>

      {/* ← Prev */}
      <button
        onClick={() => setActiveImg(prev => (prev - 1 + usecaseImgs.length) % usecaseImgs.length)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
        style={{ background: "rgba(255,0,0,0.08)" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF0000" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </button>

      {/* → Next */}
      <button
        onClick={() => setActiveImg(prev => (prev + 1) % usecaseImgs.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
        style={{ background: "rgba(255,0,0,0.08)" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF0000" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Cards */}
      {usecaseImgs.map((img, i) => {
        let offset = i - activeImg;

        if (offset > usecaseImgs.length / 2) offset -= usecaseImgs.length;
        if (offset < -usecaseImgs.length / 2) offset += usecaseImgs.length;

        const absOffset = Math.abs(offset);
        if (absOffset > 2) return null;

        const isActive = offset === 0;

        return (
          <div
            key={i}
            onClick={() => setActiveImg(i)}
            className="absolute cursor-pointer"
            style={{
              width: isActive ? "680px" : "360px",
              height: isActive ? "460px" : "260px",
              left: "50%",
              transform: `translateX(calc(-50% + ${offset * 420}px)) scale(${isActive ? 1 : 0.82})`,
              zIndex: isActive ? 10 : 10 - absOffset,
              opacity: isActive ? 1 : absOffset === 1 ? 0.55 : 0.25,
              transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform, opacity, width, height",
            }}
          >
            {/* Mobile frame for last img */}
            {i === 5 && isActive ? (
              <div className="w-full h-full flex items-center justify-center">
                <div
                  className="relative"
                  style={{
                    width: "220px",
                    height: "440px",
                    border: "8px solid #1a1a1a",
                    borderRadius: "36px",
                    overflow: "hidden",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
                  }}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] rounded-full z-10" />
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                </div>
              </div>
            ) : (
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  boxShadow: isActive ? "0 32px 80px rgba(0,0,0,0.18)" : "0 8px 24px rgba(0,0,0,0.10)",
                  border: "1px solid rgba(0,0,0,0.06)"
                }}
              />
            )}
          </div>
        );
      })}
    </div>

    {/* Active label */}
    <div className="flex justify-center overflow-hidden mt-[-20px]">
      <p
        key={activeImg}
        className="text-md font-medium"
        style={{
          fontFamily: "Playfair Display, serif",
          color: "#1a1a1a",
          animation: "labelUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        }}
      >
        <style>{`
          @keyframes labelUp {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        <i>{usecaseImgs[activeImg].label}</i>
      </p>
    </div>

    {/* Dots */}
    <div className="flex justify-center gap-2 mt-10">
      {usecaseImgs.map((_, i) => (
        <button
          key={i}
          onClick={() => setActiveImg(i)}
          className="rounded-full transition-all duration-300"
          style={{
            width: activeImg === i ? "28px" : "8px",
            height: "8px",
            background: activeImg === i ? "#FF0000" : "#d1d5db",
          }}
        />
      ))}
    </div>

  </div>
</section>

{/* FAQ's */}
<section className="px-6 py-24">
  <div className="w-full max-w-3xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2
        className="text-5xl md:text-6xl font-semibold text-neutral-900 mb-4"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Frequently Asked <span className="italic text-[#FF0000]">Questions</span>
      </h2>
      <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
        Everything you need to know before getting started with FluxIntelAI.
      </p>
    </div>

    {/* FAQ List */}
    <div>
  {faqs.map((faq, i) => (
    <div key={i} className="border-b border-gray-200 py-5">

      {/* Question row — only this is clickable */}
      <div
        onClick={() => toggleFaq(i)}
        className="flex items-center justify-between gap-4 cursor-pointer"
      >
        <p className={`text-md font-medium transition-colors duration-200 ${openFaq === i ? "text-neutral-900" : "text-neutral-700"}`}>
          {faq.q}
        </p>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ background: "rgba(255,0,0,0.08)", color: "#FF0000" }}
        >
          <span
            className="text-lg font-light leading-none"
            style={{
              transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
              display: "inline-block",
              transition: "transform 0.3s ease"
            }}
          >
            +
          </span>
        </span>
      </div>

      {/* Answer — not clickable */}
      <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
        <p className="text-md text-neutral-500 leading-relaxed pr-10">
          {faq.a}
        </p>
      </div>

    </div>
  ))}
</div>

  </div>
</section>



      {/* ================= FOOTER ================= */}
      <footer className="mt-24 relative bg-[#242424] text-neutral-300 overflow-hidden">

  {/* Glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[200px] bg-[radial-gradient(ellipse_at_top_left,rgba(200,20,20,0.12),transparent_70%)] pointer-events-none" />
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-700/60 to-transparent" />

  <div className="w-[95%] mx-auto pt-16 pb-10">

    {/* Top Grid */}
    <div className="grid md:grid-cols-12 gap-12 mb-16">

      {/* Left Column */}
      <div className="md:col-span-5 flex flex-col items-center">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-5">
          <img src={logo} alt="FluxIntelAI Logo" className="h-10 w-10 rounded-lg object-contain" />
          <span className="text-2xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            FluxIntelAI
          </span>
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mb-6 text-justify">
          AI-powered contextual intelligence built to extract meaningful insights
          from long-form YouTube content. So, you learn faster and think deeper.
        </p>

         {/* Social icons */}
      <div className="flex gap-8 mt-5">

  {/* LinkedIn */}
  <div
    onClick={() => window.open("https://www.linkedin.com/in/vaibhavchavhan/", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </div>

  {/* GitHub */}
  <div
    onClick={() => window.open("https://github.com/vaibhavchavhan45", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  </div>

  {/* Twitter */}
  <div
    onClick={() => window.open("https://x.com/vaibhav7chavhan", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M18.244 2H21l-6.56 7.5L22.5 22h-6.88l-5.39-7.04L3.9 22H1l7.03-8.03L1.5 2h6.98l4.87 6.5L18.244 2z"/>
    </svg>
  </div>

  {/* Email */}
  <div
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=chavhanvaibhav708@gmail.com", "_blank")}
    className="cursor-pointer hover:scale-125 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  </div>

</div>
      </div>

      {/* Right Columns */}
      <div className="md:col-span-7 grid grid-cols-3 gap-8 mt-2">

  {/* Product */}
  <div className="ml-25">
    <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">Product</h4>
    <ul className="space-y-3 text-sm text-neutral-400">
      {[
        { label: "Features", action: () => scrollTo(heroRef) },
        { label: "How It Works", action: () => scrollTo(howItWorksRef) },
        { label: "Get Started", action: () => scrollTo(ctaRef, 145) },
      ].map(({ label, action }) => (
        <li key={label} onClick={action} className="hover:text-white cursor-pointer transition-all duration-200 hover:translate-x-2 transform inline-block w-full">
          {label}
        </li>
      ))}
    </ul>
  </div>

  {/* Company */}
<div className="ml-17">
  <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">Studio</h4>
  <ul className="space-y-3 text-sm text-neutral-400">
    {[
      { label: "About", action: () => { navigate("/about"); window.scrollTo(0, 0); } },

      {
  label: "Contact",
  action: () => {
    document.body.style.visibility = "hidden";   // hide page

    navigate("/about");

    setTimeout(() => {
      const element = document.getElementById("contact-section");
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo(0, y);

      document.body.style.visibility = "visible";
    }, 100);
  },
},

      { label: "Feedback", action: () => { navigate("/feedback"); window.scrollTo(0, 0); } },
      { label: "Report a Bug", action: () => { navigate("/report-bug"); window.scrollTo(0, 0); } },
    ].map(({ label, action }) => (
      <li
        key={label}
        onClick={action}
        className="hover:text-white cursor-pointer transition-colors duration-200 hover:translate-x-1 transform inline-block w-full"
      >
        {label}
      </li>
    ))}
  </ul>
</div>

  {/* Legal */}
<div>
  <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">Legal</h4>
  <ul className="space-y-3 text-sm text-neutral-400">
    {[
      { label: "Privacy Policy", action: () => { navigate("/privacy-policy"); window.scrollTo(0, 0); } },
      { label: "Terms of Service", action: () => { navigate("/terms-conditions"); window.scrollTo(0, 0); } },
    ].map(({ label, action }) => (
      <li
        key={label}
        onClick={() => action && action()}
        className="hover:text-white cursor-pointer transition-colors duration-200 hover:translate-x-1 transform inline-block w-full"
      >
        {label}
      </li>
    ))}
  </ul>
</div>

</div>
    </div>

    {/* Bottom Bar */}
    <div className="w-full h-[1px] bg-white/5 mb-6" />

<div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-600 px-27">
  <span>© 2026 FluxIntelAI. All rights reserved.</span>
  <span className="tracking-widest uppercase">Built for Learning & Research</span>
  <div
  onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=chavhanvaibhav708@gmail.com", "_blank")}
  className="cursor-pointer text-xs text-neutral-500 tracking-widest uppercase transition-all duration-300 hover:text-white hover:font-semibold hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
>
  chavhanvaibhav708@gmail.com
</div>
</div>
</div>
</footer>

    </div>
  );
}

export default LandingPage;