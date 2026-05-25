import BrainCanvas from "@/components/brain/BrainCanvas";
import ResponsiveTeachingLab from "@/components/responsive/ResponsiveTeachingLab";

export default function Home() {
  return (
    <>
      <div className="hidden 2xl:block">
        <BrainCanvas />
      </div>

      <div className="block 2xl:hidden">
        <ResponsiveTeachingLab />
      </div>
    </>
  );
}