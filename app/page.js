import AppWrapper from "./appWrapper"
import PatientList from "./components/patientList"

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col font-medium">
      <AppWrapper>
        <PatientList />
      </AppWrapper>
    </main>
  )
}
