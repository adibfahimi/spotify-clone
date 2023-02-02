interface ProgressBarProps {
  current: string;
  total: string;
}

function convertToSeconds(time: string): number {
  const [minutes, seconds] = time.split(":");
  const minutesInt = parseInt(minutes, 10);
  const secondsInt = parseInt(seconds, 10);
  return 60 * minutesInt + secondsInt;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="flex w-full items-center justify-between gap-2 ">
      <div className="text-[11px] font-normal text-[#b3b3b3]">{current}</div>

      <div className="h-1 w-full rounded-sm bg-[#ffffff4d]">
        <div
          className="h-1 rounded-sm bg-white"
          style={{
            width: `${
              (convertToSeconds(current) / convertToSeconds(total)) * 100
            }%`,
          }}
        ></div>
      </div>
      <div className="text-[11px] font-normal text-[#b3b3b3]">{total}</div>
    </div>
  );
}
