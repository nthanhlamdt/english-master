import { Card, CardContent } from '@/components/ui/card'
import { IQuickAction } from '@/constants/routes'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CardQuickAction({ title, description, Icon, color, href }: IQuickAction) {
  return (
    <Link href={href}>
      <Card className="border-1 bg-gradient-to-r from-background to-muted/20 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 bg-gradient-to-br ${color} rounded-xl text-white shadow-sm`}>
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
