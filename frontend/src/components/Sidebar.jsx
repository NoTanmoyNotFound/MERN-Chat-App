import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import SidebarSkeleton from './skeletons/SidebarSkeleton';
import { Users } from 'lucide-react';

const Sidebar = () => {
    const {getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore()

    const onlineUsers = [];

    useEffect(()=>{
        getUsers()
    },[getUsers])

    if (isUsersLoading) return <SidebarSkeleton />

  return (
    <aside className='h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200'>
        <div className='border-b border-base-300 w-full p-5'>
            <div className='flex items-center gap-2'>
                <Users className='size-6' />
                <span className='font-medium hidden lg:block'>Contacts</span>
            </div>
            {/* todo: online filter toggle */}
        </div>
    </aside>
  )
}

export default Sidebar
