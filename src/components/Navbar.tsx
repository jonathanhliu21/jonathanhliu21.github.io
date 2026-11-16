import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { profile } from "../data/portfolio";

export function Navbar() {
  const resumes = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (resumes.current && !resumes.current.contains(event.target as Node))
        resumes.current.open = false;
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && resumes.current?.open) {
        resumes.current.open = false;
        resumes.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-identity">
          <h1>{profile.name}</h1>
          <p className="profile-subtitle">{profile.subtitle}</p>
        </div>
        <div className="portrait-crop">
          <img
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            fetchPriority="high"
          />
        </div>
      </div>
      <nav className="profile-links" aria-label="Profile links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
        <details className="resume-dropdown" ref={resumes}>
          <summary>
            Resumes <ChevronDown size={14} aria-hidden="true" />
          </summary>
          <div className="resume-options">
            {profile.resumes.map((resume) => (
              <a
                key={resume.href}
                href={resume.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (resumes.current) resumes.current.open = false;
                }}
              >
                {resume.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
