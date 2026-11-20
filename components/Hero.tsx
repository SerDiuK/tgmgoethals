import Image from "next/image";
import { cv, profile, photo } from "@/lib/profile";
import { Container } from "./Section";
import { MapPin } from "./icons";

export function Hero() {
  return (
    <section id="top" className="pt-14 sm:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="rise border-l-8 border-primary pl-6 sm:pl-10 lg:col-span-7">
            <p className="font-display text-xl font-light text-primary">
              {profile.role} at {profile.company}
            </p>
            <h1 className="mt-3 font-display text-6xl font-bold leading-none sm:text-7xl lg:text-8xl">
              {profile.name}
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-base-content/80 sm:text-xl">
              {profile.tagline}
            </p>
            <p className="mt-6 flex items-center gap-2 font-display text-lg font-light text-base-content/70">
              <MapPin className="h-5 w-5 text-primary" />
              {profile.location}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">
                Get in touch
              </a>
              <a href={cv} download className="btn btn-outline">
                Download CV
              </a>
            </div>
          </div>

          <figure className="rise mx-auto w-full max-w-xs border-l-8 border-secondary lg:col-span-5">
            <div className="relative aspect-4/5 bg-base-200">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 20rem"
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
