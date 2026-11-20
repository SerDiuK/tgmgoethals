import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { photo, profile } from "@/lib/profile";

export const alt = `${profile.name}, ${profile.role} at ${profile.company}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

const petrol = "#24485c";
const amber = "#f9ab1c";

async function googleFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replaceAll(" ", "+")}:wght@${weight}`,
  ).then((res) => res.text());
  const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1];
  if (!url) {
    throw new Error(`Google Fonts returned no TrueType file for ${family} ${weight}`);
  }
  return fetch(url).then((res) => res.arrayBuffer());
}

export default async function OpengraphImage() {
  const [oswaldLight, oswaldBold, openSans, portrait] = await Promise.all([
    googleFont("Oswald", 300),
    googleFont("Oswald", 700),
    googleFont("Open Sans", 400),
    readFile(join(process.cwd(), "public", photo.src), "base64"),
  ]);

  const png = new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: petrol }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "76px 40px 60px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderLeft: `12px solid ${amber}`,
              paddingLeft: 40,
            }}
          >
            <div
              style={{
                fontFamily: "Oswald",
                fontWeight: 300,
                fontSize: 40,
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              {`${profile.role} at ${profile.company}`}
            </div>
            <div
              style={{
                marginTop: 14,
                fontFamily: "Oswald",
                fontWeight: 700,
                fontSize: 128,
                lineHeight: 1,
                color: "#ffffff",
              }}
            >
              {profile.name}
            </div>
            <div
              style={{
                marginTop: 30,
                fontFamily: "Open Sans",
                fontSize: 32,
                color: "rgba(255, 255, 255, 0.88)",
              }}
            >
              Senior full-stack engineer & tech lead
            </div>
          </div>
          <div
            style={{
              paddingLeft: 52,
              fontFamily: "Oswald",
              fontWeight: 300,
              fontSize: 32,
              color: amber,
            }}
          >
            tgmgoethals.dev
          </div>
        </div>
        <div style={{ width: 12, background: amber }} />
        <img
          src={`data:image/jpeg;base64,${portrait}`}
          alt=""
          width={420}
          height={630}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Oswald", data: oswaldLight, weight: 300, style: "normal" },
        { name: "Oswald", data: oswaldBold, weight: 700, style: "normal" },
        { name: "Open Sans", data: openSans, weight: 400, style: "normal" },
      ],
    },
  );

  const jpeg = await sharp(Buffer.from(await png.arrayBuffer()))
    .jpeg({ quality: 90, chromaSubsampling: "4:4:4" })
    .toBuffer();

  return new Response(new Uint8Array(jpeg), {
    headers: { "Content-Type": contentType },
  });
}
