import Image from 'next/image'
import TodoList from './components/TodoList'
import AddToDo from './components/AddToDo'

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-primary to to-secondary h-screen flex justify-center items-center">

      <div className='px-3 py-4 bg-opacity-50 rounded-xl bg-white w-full max-w-md bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60  backdrop-blur-xl'>

        <TodoList />
        <AddToDo />

        <div className='w-1/2 h-1.5 bg-black/70 rounded mx-auto mt-6 '> </div>

      </div>

    </main>
  )
}
