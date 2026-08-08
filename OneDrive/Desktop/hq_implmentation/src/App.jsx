import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import ImportGuestsPage from './pages/ImportGuestsPage'
import BadgeTemplatePage from './pages/BadgeTemplatePage'
import ReportPage from './pages/ReportPage'
import EditEventPage from './pages/EditEventPage'
import Sidebar from './components/Sidebar'
import './App.css'

function AppShell() {
  return (
    <div className="grid min-h-[100dvh] w-full grid-cols-1 bg-[color:var(--bg-base)] lg:grid-cols-[280px_1fr]">
      <Sidebar />

      <main className="h-[100dvh] overflow-y-auto px-3 py-3 md:px-5 md:py-4">
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/import-guests" element={<ImportGuestsPage />} />
          <Route path="/badge-templates" element={<BadgeTemplatePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/edit-event" element={<EditEventPage />} />
          <Route path="/" element={<Navigate to="/import-guests" replace />} />
          <Route path="*" element={<Navigate to="/import-guests" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
