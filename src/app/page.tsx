import { auth } from './auth';
import Login from './dashboard/components/client/Login';

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Login session={session} />
    </>
  );
}
