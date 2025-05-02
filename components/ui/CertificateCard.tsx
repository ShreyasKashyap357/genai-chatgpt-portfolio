import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Certificate = {
  title: string;
  issuer: string;
  imageUrl: string;
  link?: string;
  duration: string;
};

export function CertificateCard({ title, issuer, imageUrl, link, duration }: Certificate) {
  return (
    <Card className="w-full max-w-[300px] mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain rounded-md"
            unoptimized
          />
        </div>
        <p className="mt-2 text-sm">Issued by: {issuer}</p>
        {duration && <p className="mt-1 text-sm">Duration: {duration}</p>}
        {link && (
          <Button asChild className="mt-4 w-full">
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}