import "./styles.module.scss";
import { projects } from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function HorizontalPortfolio() {
  return (
    <div className="gallery">
      <div className="horizontal-scroll-wrapper">
        {projects.map(({ project_name, thumbnail }, index) => (
          <div key={index} className="img-wrapper">
            <Link href={`projets/${project_name}`}>
              <Image
                className="image"
                src={thumbnail.url}
                alt={thumbnail.alt}
                objectFit="contain"
                layout="fill"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
