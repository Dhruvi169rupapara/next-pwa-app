"use client"
import {useRouter} from "next/navigation";

function Home() {
  const router = useRouter();

  return (
    <div className={'p-12'}>
      <p className={'fs-1 text-white fw-bolder mb-4'}>This is Home page.</p>
      <button className={'bg-white px-6 py-2 rounded text-black cursor-pointer'} onClick={() => router.push('/')}>Back</button>
    </div>
  )
}

export default Home;
