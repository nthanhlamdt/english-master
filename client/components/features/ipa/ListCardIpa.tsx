import { ListCardIpaProps } from "@/types";
import CardIpa from "./CardIpa";


export function ListCardIpa({ soundType, symbols }: ListCardIpaProps) {
  const soundTypeText = {
    vowel: 'Nguyên âm',
    diphthong: 'Nguyên âm đôi',
    consonant: 'Phụ âm',
  }

  return (
    <div>
      <h2 className="my-4 text-xl font-bold">{soundTypeText[soundType]}</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5">
        {
          symbols.map(symbol => (
            <CardIpa key={symbol.symbol} {...symbol} soundType={soundType} />
          ))
        }
      </div>
    </div>
  )
}
