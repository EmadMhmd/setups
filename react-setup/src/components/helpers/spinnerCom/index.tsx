import React from 'react';
import { Spinner } from 'reactstrap';

function Spin() {
  return (
    <div style={{
      display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100, marginBottom: 40,
    }}
    >
      <Spinner style={{ width: '3rem', height: '3rem', color: '#0070cd' }} />
    </div>
  );
}

export default Spin;
