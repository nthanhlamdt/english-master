import { IRecentActivity } from '@/constants/routes'

export default function CardRecentActiviti({ title, subtitle, time, Icon, color }: IRecentActivity) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-muted/80 to-muted/60 hover:shadow-sm transition-all duration-200">
      <div className={`p-2 bg-gradient-to-br ${color} rounded-lg text-white shadow-sm flex-shrink-0`}>
        <Icon className="h-6 w-6" />
      </div>
      < div className="flex-1 min-w-0" >
        <p className="font-semibold text-md" > {title} </p>
        < p className="text-xs text-muted-foreground" > {subtitle} </p>
        < p className="text-xs text-muted-foreground mt-1" > {time} </p>
      </div>
    </div>
  )
}
