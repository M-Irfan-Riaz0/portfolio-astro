import { useState } from "react";
import { WHATSAPP_URL } from "../config";

const PROCESS_STEPS = [
  {
    step: "01",
    urdu: "ملاقات",
    en: "Discovery Call",
    desc: "Free 15-min WhatsApp consultation. Aap apna business goal batayein, hum strategy suggest karein.",
    tag: "Day 1",
    details: [
      "15-min WhatsApp or Zoom call — Urdu ya English, jo aap chahein",
      "Quick audit of your current website & search rankings",
      "Honest answer: kya yeh project aap ke liye sahi hai ya nahi",
    ],
  },
  {
    step: "02",
    urdu: "حکمتِ عملی",
    en: "Strategy & Quote",
    desc: "Custom plan with clear deliverables, timeline aur PKR pricing — sab kuch likha hua, koi surprise nahi.",
    tag: "Day 2–3",
    details: [
      "Written proposal with scope, milestones aur PKR pricing",
      "Keyword & competitor research for your city",
      "50% advance, 50% on launch — bank transfer ya Easypaisa",
    ],
  },
  {
    step: "03",
    urdu: "تعمیر",
    en: "Build & Launch",
    desc: "Weekly previews. Aap approve karein, hum ship karein. Most sites 2–4 weeks mein live.",
    tag: "Week 1–4",
    details: [
      "Weekly preview links — feedback do, hum change karein",
      "Mobile-first design, optimized for 4G networks in Pakistan",
      "Free domain & hosting setup guidance included",
    ],
  },
  {
    step: "04",
    urdu: "ترقی",
    en: "Grow & Support",
    desc: "Ongoing SEO, performance monitoring aur ek real human har waqt WhatsApp par.",
    tag: "Ongoing",
    details: [
      "Monthly SEO report — rankings, traffic, leads",
      "Unlimited small edits (text, images, prices)",
      "Dedicated WhatsApp line — replies within 2 hours",
    ],
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((p, i) => {
          const isActive = i === active;
          return (
            <button
              key={p.step}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={`group relative cursor-pointer rounded-[1.5rem] border p-6 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
                isActive
                  ? "ui-card border-brand-primary/40"
                  : "ui-card border-border"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold transition-colors duration-200 ${
                    isActive
                      ? "bg-brand-primary text-white"
                      : "bg-brand-primary text-white shadow-brand-primary/20"
                  }`}
                >
                  {p.step}
                </div>
                <span className="soft-chip rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                  {p.tag}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-brand-secondary">{p.en}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        key={active}
        className="ui-card rounded-[1.75rem] border border-brand-primary/15 p-8 md:p-10"
      >
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="space-y-3">
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">
              Step {PROCESS_STEPS[active].step}
            </div>
            <h4 className="text-2xl font-bold text-brand-secondary">
              {PROCESS_STEPS[active].en}
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {PROCESS_STEPS[active].desc}
            </p>
          </div>
          <ul className="space-y-3">
            {PROCESS_STEPS[active].details.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 text-base leading-relaxed text-brand-secondary"
              >
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-xs font-bold text-brand-primary">
                  ✓
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
