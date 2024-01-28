import { Outlet, useLocation } from 'react-router-dom'
import { ComposerPanel } from '../ComposerPanel'

export const Layout = () => {
  const location = useLocation()
  const isRoot = location.pathname === '/'
  return (
    <div>
      <Outlet />
      {isRoot && (
        <div className="w-[600px] float-right">
          <ComposerPanel />
        </div>
      )}
    </div>
  )
}
