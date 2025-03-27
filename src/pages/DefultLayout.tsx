import Header from '@/components/Header'
import { Outlet } from 'react-router'

export default function DefultLayout() {
    return (
        <div className=' w-full relative font-[Jost]'>
            <Header />
            <Outlet />
        </div>
    )
}
