import { CardIpaProps } from "@/types";
import Link from "next/link";

export default function CardIpa({ symbol, exampleWords, exampleSymbol, soundType }: CardIpaProps) {
  const soundTypeColor = {
    vowel: 'from-red-500 to-red-500',
    diphthong: 'from-green-500 to-green-500',
    consonant: 'from-blue-500 to-blue-500',
  }
  return (
    <Link href={`/study/ipa/learn/${symbol}`} className="hover:scale-105 cursor-pointer aspect-square flex flex-col justify-center items-center p-4 rounded-xl border border-border/50 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 hover:shadow-md transition-all duration-300">
      <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br ${soundTypeColor[soundType]} flex items-center justify-center text-white text-2xl font-bold mb-2`}>
        {symbol}
      </div>
      <p className="text-sm text-center">{exampleWords}</p>
      <p className="text-xs text-muted-foreground text-center">{exampleSymbol}</p>
    </Link>
  )
}
