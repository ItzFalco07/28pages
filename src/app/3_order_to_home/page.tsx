import { Bell } from 'lucide-react';

export default function Page() {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      <div className="relative w-full max-w-md lg:max-w-sm h-[90vh] md:rounded-2xl lg:rounded-[50px] bg-[#d7e7ff]">
        <div className="w-full my-10 flex justify-between px-4">
          <img className="w-[40px] h-[40px] rounded-full" src="https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className='px-4 py-2 bg-white rounded-full flex gap-2 text-black font-semibold'>
            <Bell stroke='#000' fill='#000' size={20} />
            3
          </div>
        </div>

        <div className='w-full mt-24 text-black text-2xl px-4'>
          <h1 className='font-bold'>Hello Mathew!</h1>
          <h1 className='text-zinc-500'>What would you like to do?</h1>
        </div>

        <div className='w-full px-4 grid grid-cols-2 gap-2 py-4 overflow-scroll text-black'>
          {/* column _ 1 */}
          <div className='w-full flex flex-col gap-2'>
            <div className='h-fit cursor-pointer font-semibold flex flex-col gap-4 px-2 py-6 w-full bg-[#f1f8fd] rounded-2xl'>
              <h1 className='text-sm mx-2'>I want to go vecation with my family</h1>

              <div className="w-full h-fit rounded-xl p-2 bg-white grid grid-cols-6 gap-1">
                <img className="col-span-4 rounded-md" src="https://images.unsplash.com/photo-1674386491558-516335043748?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className="col-span-2 h-full rounded-md" src="https://images.unsplash.com/photo-1705407197154-e06fd95e6589?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

              </div>
            </div>

            <div className='h-fit cursor-pointer font-semibold flex flex-col gap-4 px-2 py-6 w-full bg-[#f1f8fd] rounded-2xl'>
              <h1 className='text-sm mx-2'>I want to go vecation with my family</h1>

              <div className="w-full h-fit rounded-xl p-2 bg-white grid grid-cols-6 gap-1">
                <img className="col-span-4 rounded-md" src="https://images.unsplash.com/photo-1674386491558-516335043748?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className="col-span-2 rounded-md" src="https://images.unsplash.com/photo-1705407197154-e06fd95e6589?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

              </div>
            </div>
          </div>

          {/* column _ 2 */}
          <div className='w-full flex flex-col gap-2'>
            <div className='h-fit cursor-pointer font-semibold flex flex-col gap-4 px-2 py-6 w-full bg-[#f1f8fd] rounded-2xl'>
              <h1 className='text-sm mx-2'>Find a beach with temprature of 75 Degree of heat</h1>

              <div className="w-full h-fit rounded-xl p-2 bg-white grid grid-cols-6 gap-1">
                <img className="col-span-4 h-full rounded-md" src="https://plus.unsplash.com/premium_photo-1673002094029-7b23531aa342?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2glMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" />
                <img className="col-span-2 rounded-md" src="https://plus.unsplash.com/premium_photo-1690415398272-2cd0b4286af3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" />
                <img className="col-span-2 rounded-md" src="https://images.unsplash.com/photo-1597910037383-d79beb2b39c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className="col-span-4 h-full rounded-md" src="https://images.unsplash.com/photo-1630083482715-cc3fee05dbcf?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>



            <div className='h-fit cursor-pointer font-semibold flex flex-col gap-4 px-2 py-6 w-full bg-[#f1f8fd] rounded-2xl'>
              <h1 className='text-sm mx-2'>I want to go vecation with my family</h1>

              <div className="w-full h-fit rounded-xl p-2 bg-white grid grid-cols-6 gap-1">
                <img className="col-span-4 rounded-md" src="https://images.unsplash.com/photo-1674386491558-516335043748?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className="col-span-2 rounded-md" src="https://images.unsplash.com/photo-1705407197154-e06fd95e6589?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}