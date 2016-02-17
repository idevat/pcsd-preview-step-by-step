import React from 'react'

let Pcsd = ({data})  =>
<div>
  <h1>Pcsd test preview: step by step</h1>
  <ul>
    {data.cluster_list.map(cluster => <li>{cluster.name}</li>)}
  </ul>
</div>

export default Pcsd
