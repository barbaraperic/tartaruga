import EntryCard from '@/components/EntryCard'
import HistoryChart from '@/components/HistoryChart'
import NewEntryCard from '@/components/NewEntryCard'
import { getUserId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { SWRProvider } from './swr-provider'

// export const getEntryCount = async () => {
//   const user = await getUserId()

//   const entries = await prisma.entry.findMany({
//     where: {
//       userId: user.id,
//     },
//     orderBy: {
//       createdAt: 'desc',
//     },
//   })

//   return model
// }

export default async function StatisticsPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="flex flex-col space-y-6 p-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        <HistoryChart />
      </div>
    </div>
  )
}
