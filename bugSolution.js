```javascript
// pages/index.js

import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10) || 1;

  // Fetch data with pagination
  const data = fetchData(page);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}

      {/* Pagination controls */}
    </div>
  );
}

async function fetchData(page) {
  // Implement your data fetching logic here with pagination
  // ...
}
```