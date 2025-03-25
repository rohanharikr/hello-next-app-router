import { auth } from '@hellocoop/nextjs'
import {
  HelloProvider,
  LoggedIn,
  LoggedOut,
  logOut,
  UpdateProfileButton,
  ContinueButton,
  useAuth
} from "@hellocoop/nextjs/react";

export default async function Home() {
  const user = await auth()
  return (
    <HelloProvider auth={user}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <LoggedIn>
          <pre>
            {JSON.stringify(user,null,2)}
          </pre>
          <UpdateProfileButton/>
          <button onClick={logOut}>Log out</button>
        </LoggedIn>
        <LoggedOut>
          <ContinueButton/>
        </LoggedOut>
      </div>
    </HelloProvider>
  );
}

// 'use client'

// import {
//   useAuth,
//   LoggedIn,
//   LoggedOut,
//   logOut,
//   UpdateProfileButton,
//   ContinueButton
// } from "@hellocoop/nextjs/react";

// export default function Home2() {
//   const { auth: user } = useAuth()
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <LoggedIn>
//         <pre>
//           {JSON.stringify(user,null,2)}
//         </pre>
//         <UpdateProfileButton/>
//         <button onClick={logOut}>Log out</button>
//       </LoggedIn>
//       <LoggedOut>
//         <ContinueButton/>
//       </LoggedOut>
//     </div>
//   );
// }