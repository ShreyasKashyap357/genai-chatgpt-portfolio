import { CertificateCard } from "@/components/ui/CertificateCard";
import { genaiCertificates } from "@/lib/certificates";

export default function GenAIPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Generative AI & ChatGPT Certificates</h1>
        <p className="mt-2 text-muted-foreground">
          My 12 Coursera course achievements in Generative AI and ChatGPT
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {genaiCertificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            imageUrl={cert.imageUrl}
            link={cert.link}
            duration={cert.duration}
          />
        ))}
      </div>
    </div>
  );
}