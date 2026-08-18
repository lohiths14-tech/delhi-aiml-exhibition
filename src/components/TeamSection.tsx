import React from 'react';
import { TEAM_MEMBERS } from '../data/delhiData';
import { Users, CheckCircle2, GraduationCap } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-jaali relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delhi-maroon-900/60 border border-delhi-gold-500/30 text-delhi-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Users size={13} />
            <span>PESITM AIML Innovators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            👨‍💻 THE AIML TEAM
          </h2>
          <p className="text-base sm:text-lg text-delhi-saffron-400 font-medium max-w-xl mx-auto italic">
            “Four minds. One Delhi. One experience.”
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-delhi-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-delhi-gold-500/25 flex flex-col justify-between group shadow-card"
            >
              <div className="space-y-4">
                {/* Number Badge & Icon Avatar */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-delhi-gold-400/20 to-delhi-maroon-900/40 border border-delhi-gold-500/30 flex items-center justify-center text-delhi-gold-400 font-mono text-sm font-bold group-hover:scale-110 transition-transform shadow-gold">
                    <span>{member.roleNumber.slice(-2)}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-delhi-gold-400 bg-delhi-dark-900 px-2 py-1 rounded-md border border-white/5">
                    AIML Team
                  </span>
                </div>

                {/* Member Role & Title */}
                <div>
                  <span className="text-xs font-mono text-delhi-saffron-400 font-bold uppercase tracking-wider block">
                    {member.roleNumber}
                  </span>
                  <h3 className="text-base font-heading font-bold text-white mt-1 group-hover:text-delhi-gold-300 transition-colors">
                    {member.title}
                  </h3>
                  <p className="text-xs text-delhi-cream-400 font-medium mt-1">
                    {member.namePlaceholder}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-delhi-cream-200/85 leading-relaxed">
                  {member.roleDescription}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mt-5 pt-4 border-t border-white/10 space-y-1.5">
                {member.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px] text-delhi-cream-300">
                    <CheckCircle2 size={12} className="text-delhi-gold-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Institution Info Card */}
        <div className="p-6 rounded-3xl bg-delhi-dark-900/80 border border-delhi-gold-500/30 text-center space-y-2 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-delhi-gold-400 text-xs font-mono uppercase tracking-widest font-semibold">
            <GraduationCap size={16} />
            <span>Academic Institution</span>
          </div>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white">
            PES Institute of Technology & Management, Shivamogga
          </h4>
          <p className="text-xs text-delhi-cream-300">
            Department of Artificial Intelligence & Machine Learning • Cooking Without Fire 2026
          </p>
        </div>
      </div>
    </section>
  );
};
