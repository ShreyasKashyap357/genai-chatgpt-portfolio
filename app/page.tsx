import { CertificateCard } from "@/components/ui/CertificateCard";
import { certificates } from "@/lib/certificates";

export default function Home() {
  console.log("Certificates:", certificates);
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Generative AI & ChatGPT Certificates</h1>
        <p className="mt-2 text-lg">My 12 Coursera course achievements in Generative AI and ChatGPT</p>
      </header>
      <main className="flex flex-wrap justify-center">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            imageUrl={cert.imageUrl}
            link={cert.link}
            duration={cert.duration}
          />
        ))}
      </main>
    </div>
  );
}