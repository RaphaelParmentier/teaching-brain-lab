import BrainCanvas from "@/components/brain/BrainCanvas";
import ResponsiveTeachingLab from "@/components/responsive/ResponsiveTeachingLab";

export default function Home() {
  return (
    <>
      <div className="hidden min-[1800px]:block">
        <BrainCanvas />
      </div>

      <div className="block min-[1800px]:hidden">
        <ResponsiveTeachingLab />
      </div>
    </>
  );
}