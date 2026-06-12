import { certificates } from "../../data/certificates";
import { PanelHeader } from "../ui/PanelHeader";

export function CertificateVault() {
  return (
    <section className="relative z-10 px-4 pb-20 sm:px-6 sm:pb-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <PanelHeader
          eyebrow="Credentials"
          title="Certificate vault."
          description="Verified learning records connected directly to the original certificate documents."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <article key={`${certificate.title}-${certificate.issuer}`} className="glass-panel rounded-2xl p-5 sm:rounded-3xl sm:p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-chronicle-primary">
                {certificate.issuer}
              </p>
              <h3 className="min-h-20 text-xl font-semibold tracking-[-0.02em]">{certificate.title}</h3>
              {certificate.date ? <p className="mt-3 text-sm text-chronicle-muted">{certificate.date}</p> : null}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={certificate.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-chronicle-primary px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[#050816]"
                >
                  Open PDF
                </a>
                {certificate.verificationUrl ? (
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-white/80 transition hover:border-chronicle-primary hover:text-chronicle-primary"
                  >
                    Verify
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
