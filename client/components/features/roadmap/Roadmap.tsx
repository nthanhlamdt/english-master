'use client'

import { useState } from "react";
import LevelSelection from "./LevelSelection";
import RoadmapTimeline from "./RoadmapTimeline";

export function Roadmap() {
  const [selectedLevel, setSelectedLevel] = useState("beginner")

  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <LevelSelection
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
      />

      <RoadmapTimeline
        selectedLevel={selectedLevel}
      />
    </div>
  )
}
