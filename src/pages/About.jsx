import React from 'react';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import about from '../assets/about.avif';

export default function About() {
  const { theme: t } = useTheme();
  const { t: tr } = useLanguage();

  const teamMembers = tr('about.team');
  const beliefs = tr('about.beliefs');

  return (
    <div style={{ backgroundColor: t.bg, color: t.text, transition: 'all 0.3s ease' }}>
      <div className="container py-5">
        <div className="row align-items-center py-5 g-5">
          <div className="col-12 col-lg-6">
            <p className="text-uppercase" style={{ letterSpacing: '2px', color: t.accent, fontSize: '14px' }}>
              {tr('about.label')}
            </p>
            <h1 className="display-4 fw-normal mb-4" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: t.text }}>
              {tr('about.title')}
            </h1>
            <h6 className="mb-4" style={{ fontSize: '17px', lineHeight: '1.8', color: t.textMuted }}>
              {tr('about.p1')}
            </h6>
            <h6 style={{ fontSize: '17px', lineHeight: '1.8', color: t.textMuted }}>
              {tr('about.p2')}
            </h6>
          </div>

          <div className="col-12 col-lg-6">
            <img
              src={about}
              alt="Our story background"
              className="img-fluid rounded-4 shadow-sm"
              style={{ width: '100%', height: '450px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className="py-5" style={{ backgroundColor: t.bgAlt }}>
        <div className="container py-4">
          <p className="text-uppercase fw-semibold mb-4" style={{ letterSpacing: '2px', color: t.accent }}>
            {tr('about.beliefsLabel')}
          </p>
          <div className="row g-4">
            {Array.isArray(beliefs) && beliefs.map((belief, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div
                  className="p-4 h-100 rounded-4"
                  style={{ backgroundColor: t.surface, border: `1px solid ${t.border}` }}
                >
                  <h5 className="mb-3" style={{ color: t.text, fontFamily: 'Georgia, serif' }}>{belief.title}</h5>
                  <p className="mb-0" style={{ color: t.textMuted, fontSize: '14px', lineHeight: '1.6' }}>{belief.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-5 my-4">
        <p className="text-uppercase fw-semibold mb-4" style={{ letterSpacing: '2px', color: t.accent }}>
          {tr('about.teamLabel')}
        </p>
        <div className="row g-4">
          {Array.isArray(teamMembers) && teamMembers.map((person, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <img
                src={[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
                ][idx]}
                alt={person.name}
                className="img-fluid rounded-4 mb-3"
                style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
              />
              <h4 className="mb-1" style={{ color: t.text, fontFamily: 'Georgia, serif' }}>{person.name}</h4>
              <p className="text-uppercase mb-3" style={{ letterSpacing: '1px', color: t.accent, fontSize: '0.85rem' }}>
                {person.role}
              </p>
              <p style={{ color: t.textMuted, fontSize: '15px', lineHeight: '1.7' }}>{person.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-5 text-center" style={{ backgroundColor: t.bgAlt || '#1a1a1a', color: t.text }}>
        <div className="container py-4">
          <blockquote
            className="mb-4"
            style={{ fontSize: '2rem', lineHeight: '1.6', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            {tr('about.quote')}
          </blockquote>
          <p className="text-uppercase mb-0" style={{ letterSpacing: '2px', color: t.accent }}>
            {tr('about.quoteAuthor')}
          </p>
        </div>
      </div>
    </div>
  );
}
