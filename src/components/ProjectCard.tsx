import { useState } from "react";
import type { Project } from "../data/portfolio";

function Authors({ authors }: { authors: string }) {
  return (
    <p className="authors">
      {authors.split("Jonathan Liu").map((part, index) => (
        <span key={index}>
          {index > 0 && <strong>Jonathan Liu</strong>}
          {part}
        </span>
      ))}
    </p>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const media = project.media;
  return (
    <article id={project.id} className="project">
      <div className="project-heading">
        <h3>
          {project.title}
          {project.subtitle && (
            <>
              : <span>{project.subtitle}</span>
            </>
          )}
        </h3>
        <p className="project-note">
          {project.noteEmphasis
            ? project.note.split(project.noteEmphasis).map((part, index) => (
                <span key={index}>
                  {index > 0 && <strong>{project.noteEmphasis}</strong>}
                  {part}
                </span>
              ))
            : project.note}
        </p>
        {project.authors && <Authors authors={project.authors} />}
      </div>
      <div
        className={`project-content ${media && !failed ? "with-media" : ""}`}
      >
        {media && !failed && (
          <div
            className={`project-media ${media.kind === "image" ? "photo" : ""}`}
          >
            {media.kind === "youtube" ? (
              <iframe
                src={media.src}
                title={media.alt}
                loading="lazy"
                allow="encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : media.kind === "video" ? (
              <video
                controls
                playsInline
                preload="metadata"
                poster={media.poster}
                aria-label={media.alt}
                onError={() => setFailed(true)}
              >
                <source src={media.src} onError={() => setFailed(true)} />
              </video>
            ) : (
              <img
                src={media.src}
                alt={media.alt}
                loading="lazy"
                onError={() => setFailed(true)}
              />
            )}
          </div>
        )}
        <ul className="contributions">
          {project.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      </div>
      <div className="project-links">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </article>
  );
}
