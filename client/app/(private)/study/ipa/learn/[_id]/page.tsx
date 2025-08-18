import { HeaderIpaLearning, TabsIpaLearning } from "@/components/features"

export default async function page({ params }: { params: { _id: string } }) {
  const { _id } = await params

  return (
    <>
      <HeaderIpaLearning />

      <TabsIpaLearning />
    </>
  )
}
