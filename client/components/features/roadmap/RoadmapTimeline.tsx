'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ChevronDown, ChevronUp, Lock, Map, Play } from "lucide-react";
import { motion } from "framer-motion";
import { roadmapData } from "@/mock/data/RoadmapData";
import { useState } from "react";

interface IRoadmapTimelineProps {
  selectedLevel: string;
}

export default function RoadmapTimeline({ selectedLevel }: IRoadmapTimelineProps) {
  const [expandedModules, setExpandedModules] = useState<number[]>([])

  const toggleModule = (id: number) => {
    if (expandedModules.includes(id)) {
      setExpandedModules(expandedModules.filter((moduleId) => moduleId !== id))
    } else {
      setExpandedModules([...expandedModules, id])
    }
  }

  const isModuleExpanded = (id: number) => expandedModules.includes(id)
  return (
    <div className="lg:col-span-3">
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl text-white">
              <Map className="h-5 w-5" />
            </div>
            Lộ trình{" "}
            {selectedLevel === "beginner"
              ? "Cơ bản"
              : selectedLevel === "intermediate"
                ? "Trung cấp"
                : "Nâng cao"}
          </CardTitle>
          <CardDescription className="text-base">
            Theo dõi tiến trình học tập của bạn qua từng module
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500"></div>

            <div className="space-y-6">
              {roadmapData[selectedLevel as keyof typeof roadmapData].map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-2 border-white shadow-md ${module.completed
                      ? "bg-gradient-to-br from-emerald-500 to-teal-500"
                      : module.locked
                        ? "bg-gray-300"
                        : "bg-gradient-to-br from-blue-500 to-indigo-500"
                      }`}
                  >
                    {module.completed && (
                      <CheckCircle className="h-3 w-3 text-white absolute -top-0.5 -left-0.5" />
                    )}
                    {module.locked && <Lock className="h-3 w-3 text-gray-500 absolute -top-0.5 -left-0.5" />}
                  </div>

                  {/* Module card */}
                  <div className="ml-16">
                    <div
                      className={`p-6 rounded-xl border transition-all duration-300 ${module.completed
                        ? "border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30"
                        : module.locked
                          ? "border-gray-200 bg-gray-50 dark:bg-gray-900/30 opacity-60"
                          : "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 hover:shadow-md"
                        }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div
                            className={`p-3 rounded-xl shadow-sm ${module.completed
                              ? "bg-gradient-to-br from-emerald-500 to-teal-500"
                              : module.locked
                                ? "bg-gray-400"
                                : `bg-gradient-to-br ${module.color}`
                              } text-white`}
                          >
                            <module.icon className="h-6 w-6" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold">{module.title}</h3>
                              <Badge
                                variant="outline"
                                className={`text-xs ${module.completed
                                  ? "border-emerald-200 text-emerald-700 bg-emerald-50"
                                  : module.locked
                                    ? "border-gray-200 text-gray-500 bg-gray-50"
                                    : "border-blue-200 text-blue-700 bg-blue-50"
                                  }`}
                              >
                                {module.duration}
                              </Badge>
                              {module.completed && (
                                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 text-xs">
                                  Hoàn thành
                                </Badge>
                              )}
                              {module.locked && (
                                <Badge
                                  variant="outline"
                                  className="border-gray-300 text-gray-500 bg-gray-100 text-xs"
                                >
                                  Khóa
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground mb-4">{module.description}</p>

                            {/* Progress bar */}
                            <div className="space-y-2 mb-4">
                              <div className="flex justify-between text-sm">
                                <span className="font-medium">Tiến độ</span>
                                <span
                                  className={`font-medium ${module.completed
                                    ? "text-emerald-600"
                                    : module.locked
                                      ? "text-gray-500"
                                      : "text-blue-600"
                                    }`}
                                >
                                  {module.progress}%
                                </span>
                              </div>
                              <Progress value={module.progress} className="h-2" />
                            </div>

                            {/* Module details toggle */}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto text-sm font-medium hover:bg-transparent"
                              onClick={() => toggleModule(module.id)}
                              disabled={module.locked}
                            >
                              {isModuleExpanded(module.id) ? (
                                <>
                                  Ẩn chi tiết <ChevronUp className="ml-1 h-4 w-4" />
                                </>
                              ) : (
                                <>
                                  Xem chi tiết <ChevronDown className="ml-1 h-4 w-4" />
                                </>
                              )}
                            </Button>

                            {/* Expanded module details */}
                            {isModuleExpanded(module.id) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 space-y-3"
                              >
                                <h4 className="font-semibold text-sm">Nội dung học:</h4>
                                <div className="grid gap-2">
                                  {module.modules.map((subModule, subIndex) => (
                                    <div
                                      key={subIndex}
                                      className="flex items-center justify-between p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-border/50"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div
                                          className={`w-6 h-6 rounded-full flex items-center justify-center ${subModule.completed
                                            ? "bg-emerald-500 text-white"
                                            : "bg-gray-200 text-gray-500"
                                            }`}
                                        >
                                          {subModule.completed ? (
                                            <CheckCircle className="h-4 w-4" />
                                          ) : (
                                            <span className="text-xs font-medium">{subIndex + 1}</span>
                                          )}
                                        </div>
                                        <span className="font-medium">{subModule.name}</span>
                                      </div>
                                      <Badge variant="outline" className="text-xs">
                                        {subModule.lessons} bài
                                      </Badge>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          {!module.locked && (
                            <Button
                              className={`${module.completed
                                ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                                : `bg-gradient-to-r ${module.color}`
                                } text-white border-0 shadow-md hover:shadow-lg transition-all duration-300`}
                            >
                              {module.completed ? (
                                <>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Ôn tập
                                </>
                              ) : (
                                <>
                                  <Play className="mr-2 h-4 w-4" />
                                  {module.progress > 0 ? "Tiếp tục" : "Bắt đầu"}
                                </>
                              )}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
