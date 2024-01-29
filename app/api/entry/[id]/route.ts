import { update } from '@/utils/actions'
import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const PATCH = async (request: Request, { params }) => {
  const { updates } = await request.json()
  const user = await getUserId()
  const entry = await prisma.entry.update({
    where: {
      id: params.id,
      userId: user.id,
    },
    data: {
      content: updates,
    },
  })

  update(['/dashboard/collection'])

  return NextResponse.json({ data: entry })
}

export const DELETE = async (request: Request, { params }) => {
  const user = await getUserId()
  const entry = await prisma.entry.delete({
    where: {
      id: params.id,
      userId: user.id,
    },
  })

  update(['/dashboard/collection'])

  return NextResponse.json({ data: entry })
}
