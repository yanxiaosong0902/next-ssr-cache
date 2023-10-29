import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export default function Index({
  time,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <h1>SSR Caching with Next.js</h1>
      <time dateTime={time}>{time}</time>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<{ time: string }> = async ({
  res,
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=59'
  )
  res.setHeader(
    'yanxiaosong',
    'hahahahah'
  )

  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}
