import React from 'react'
import CardMovie from './CardMovie'
import { movieData } from '@/mock/data/MovieData'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Movies() {
  return (
    <Card>
      <CardHeader className="flex items-center gap-4">
        <CardTitle className="p-2 bg-gradient-to-r from-pink-500 to-pink-300 rounded-md text-white">
          🎧
        </CardTitle>
        <CardDescription className="text-2xl font-semibold">Danh sách bài nghe</CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {movieData.map((movie) => (
          <CardMovie key={movie.id} {...movie} />
        ))}
      </CardContent>
    </Card>
  )
}
