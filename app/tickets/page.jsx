import React, { Suspense } from 'react'
import TicketList from './TicketList'


export default function page() {
  return (
<main>
  <nav>
    <h2>Tickets</h2>
    <p><small>Currently open tickets</small></p>
  </nav>
  {/* Setting suspense boundry */}
  {/* <Suspense fallback={<Loading/>}>  */}
  <Suspense>
  <TicketList/>
  </Suspense>

</main>
  )
}
