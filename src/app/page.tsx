import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-between px-10 py-4 items-center">
        <h1>Special UX</h1>
        <ModeToggle />
      </div>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-fit p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <ul>
          <li><a href="./1_how_can_i_help">1_how_can_i_help</a></li>
          <li><a href="./2_bluewave_clearglass_mic">2_bluewave_clearglass_mic</a></li>
          <li><a href="./3_order_to_home">3_order_to_home</a></li>
        </ul>

      </div>
    </>
  );
}
