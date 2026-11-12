import Image from "next/image";

export interface Shot {
  src: string;
  alt: string;
}

type HeroMediaProps =
  | { type: "phones"; shots: [Shot] | [Shot, Shot] }
  | { type: "wide"; shot: Shot; width: number; height: number }
  | { type: "video"; src: string; poster: string; label: string };

const frame =
  "overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-2xl";

export default function HeroMedia(props: HeroMediaProps) {
  if (props.type === "video") {
    return (
      <div className={`${frame} aspect-video w-full`}>
        <video
          src={props.src}
          poster={props.poster}
          aria-label={props.label}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    );
  }

  if (props.type === "wide") {
    return (
      <div className={`${frame} w-full`}>
        <Image
          src={props.shot.src}
          alt={props.shot.alt}
          width={props.width}
          height={props.height}
          sizes="(min-width: 1024px) 64rem, 100vw"
          className="h-auto w-full"
          preload
        />
      </div>
    );
  }

  const [front, back] = props.shots;

  return (
    <div
      className={`relative mx-auto w-full max-w-xs ${back ? "pb-10 pr-12" : ""}`}
    >
      {back && (
        <div
          className={`${frame} absolute bottom-0 right-0 w-[72%] rotate-6 opacity-90`}
        >
          <Image
            src={back.src}
            alt={back.alt}
            width={1080}
            height={1920}
            sizes="16rem"
            className="h-auto w-full"
          />
        </div>
      )}
      <div className={`${frame} relative ${back ? "w-[78%]" : "w-full"}`}>
        <Image
          src={front.src}
          alt={front.alt}
          width={1080}
          height={1920}
          sizes="18rem"
          className="h-auto w-full"
          preload
        />
      </div>
    </div>
  );
}
