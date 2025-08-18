export type apiType = {
  soundType: 'vowel' | 'diphthong' | 'consonant'
  sound: string
  example: string
  image: string
  audio: string
  video: string
  text: string
  textHighlight: string
  textHighlightColor: string
}

export interface CardIpaProps {
  symbol: string
  exampleWords: string
  exampleSymbol: string
  soundType: 'vowel' | 'diphthong' | 'consonant'
}

export interface ListCardIpaProps {
  soundType: 'vowel' | 'diphthong' | 'consonant'
  symbols: CardIpaProps[]
}
