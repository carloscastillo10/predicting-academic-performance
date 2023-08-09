import { Main } from '@common/Main'
import { Header } from '@components/Header'
import { DashboardLayout } from '@layouts/dashboard'

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <DashboardLayout />
      </Main>
    </>
  )
}
