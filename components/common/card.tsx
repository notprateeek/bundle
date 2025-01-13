import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Squircle } from 'lucide-react'

import Link from 'next/link'

type Props = {
  title: string
  description: string
}

export const CardComponent = ({ title, description }: Props) => {
  return (
    <Card className="w-[240px] hover:shadow-inner">
      <Link href={`/${title.toLowerCase()}`}>
        <CardHeader className="">
          <Squircle className="mb-2" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  )
}
