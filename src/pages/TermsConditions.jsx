import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  ShieldCheck,
  Lock,
  Mail,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const TermsConditions = () => {
  const lastUpdated = "December 22, 2025";

  const jobSeekerRef = useRef(null);
  const recruiterRef = useRef(null);

  const PLAYSTORE_LINK =
    "https://play.google.com/store/apps/details?id=com.shramik.app";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (ref) => {
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = ref.current?.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] font-sans antialiased">
      <Navbar />

      <main className="flex-grow pt-8 sm:pt-14 pb-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* MAIN CARD */}
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
            {/* HEADER SECTION */}
            <div className="relative overflow-hidden bg-slate-900 px-6 py-8 sm:px-10 sm:py-10 lg:px-16 text-white">
              <div className="relative z-10 max-w-4xl space-y-5">
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5
                    bg-blue-500/10 border border-blue-500/20
                    text-blue-400 rounded-full
                    text-[9px] sm:text-[10px]
                    font-bold uppercase tracking-[0.25em]"
                >
                  <ShieldCheck size={13} className="text-blue-500" />
                  Legal Agreement
                </div>

                {/* Heading */}
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                   font-black italic tracking-tight leading-tight"
                >
                  Terms &{" "}
                  <span className="text-blue-500 whitespace-nowrap">
                    Disclaimers
                  </span>
                </h1>

                {/* Last Updated */}
                <p
                  className="flex items-center gap-3 text-slate-400
                  text-[11px] sm:text-xs md:text-sm
                  font-medium"
                >
                  <span className="w-7 h-[1px] bg-slate-700"></span>
                  Last Updated: {lastUpdated}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-3">
                  <button
                    onClick={() => scrollTo(jobSeekerRef)}
                    className="group inline-flex items-center gap-2
                   px-5 py-2.5 sm:px-6 sm:py-3
                   rounded-xl bg-blue-600
                   text-white font-bold text-xs sm:text-sm
                   hover:bg-blue-700
                   transition-all duration-200
                   active:scale-95
                   shadow-lg shadow-blue-600/30"
                  >
                    Job Seeker
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <button
                    onClick={() => scrollTo(recruiterRef)}
                    className="inline-flex items-center justify-center
                   px-5 py-2.5 sm:px-6 sm:py-3
                   rounded-xl border border-white/20
                   text-white font-bold text-xs sm:text-sm
                   hover:bg-white/10 hover:border-white/40
                   transition-all duration-200
                   active:scale-95"
                  >
                    Recruiter
                  </button>
                </div>
              </div>

              {/* Background Decor */}
              <Lock
                className="pointer-events-none absolute
               -bottom-16 -right-16
               w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72
               rotate-12 text-blue-500/10"
              />

              <div
                className="pointer-events-none absolute top-0 right-0
               w-52 h-52 sm:w-64 sm:h-64
               bg-blue-600/10 blur-[120px]
               rounded-full -mr-28 -mt-28"
              />
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 sm:p-10 lg:p-12 space-y-10">
              {/* JOB SEEKER SECTION */}
              <section
                ref={jobSeekerRef}
                className="scroll-mt-32 transition-all"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-10 w-2 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                  <h2 className="text-2xl sm:text-3xl font-black italic text-slate-900 tracking-tight">
                    Job Seeker <span className="text-blue-600">Disclaimer</span>
                  </h2>
                </div>

                <p className="text-slate-500 italic text-sm sm:text-base mb-10 leading-relaxed max-w-2xl border-l-2 border-slate-100 pl-4">
                  By registering or applying for jobs through{" "}
                  <strong className="text-blue-700 font-extrabold">
                    Shramik
                  </strong>
                  , you acknowledge and agree to the following terms and
                  conditions:
                </p>

                <div className="grid gap-6">
                  {[
                    {
                      t: "Facilitator Role Only",
                      c: "The Platform is solely a connector between Job Seekers and Recruiters. We are not an employer or agent of any Recruiter.",
                    },
                    {
                      t: "No Employment Guarantee",
                      c: "The Platform does not guarantee job offers, interviews, salaries, benefits, or any employment outcome.",
                    },
                    {
                      t: "Verification Responsibility",
                      c: "Job Seekers must independently verify the legitimacy of Recruiters, job postings, salaries, and terms of employment before accepting any offer.",
                    },
                    {
                      t: "Data Use & Privacy",
                      c: "Your profile, resume, and documents may be shared with Recruiters strictly for recruitment purposes, in accordance with our Privacy Policy.",
                    },
                    {
                      t: "Accuracy of Information",
                      c: "All information and documents you provide must be true and authentic. Submission of false or fraudulent data may lead to account termination.",
                    },
                    {
                      t: "No Company Liability",
                      c: "The Company shall not be liable for misrepresentation, fraud, workplace misconduct, disputes, or losses arising after employment.",
                    },
                    {
                      t: "Mandatory Due Diligence",
                      c: "Users must perform their own background checks on potential employers; Shramik assumes no responsibility for employer conduct.",
                    },
                    {
                      t: "Governing Law",
                      c: "This Disclaimer is governed by the laws of India, with the exclusive jurisdiction of courts in Bangalore, Karnataka.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-5 text-sm sm:text-base group p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-black text-sm">
                        {idx + 1}
                      </span>
                      <div className="space-y-1.5">
                        <p className="text-slate-900 font-bold group-hover:text-blue-700 transition-colors">
                          {item.t}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {item.c}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* RECRUITER SECTION */}
              <section ref={recruiterRef} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-10 w-2 bg-slate-900 rounded-full shadow-[0_0_15px_rgba(15,23,42,0.2)]"></div>
                  <h2 className="text-2xl sm:text-3xl font-black italic text-blue-700 tracking-tight">
                    Recruiter <span className="text-slate-900">Disclaimer</span>
                  </h2>
                </div>

                <p className="text-slate-500 italic text-sm sm:text-base mb-10 border-l-2 border-slate-100 pl-4">
                  By registering or using Shramik as a Recruiter, you agree to
                  the following terms:
                </p>

                <div className="space-y-4">
                  {/* Static Items 1-4 */}
                  <div className="flex gap-5 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <span className="flex-shrink-0 text-blue-600 font-black text-lg">
                      1
                    </span>
                    <div className="space-y-1">
                      <p className="text-slate-900 font-bold">Platform Role</p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We act solely as a facilitator connecting Recruiters and
                        Job Seekers. We are not an employment agency and do not
                        guarantee hires, candidate suitability, or placement
                        outcomes.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 transition-all">
                    <span className="flex-shrink-0 text-blue-600 font-black text-lg">
                      2
                    </span>
                    <div className="space-y-1">
                      <p className="text-slate-900 font-bold">
                        Candidate Information
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        The Platform does not verify or guarantee the accuracy,
                        authenticity, or completeness of any candidate resumes,
                        qualifications, references, or character.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 transition-all">
                    <span className="flex-shrink-0 text-blue-600 font-black text-lg">
                      3
                    </span>
                    <div className="space-y-3">
                      <p className="text-slate-900 font-bold">
                        Verification Responsibility
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        You are fully responsible for conducting your own
                        vetting and due diligence before making hiring
                        decisions. This includes
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "Credential verification",
                          "Background checks",
                          "Reference validation",
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-slate-600 text-xs font-bold"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-2xl bg-red-50/30 border border-red-100 transition-all">
                    <span className="flex-shrink-0 text-blue-600 font-black text-lg">
                      4
                    </span>
                    <div className="space-y-3">
                      <p className="text-slate-900 font-bold">
                        Data Use Limitations
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Candidate data accessed via the Platform must be used
                        only for legitimate recruitment purposes.Prohibited
                        actions include:
                      </p>
                      <ul className="grid gap-2">
                        {[
                          "Selling or sharing data",
                          "Marketing or spamming",
                          "Unauthorized uses",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-red-600/80 text-xs font-bold bg-white/50 p-2 rounded-lg border border-red-100/50"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Dynamic Items 5-10 */}
                  {[
                    {
                      n: 5,
                      t: "Legal Compliance",
                      c: "You must comply with all applicable laws, including Indian Labour Laws.",
                    },
                    {
                      n: 6,
                      t: "No Company Liability",
                      c: "The Company is not liable for misrepresentation by candidates or post-hiring disputes.",
                    },
                    {
                      n: 7,
                      t: "Subscription & Fees",
                      c: "Access to certain services may require payment. Subscription fees are non-refundable.",
                    },
                    {
                      n: 8,
                      t: "Indemnity",
                      c: "You agree to indemnify Shramik against claims arising from misuse of candidate data.",
                    },
                    {
                      n: 9,
                      t: "Account Termination",
                      c: (
                        <div className="p-4 bg-white/80 rounded-xl border border-orange-100 mt-2">
                          <p className="text-slate-600 text-sm mb-3">
                            Company may terminate account for:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Data Misuse",
                              "Fraudulent Postings",
                              "Policy Violations",
                            ].map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-[10px] font-black uppercase tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ),
                    },
                    {
                      n: 10,
                      t: "Jurisdiction",
                      c: "Governed by Indian Law. Exclusive jurisdiction of courts in Bangalore, Karnataka.",
                    },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="flex gap-5 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 transition-all"
                    >
                      <span className="flex-shrink-0 text-blue-600 font-black text-lg">
                        {item.n}
                      </span>
                      <div className="space-y-1">
                        <p className="text-slate-900 font-bold">{item.t}</p>
                        {/* Changed from <p> to <div> to allow for the JSX content in Item 9 */}
                        <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {item.c}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CONTACT CARD */}
              <section className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-12 rounded-[2.5rem] text-white shadow-2xl shadow-blue-600/30 relative overflow-hidden group">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/10 rounded-lg">
                        <Mail size={24} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black italic">
                        Need Legal Clarity?
                      </h3>
                    </div>
                    <p className="text-blue-100 text-sm sm:text-base max-w-sm">
                      Our support team is available to discuss any terms or
                      concerns.
                    </p>
                  </div>
                  <a
                    href="mailto:support@shramik.com"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-black rounded-2xl hover:bg-blue-50 transition-all active:scale-95 group-hover:shadow-xl"
                  >
                    shramikan2025@gmail.com
                  </a>
                </div>
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              </section>
            </div>
          </div>

          {/* FOOTER ACTIONS */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-slate-300 text-slate-600 font-bold text-sm hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all text-center"
            >
              Return to Home
            </Link>
            <button
              onClick={() => window.open(PLAYSTORE_LINK, "_blank")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-black text-sm hover:bg-blue-600 transition-all shadow-xl active:scale-95 group"
            >
              Continue with Us
              <ExternalLink
                size={16}
                className="opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;
