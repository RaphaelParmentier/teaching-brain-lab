import BrainCanvas from "@/components/brain/BrainCanvas";
import ResponsiveTeachingLab from "@/components/responsive/ResponsiveTeachingLab";

export default function Home() {
  return (
    <>
      <div className="hidden xl:block">
        <BrainCanvas />
      </div>

      <div className="block xl:hidden">
        <ResponsiveTeachingLab />
      </div>
    </>
  );
}
