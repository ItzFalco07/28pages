import { ModeToggle } from "@/components/ModeToggle";

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
          <li><a href="./4_chat_voice">4_chat_voice</a></li>
          <li><a href="./5_goodmorning_jennifer">5_goodmorning_jennifer</a></li>
          <li><a href="./6_goodday_jacob_jones">6_goodday_jacob_jones</a></li>
          <li><a href="./7_hey_welcome_jane">7_hey_welcome_jane</a></li>
          <li><a href="./8_mini_desktop">8_mini_desktop</a></li>
          <li><a href="./9_scrolling">9_scrolling</a></li>
        </ul>

      </div>
    </>
  );
}
