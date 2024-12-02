import Welcome from "@/components/home";
import ImageGallery from "@/components/gallery"
import VideoBlock from "@/components/videoblock"
import Einladung from "@/components/einladung"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Welcome />
      <ImageGallery />
      <VideoBlock />
      <Einladung />
    </main>
  )
}
