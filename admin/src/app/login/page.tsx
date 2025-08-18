import { Branding, LoginForm } from "@/components/features"

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <Branding />
        <LoginForm />
      </div>
    </div>
  )
}
